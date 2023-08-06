FROM gcr.io/kaniko-project/executor:v1.8.0 as kaniko
FROM ubuntu:20.04

# ----------------------------------------------------------------
# Copy the kaniko executable and cloud container registry helpers.
# Then, set up the tool.
# ----------------------------------------------------------------
COPY --from=kaniko /kaniko/executor /kaniko/
COPY --from=kaniko /kaniko/docker-credential-gcr /kaniko/
COPY --from=kaniko /kaniko/docker-credential-ecr-login /kaniko/

COPY config.json /kaniko/.docker/config.json

ENV DOCKER_CONFIG /kaniko/.docker/
ENV DOCKER_CREDENTIAL_GCR_CONFIG /kaniko/.config/gcloud/docker_credential_gcr_config.json
ENV PATH ${PATH}:/kaniko

RUN mkdir -p /kaniko/.docker \
    && mkdir -p /kaniko/ssl \
    && docker-credential-gcr config --token-source=env


# ---------------------------------------------------------------------
# ---------------------------------------------------------------------
# ------------------  Install general services  -----------------------
# ---------------------------------------------------------------------
# ---------------------------------------------------------------------

# ---------------------------------------------------------------------
# Install https://github.com/krallin/tini - a very small 'init' process
# that helps processing signalls sent to the container properly.
# ---------------------------------------------------------------------
ARG TINI_VERSION=v0.19.0

RUN apt-get update \
    && apt-get install -y curl \
    && curl -Lo /usr/local/bin/tini https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-amd64 \
    && chmod +x /usr/local/bin/tini

# --------------------------------------------------------------------------
# Install and configure sshd.
# https://docs.docker.com/engine/examples/running_ssh_service for reference.
# --------------------------------------------------------------------------
RUN apt-get install -y openssh-server \
    && mkdir -p /var/run/sshd

EXPOSE 22

# ----------------------------------------
# Install GitLab CI required dependencies.
# ----------------------------------------
ARG GITLAB_RUNNER_VERSION=v12.9.0

RUN curl -Lo /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/${GITLAB_RUNNER_VERSION}/binaries/gitlab-runner-linux-amd64 \
    && chmod +x /usr/local/bin/gitlab-runner \
    # Test if the downloaded file was indeed a binary and not, for example,
    # an HTML page representing S3's internal server error message or something
    # like that.
    && gitlab-runner --version

RUN apt-get install -y git-lfs \
    && git lfs install --skip-repo

# ---------------------------------------------------------------------
# ---------------------------------------------------------------------
# ------------------  Install internal services  ----------------------
# ---------------------------------------------------------------------
# ---------------------------------------------------------------------

# ----------------------------------------
# Install Python.
# ----------------------------------------

RUN apt-get update -y \
    && apt-get install -y python3-pip

# ----------------------------------------
# Install AWS ClI using python.
# ----------------------------------------

RUN pip3 install awscli

# -------------------------------------------------------------------------------------
# Execute a startup script.
# https://success.docker.com/article/use-a-script-to-initialize-stateful-container-data
# for reference.
# -------------------------------------------------------------------------------------
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["tini", "--", "/usr/local/bin/docker-entrypoint.sh"]