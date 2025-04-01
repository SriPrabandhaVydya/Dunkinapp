# Use Node.js LTS (Hydrogen) as the base image
FROM node:20.11.1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the web app
RUN npm run build:web

# Install serve to host the static files
RUN npm install -g serve

# Expose port 83
EXPOSE 83

# Start the server on port 83
CMD ["serve", "-s", "dist", "-l", "83"]