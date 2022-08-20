FROM openjdk:11-jdk-oracle
VOLUME /tmp
EXPOSE 7000
ADD target/MFPE-BenchmarkMS-JAR.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]