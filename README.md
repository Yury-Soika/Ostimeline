# 🚀 Ostimeline

A modern web application showcasing the history of operating systems and computing technology, built with React frontend and Node.js backend.

## 🏗️ Architecture

- **Frontend**: React with Redux, served by Nginx
- **Backend**: Node.js with Express and TypeORM
- **Database**: PostgreSQL
- **Deployment**: Docker containers with Docker Compose

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ostimeline.git
   cd ostimeline
   ```

2. **Start with Docker**
   ```bash
   docker-compose up -d --build
   ```

3. **Access the application**
   - Frontend: http://localhost
   - Backend API: http://localhost:8080

### Manual Development Setup

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🐳 Production Deployment

See [README-PRODUCTION.md](README-PRODUCTION.md) for detailed production deployment instructions.

### Quick Production Deploy
```bash
# On your VPS
git clone https://github.com/yourusername/ostimeline.git
cd ostimeline
chmod +x deploy-production.sh start-production.sh
./deploy-production.sh
./start-production.sh
```

## 📁 Project Structure

```
ostimeline/
├── backend/                 # Node.js API server
│   ├── app/                # Application modules
│   │   ├── users/          # User management
│   │   ├── posts/          # Blog posts
│   │   └── downloads/      # Download management
│   ├── config/             # Configuration files
│   ├── Dockerfile          # Backend container
│   └── server.js           # Main server file
├── frontend/               # React application
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   └── pages/          # Page components
│   ├── Dockerfile          # Frontend container
│   └── nginx.conf          # Nginx configuration
├── nginx/                  # Production Nginx config
├── docker-compose.yml      # Container orchestration
└── deploy-production.sh    # Deployment script
```

## 🔧 Features

- **User Management**: Registration, login, role-based access
- **Content Management**: Blog posts with rich content
- **Download Center**: File downloads with descriptions
- **Responsive Design**: Mobile-friendly interface
- **Security**: JWT authentication, rate limiting, SSL
- **Performance**: Optimized builds, caching, compression

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `docker-compose up` - Start with Docker

### Environment Variables

- `NODE_ENV` - Environment (development/production)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password

## 📝 API Endpoints

- `GET /posts` - Get all posts
- `GET /posts/:id` - Get single post
- `POST /posts` - Create post (admin)
- `PUT /posts/:id` - Update post (admin)
- `DELETE /posts/:id` - Delete post (admin)
- `GET /users` - Get users (admin)
- `POST /users/register` - Register user
- `POST /users/login` - Login user
- `GET /downloads` - Get downloads

## 🔒 Security

- JWT token authentication
- Role-based access control
- Rate limiting
- CORS protection
- Security headers
- SSL/HTTPS support

## 📊 Monitoring

- Health checks for all services
- Docker container monitoring
- Application logs
- Performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the [documentation](README-PRODUCTION.md)
- Open an issue on GitHub
- Contact the development team