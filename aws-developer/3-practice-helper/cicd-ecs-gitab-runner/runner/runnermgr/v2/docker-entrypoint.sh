#!/bin/bash

# Default to https://gitlab.com if the GitLab URL was not specified
export GITLAB_URL=${GITLAB_URL:=https://gitlab.com}

###############################################################################
# Unregister the Runner from the list of runners of the project identified by the
# authentication token.
#
# Arguments:
#   $1 - Authorization token obtained after registering the runner in the
#        project
###############################################################################
unregister_runner() {
    curl --request DELETE "${GITLAB_URL}/api/v4/runners" --form "token=$1"
}

# Always unregister runner on exit
function gitlab-unregister {
    gitlab-runner unregister --all-runners
}

trap 'gitlab-unregister' EXIT SIGHUP SIGINT SIGTERM

###############################################################################
# Register the Runner in the desired project, identified by the registration
# token of that project.
#
# The function populates the "auth_token" variable with the authentication
# token for the registered Runner.
#
# Arguments:
#   $1 - Registration token
#   $2 - List of tags for the Runner, separated by comma
###############################################################################
register_runner() {

    runner_identification="RUNNER_$(date +%s)"

    result_json=$(
        curl --request POST "${GITLAB_URL}/api/v4/runners" \
            --form "token=$1" \
            --form "description=${runner_identification}" \
            --form "tag_list=$2"
    )

    auth_token=$(echo $result_json | jq -r '.token')

    export RUNNER_NAME=$runner_identification
    export RUNNER_AUTH_TOKEN=$auth_token
    envsubst < /tmp/config_runner_template.toml > /etc/gitlab-runner/config.toml
}

###############################################################################
# Create the Fargate driver TOML configuration file based on a template
# that is persisted in the repository. It uses the environment variables
# passed to the container to set the correct values in that file.
###############################################################################
create_driver_config() {
    envsubst < /tmp/config_driver_template.toml > /etc/gitlab-runner/config_driver.toml
}

create_driver_config
register_runner ${GITLAB_REGISTRATION_TOKEN} ${RUNNER_TAG_LIST}

# Gitlab runner run will block the script until a docker stop is emitted
gitlab-runner run

unregister_runner ${auth_token}
