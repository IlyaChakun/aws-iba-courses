#!/bin/bash

ps -ef | grep test-cicd.jar | grep -v grep | awk '{print $2}' | xargs kill