FROM gitlab/gitlab-runner:latest

# Ensure the base image is compatible with ARM64; if not, you may need to find an alternative base image or build one.

# Install dependencies
RUN apt-get update && apt-get install -y \
    jq \
    gettext-base \
    dumb-init  # Install dumb-init from apt which should pull the correct architecture version

# Copy the config template files to be used for generating our runner and driver config
COPY config_runner_template.toml /tmp/
COPY config_driver_template.toml /tmp/

# Download the Fargate driver that matches the ARM64 architecture
ADD https://gitlab-runner-custom-fargate-downloads.s3.amazonaws.com/master/fargate-linux-arm64 /usr/local/bin/fargate-linux
RUN chmod +x /usr/local/bin/fargate-linux

# Copy and prepare the entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["dumb-init", "/usr/local/bin/docker-entrypoint.sh"]