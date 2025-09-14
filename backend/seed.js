require('rootpath')();
require('reflect-metadata');
const AppDataSource = require('./database');

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');

    // No hardcoded users or posts - database will be populated manually
    console.log('Database seeding completed - no hardcoded data');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
