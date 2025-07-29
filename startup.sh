#!/bin/bash

# Azure App Service startup script for Next.js standalone build
echo "Starting Next.js standalone application..."

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-3000}

# Create logs directory if it doesn't exist
mkdir -p logs

# Check if PM2 is available and use it, otherwise fallback to node
if command -v pm2 &> /dev/null; then
    echo "Starting with PM2..."
    pm2 start ecosystem.config.js --env production
    pm2 logs
else
    echo "Starting with Node.js..."
    node server.js
fi
