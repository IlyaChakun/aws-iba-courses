FROM  ubuntu:20.04

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
# Install Java.
# ----------------------------------------
RUN apt-get install -y openjdk-11-jdk

# ----------------------------------------
# Install Maven.
# ----------------------------------------

RUN apt-get install -y maven

# ----------------------------------------
# Install Gradle.
# ----------------------------------------
RUN wget -q https://services.gradle.org/distributions/gradle-4.5.1-bin.zip \
    && apt-get install zip unzip \
    && unzip gradle-4.5.1-bin.zip -d /opt \
    && rm gradle-4.5.1-bin.zip

# Set Gradle in the environment variables
ENV GRADLE_HOME /opt/gradle-4.5.1
ENV PATH $PATH:/opt/gradle-4.5.1/bin

# ----------------------------------------
# Install Python.
# ----------------------------------------

RUN apt-get update -y \
    && apt-get install -y python3-pip

# ----------------------------------------
# Install AWS ClI using python.
# ----------------------------------------

RUN pip3 install awscli

# ----------------------------------------
# Install docker using default repo
# ----------------------------------------

RUN	curl -L https://gitlab-docker-machine-downloads.s3.amazonaws.com/v0.16.2-gitlab.11/docker-machine-Linux-x86_64 > /usr/local/bin/docker-machine && \
	chmod +x /usr/local/bin/docker-machine

# ----------------------------------------
# Install jq
# ----------------------------------------
RUN apt-get update - \
    && apt-get -y install jq

# -------------------------------------------------------------------------------------
# Execute a startup script.
# https://success.docker.com/article/use-a-script-to-initialize-stateful-container-data
# for reference.
# -------------------------------------------------------------------------------------
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["tini", "--", "/usr/local/bin/docker-entrypoint.sh"]