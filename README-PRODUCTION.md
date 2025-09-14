# 🚀 Ostimeline Production Deployment Guide

## Overview

This guide will help you deploy your Ostimeline application to a production server using Docker and Nginx.

## Prerequisites

- VPS with Ubuntu/Debian
- SSH access to your server
- Domain name (optional, but recommended)

## Quick Start

### 1. Connect to Your VPS

```bash
ssh root@time4vps.cloud
```

### 2. Upload Your Project

```bash
# From your local machine
scp -r /Users/puma/Documents/projects/Ostimeline root@time4vps.cloud:/var/www/
```

### 3. Run Deployment Script

```bash
# On your VPS
cd /var/www/Ostimeline
chmod +x deploy-production.sh
./deploy-production.sh
```

### 4. Start the Application

```bash
chmod +x start-production.sh
./start-production.sh
```

## Manual Setup (Alternative)

### 1. Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
systemctl enable docker
systemctl start docker
```

### 2. Install Docker Compose

```bash
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### 3. Configure Firewall

```bash
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw --force enable
```

### 4. Start Services

```bash
docker-compose up -d --build
```

## Architecture

### Services

- **Frontend**: React app served by Nginx (Port 80)
- **Backend**: Node.js API server (Port 8080)
- **Database**: PostgreSQL (Port 5432)
- **Reverse Proxy**: Nginx with SSL (Port 443)

### Network

- All services communicate through Docker network
- Frontend proxies API calls to backend
- SSL termination at reverse proxy level

## Configuration

### Environment Variables

The application uses these environment variables:

- `NODE_ENV=production`
- `DB_HOST=postgres`
- `DB_PORT=5432`
- `DB_NAME=ostimeline`
- `DB_USER=ostimeline_user`
- `DB_PASSWORD=ostimeline_password`

### SSL Certificates

- Self-signed certificates are generated for testing
- For production, replace with Let's Encrypt certificates

## Monitoring

### Check Service Status

```bash
docker-compose ps
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Health Checks

```bash
# Test frontend
curl http://your-server-ip

# Test backend
curl http://your-server-ip:8080/posts

# Test database
docker-compose exec postgres psql -U ostimeline_user -d ostimeline -c "SELECT version();"
```

## Maintenance

### Update Application

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Backup Database

```bash
docker-compose exec postgres pg_dump -U ostimeline_user ostimeline > backup.sql
```

### Restore Database

```bash
docker-compose exec -T postgres psql -U ostimeline_user ostimeline < backup.sql
```

## Troubleshooting

### Common Issues

#### Services Won't Start

```bash
# Check logs
docker-compose logs

# Check disk space
df -h

# Check memory
free -h
```

#### Database Connection Issues

```bash
# Check if database is running
docker-compose ps postgres

# Check database logs
docker-compose logs postgres

# Test connection
docker-compose exec backend node -e "console.log('Testing DB connection...')"
```

#### Frontend Not Loading

```bash
# Check if frontend container is running
docker-compose ps frontend

# Check frontend logs
docker-compose logs frontend

# Test nginx configuration
docker-compose exec frontend nginx -t
```

### Performance Optimization

#### Increase Memory Limits

Edit `docker-compose.yml`:

```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          memory: 512M
```

#### Enable Log Rotation

```bash
# Install logrotate
apt install logrotate

# Create logrotate config
cat > /etc/logrotate.d/docker-containers << EOF
/var/lib/docker/containers/*/*.log {
  rotate 7
  daily
  compress
  size=1M
  missingok
  delaycompress
  copytruncate
}
EOF
```

## Security

### Firewall Rules

```bash
# Allow only necessary ports
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw deny 8080   # Block direct backend access
ufw deny 5432   # Block direct database access
```

### SSL Configuration

For production, use Let's Encrypt:

```bash
# Install certbot
apt install certbot

# Generate certificate
certbot certonly --standalone -d yourdomain.com

# Update nginx config to use real certificates
```

## Scaling

### Horizontal Scaling

```yaml
services:
  backend:
    deploy:
      replicas: 3
  frontend:
    deploy:
      replicas: 2
```

### Load Balancing

Add nginx upstream configuration for multiple backend instances.

## Support

If you encounter issues:

1. Check the logs: `docker-compose logs -f`
2. Verify service status: `docker-compose ps`
3. Test individual components
4. Check system resources: `htop`, `df -h`

## Production Checklist

- [ ] SSL certificates configured
- [ ] Firewall rules set
- [ ] Database backups scheduled
- [ ] Monitoring configured
- [ ] Log rotation enabled
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Health checks working
- [ ] Performance optimized
- [ ] Documentation updated
