# Use official Node image
FROM node:20-alpine3.22

# Work directory inside container
WORKDIR /app

# Copy only package files first (for caching)
COPY package.json package-lock.json* ./

# Install dependencies (axios & react-router-dom included)
RUN npm install

# Copy the rest of the frontend code
COPY . .
RUN apk add --no-cache bash

# Expose Vite dev server port
EXPOSE 5173

# Dev mode
CMD ["npm", "run", "dev", "--", "--host"]
