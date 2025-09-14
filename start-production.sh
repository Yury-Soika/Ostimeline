#!/bin/bash

# Start Ostimeline Production Environment
# Run this after uploading your project files

set -e

echo "🚀 Starting Ostimeline Production Environment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ docker-compose.yml not found. Please run this script from the project root directory."
    exit 1
fi

# Stop any existing containers
print_status "Stopping existing containers..."
docker-compose down

# Remove old images to force rebuild
print_status "Removing old images..."
docker-compose down --rmi all

# Build and start services
print_status "Building and starting services..."
docker-compose up -d --build

# Wait for services to be ready
print_status "Waiting for services to start..."
sleep 30

# Check service status
print_status "Checking service status..."
docker-compose ps

# Show logs
print_status "Showing recent logs..."
docker-compose logs --tail=50

print_status "✅ Production environment started!"
print_status ""
print_status "🌐 Your application is now running:"
print_status "   - Frontend: http://your-server-ip"
print_status "   - Backend API: http://your-server-ip:8080"
print_status ""
print_status "📋 Useful commands:"
print_status "   - View logs: docker-compose logs -f"
print_status "   - View specific service logs: docker-compose logs -f [service_name]"
print_status "   - Stop services: docker-compose down"
print_status "   - Restart services: docker-compose restart"
print_status "   - Update services: docker-compose pull && docker-compose up -d"
print_status ""
print_status "🔍 To check if everything is working:"
print_status "   - Test frontend: curl http://your-server-ip"
print_status "   - Test backend: curl http://your-server-ip:8080/posts"
