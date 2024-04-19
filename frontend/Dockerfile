

# Use the official Node.js image as base
FROM node:16

# Set working directory inside the container

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (optional)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
