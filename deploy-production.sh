#!/bin/bash

# Ostimeline Production Deployment Script
# Run this on your VPS to deploy the application

set -e  # Exit on any error

echo "🚀 Starting Ostimeline Production Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run as root (use sudo)"
    exit 1
fi

# Update system
print_status "Updating system packages..."
apt update && apt upgrade -y

# Install Docker
print_status "Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl enable docker
    systemctl start docker
    rm get-docker.sh
else
    print_status "Docker is already installed"
fi

# Install Docker Compose
print_status "Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
else
    print_status "Docker Compose is already installed"
fi

# Create application directory
print_status "Creating application directory..."
mkdir -p /var/www/ostimeline
cd /var/www/ostimeline

# Configure firewall
print_status "Configuring firewall..."
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw --force enable

# Create SSL certificate directory
print_status "Creating SSL certificate directory..."
mkdir -p nginx/ssl

# Generate self-signed SSL certificate (for testing)
print_warning "Generating self-signed SSL certificate..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout nginx/ssl/key.pem \
    -out nginx/ssl/cert.pem \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

print_status "✅ Production deployment setup completed!"
print_status "📋 Next steps:"
print_status "1. Upload your project files to /var/www/ostimeline"
print_status "2. Run: docker-compose up -d"
print_status "3. Your application will be available at:"
print_status "   - HTTP: http://your-server-ip"
print_status "   - HTTPS: https://your-server-ip"
print_status ""
print_status "📋 Useful commands:"
print_status "   - View logs: docker-compose logs -f"
print_status "   - Stop: docker-compose down"
print_status "   - Restart: docker-compose restart"
print_status "   - Update: docker-compose pull && docker-compose up -d"
