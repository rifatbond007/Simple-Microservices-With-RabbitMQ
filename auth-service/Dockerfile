FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy source code
COPY src ./src

# Expose service port
EXPOSE 4000

# Start the service
CMD ["node", "src/app.js"]
