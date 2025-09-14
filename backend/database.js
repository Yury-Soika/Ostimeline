require('reflect-metadata');
const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'ostimeline',
  synchronize: true, // Only for development - creates tables automatically
  logging: false,
  entities: [
    require('./app/users/user.entity'),
    require('./app/posts/post.entity'),
  ],
  migrations: [],
  subscribers: [],
});

module.exports = AppDataSource;
