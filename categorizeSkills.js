import { client } from './src/client.js'

const categoryMap = {
  javascript: 'languages',
  typescript: 'languages',
  Sql: 'languages',
  sql: 'languages',
  sass: 'languages',
  React: 'frameworks',
  'Next': 'frameworks',
  Nest: 'frameworks',
  'tailwind css': 'frameworks',
  'material ui': 'frameworks',
  'Prisma': 'frameworks',
  prisma: 'frameworks',
  Redux: 'frameworks',
  zustand: 'frameworks',
  'React Query': 'frameworks',
  Jest: 'frameworks',
  Test: 'frameworks',
  'no sql': 'databases',
  'NoSQL': 'databases',
  Redis: 'databases',
  Kafka: 'messaging',
  Rabbitmq: 'messaging',
  'Bull mq': 'messaging',
  'google pub/sub': 'messaging',
  'socket io': 'messaging',
  Docker: 'devops',
  Nginx: 'devops',
  'Github actions': 'devops',
  Git: 'devops',
}

async function categorize() {
  const skills = await client.fetch('*[_type == "skills"]')

  for (const skill of skills) {
    const category = categoryMap[skill.name]
    if (category) {
      await client.patch(skill._id).set({ category }).commit()
      console.log(`✅ ${skill.name} -> ${category}`)
    } else {
      console.log(`⚠️  No mapping for: ${skill.name}`)
    }
  }

  console.log('\nDone!')
}

categorize()
