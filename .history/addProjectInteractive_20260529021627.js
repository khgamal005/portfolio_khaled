/* eslint-disable no-undef */
import { client } from './src/client.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function addProjectInteractive() {
  console.log('=== Add New Project to Sanity ===\n');
  
  try {
    const title = await question('Project title: ');
    const description = await question('Project description: ');
    const imageUrl = await question('Image URL (or leave empty if none): ');
    const tags = await question('Tags (comma-separated, e.g., "Mern" or "Next js"): ');
    const projectLink = await question('Project demo URL: ');
    const codeLink = await question('GitHub/Code URL: ');
    
    const projectData = {
      _type: 'works',
      title,
      description,
      imgUrl: imageUrl || null,
      tags: tags.split(',').map(tag => tag.trim()),
      projectLink,
      codeLink
    };
    
    console.log('\nAdding project with the following data:');
    console.log(JSON.stringify(projectData, null, 2));
    
    const confirm = await question('\nConfirm add this project? (yes/no): ');
    
    if (confirm.toLowerCase() === 'yes' || confirm.toLowerCase() === 'y') {
      const result = await client.create(projectData);
      console.log('\n✅ Project added successfully!');
      console.log('Project ID:', result._id);
    } else {
      console.log('\n❌ Cancelled.');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

addProjectInteractive();