FROM openjdk:11-jdk-oracle
VOLUME /tmp
ADD target/MFPE-BenchmarkMS-JAR.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]