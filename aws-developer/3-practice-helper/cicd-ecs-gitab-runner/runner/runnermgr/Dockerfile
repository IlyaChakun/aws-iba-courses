FROM gitlab/gitlab-runner:latest

# Install jq to be used for parsing the Gitlab API result
RUN apt-get update
RUN apt-get install -y jq

# Install gettext for envsubst
RUN apt-get install -y gettext-base

# Download dumb-init
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

# Copy the config template files to be used for generating our runner and driver config
COPY config_runner_template.toml /tmp/
COPY config_driver_template.toml /tmp/

# Copy the fargate driver
ADD https://gitlab-runner-custom-fargate-downloads.s3.amazonaws.com/master/fargate-linux-amd64 /usr/local/bin/fargate-linux-amd64
RUN chmod +x /usr/local/bin/fargate-linux-amd64

# -------------------------------------------------------------------------------------
# Execute a startup script.
# https://success.docker.com/article/use-a-script-to-initialize-stateful-container-data
# for reference.
# -------------------------------------------------------------------------------------
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh / # backwards compat
ENTRYPOINT ["dumb-init", "docker-entrypoint.sh"]