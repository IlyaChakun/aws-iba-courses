########Maven build stage########
FROM maven:3.6-jdk-11 as maven_build
WORKDIR /app

#copy pom
COPY pom.xml .

#resolve maven dependencies
RUN mvn clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r target/

#copy source
COPY src ./src
#COPY ../src ./src
#COPY ../cicd/sample-java-app/buildspec.yml .

# build the app (no dependency download here)
RUN mvn clean package  -Dmaven.test.skip

# split the built app into multiple layers to improve layer rebuild
RUN mkdir -p target/docker-packaging && cd target/docker-packaging && jar -xf ../test-cicd*.jar

FROM openjdk:11.0-jre
WORKDIR /app


COPY --from=maven_build /app/target/test-cicd*.jar .

CMD [ "java", "-jar","./test-cicd.jar" ]

EXPOSE 8080
