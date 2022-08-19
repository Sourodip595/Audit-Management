FROM openjdk:11-jdk-oracle
VOLUME /tmp
EXPOSE 8100
ADD target/MFPE-AuthorizationMS-JAR.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]