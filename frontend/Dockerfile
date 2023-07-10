# Base image with Node.js and NPM
FROM node:14.17.0 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the web server
FROM nginx:1.21.1-alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start NGINX web server in the foreground
CMD ["nginx", "-g", "daemon off;"]
