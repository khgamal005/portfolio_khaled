import { client } from './src/client.js';

// Test the connection and fetch existing works
async function testConnection() {
  try {
    console.log('Testing Sanity connection...');
    const query = '*[_type == "works"][0..5]';
    const works = await client.fetch(query);
    console.log('✅ Connection successful!');
    console.log(`Found ${works.length} existing projects:`);
    works.forEach((work, index) => {
      console.log(`${index + 1}. ${work.title} - Tags: ${work.tags ? work.tags.join(', ') : 'none'}`);
    });
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();