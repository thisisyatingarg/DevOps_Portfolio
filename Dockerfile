# Stage 1: Base Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependencies first for caching
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

# Install app dependencies
RUN npm install

# Copy entire project
COPY . .

# Build the frontend (Vite builds into ./dist)
RUN npm run build

# Expose the backend port (Express runs on 5000)
EXPOSE 5000

# Start the backend server using tsx
CMD ["npm", "start"]

