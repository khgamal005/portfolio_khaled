/* eslint-disable no-unused-vars */
import { client } from './src/client.js';

// Add a new project to Sanity
async function addProject(projectData) {
  try {
    const result = await client.create({
      _type: 'works',
      ...projectData
    });
    console.log('Project added successfully:', result);
    return result;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
}

// Example: Add a MERN project
const mernProject = {
  title: 'MERN Social Media App',
  description: 'A full-stack social media platform built with MongoDB, Express, React, and Node.js',
  imgUrl: null, // You'll need to upload an image separately or provide an image URL
  tags: ['Mern'],
  projectLink: 'https://your-mern-app-demo.com',
  codeLink: 'https://github.com/yourusername/mern-social-app'
};

// Example: Add a Next.js project
const nextProject = {
  title: 'Next.js E-commerce Dashboard',
  description: 'A modern e-commerce admin dashboard built with Next.js, featuring real-time analytics',
  imgUrl: null, // You'll need to upload an image separately or provide an image URL
  tags: ['Next js'],
  projectLink: 'https://your-nextjs-app-demo.com',
  codeLink: 'https://github.com/yourusername/nextjs-ecommerce'
};

// Run this to add projects
// addProject(mernProject); // Uncomment to add MERN project
// addProject(nextProject); // Uncomment to add Next.js project

console.log('To add a project, uncomment one of the addProject() calls above and run: node addProject.js');