const { EntitySchema } = require('typeorm');

const Post = new EntitySchema({
  name: 'Post',
  tableName: 'posts',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    title: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    content: {
      type: 'text',
      nullable: false,
    },
    status: {
      type: 'varchar',
      length: 20,
      default: 'published',
    },
    authorId: {
      type: 'int',
      nullable: true,
    },
    createdAt: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    updatedAt: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    },
  },
});

module.exports = Post;
