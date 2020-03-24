FROM maven:3.6-jdk-11-slim as builder
COPY . .
RUN mvn package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=builder target/app.jar .

EXPOSE 8000
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=production","-jar","app.jar"]
