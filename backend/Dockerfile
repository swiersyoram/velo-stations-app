# Use an official OpenJDK runtime as the base image
FROM openjdk:17-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file to the container
COPY /antwerp-velo-responseStations-0.0.1-SNAPSHOT.jar /app

# Expose the port that the Spring Boot application uses
EXPOSE 8080

# Set the entrypoint command to run the JAR file
ENTRYPOINT ["java", "-jar", "antwerp-velo-responseStations-0.0.1-SNAPSHOT.jar"]
