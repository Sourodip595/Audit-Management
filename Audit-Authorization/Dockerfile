FROM openjdk:11-jdk-oracle
VOLUME /tmp
ADD target/MFPE-AuthorizationMS-JAR.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]