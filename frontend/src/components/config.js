// API configuration
const isDevelopment = process.env.NODE_ENV === 'development';

export const apiUrl = isDevelopment 
  ? 'http://localhost:8080'  // Development
  : '/api';  // Production - will be proxied by nginx