require('rootpath')();
require('reflect-metadata');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const AppDataSource = require('./database');

// Helper function to read JSON files
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Helper function to convert old post content to structured format
function convertPostContentToStructured(content) {
  // Convert plain text to structured format
  return {
    type: 'document',
    content: [
      {
        type: 'paragraph',
        content: content,
      },
    ],
  };
}

// Helper function to extract title from page content
function extractPageTitle(content) {
  if (Array.isArray(content) && content.length > 0) {
    const firstElement = content[0];
    if (firstElement.tag === 'h3') {
      return firstElement.content;
    }
  }
  return null;
}

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');

    const UserRepository = AppDataSource.getRepository('User');
    const PostRepository = AppDataSource.getRepository('Post');

    // Seed Users
    console.log('Seeding users...');

    // Check if admin user already exists
    const existingAdmin = await UserRepository.findOne({
      where: { username: 'admin' },
    });
    if (!existingAdmin) {
      const admin = UserRepository.create({
        firstName: 'Admin',
        lastName: 'User',
        username: 'admin',
        passwordHash: bcrypt.hashSync('admin', 10),
        role: 'Admin',
      });
      await UserRepository.save(admin);
      console.log('Admin user created: admin/admin');
    } else {
      console.log('Admin user already exists');
    }

    // Check if regular user already exists
    const existingUser = await UserRepository.findOne({
      where: { username: 'user' },
    });
    if (!existingUser) {
      const user = UserRepository.create({
        firstName: 'Regular',
        lastName: 'User',
        username: 'user',
        passwordHash: bcrypt.hashSync('user', 10),
        role: 'User',
      });
      await UserRepository.save(user);
      console.log('Regular user created: user/user');
    } else {
      console.log('Regular user already exists');
    }

    // Import user from JSON (8.json)
    const userData = readJsonFile(path.join(__dirname, '../8.json'));
    if (userData) {
      const existingMaster = await UserRepository.findOne({
        where: { username: userData.username },
      });
      if (!existingMaster) {
        const masterUser = UserRepository.create({
          firstName: userData.firstName,
          lastName: userData.lastName,
          username: userData.username,
          passwordHash: userData.passwordHash,
          role: userData.role,
        });
        await UserRepository.save(masterUser);
        console.log(`User ${userData.username} imported successfully`);
      } else {
        console.log(`User ${userData.username} already exists`);
      }
    }

    // Pages are static - no need to seed them
    console.log(
      'Pages are static and will be implemented in frontend components'
    );

    // Seed Posts
    console.log('Seeding posts...');
    const postFiles = ['5.json', '6.json', '7.json'];

    for (const fileName of postFiles) {
      const postData = readJsonFile(path.join(__dirname, '../', fileName));
      if (postData) {
        const existingPost = await PostRepository.findOne({
          where: { title: postData.title },
        });
        if (!existingPost) {
          const structuredContent = convertPostContentToStructured(
            postData.content
          );
          const post = PostRepository.create({
            title: postData.title,
            content: structuredContent,
            excerpt: postData.content.substring(0, 200) + '...',
            status: 'published',
            authorId: 1, // Assuming admin user is ID 1
            createdAt: new Date(
              parseInt(postData.createdDate.$date.$numberLong)
            ),
          });
          await PostRepository.save(post);
          console.log(`Post "${postData.title}" imported successfully`);
        } else {
          console.log(`Post "${postData.title}" already exists`);
        }
      }
    }

    // Downloads are hardcoded - no need to seed them
    console.log('Downloads will be hardcoded in the application');

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
