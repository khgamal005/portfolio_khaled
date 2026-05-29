import { client } from './src/client.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function addNestJsAbout() {
  try {
    const imagePath = path.join(__dirname, 'src', 'assets', 'nest.jpg')
    const imageBuffer = fs.readFileSync(imagePath)

    const asset = await client.assets.upload('image', imageBuffer, {
      filename: 'nest.jpg',
    })

    console.log('Image uploaded:', asset._id)

    const aboutData = {
      _type: 'abouts',
      title: 'NestJS Developer',
      description: 'Building efficient and scalable server-side applications with NestJS.',
      imgUrl: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      },
    }

    const result = await client.create(aboutData)
    console.log('NestJS Dev entry added successfully!')
    console.log('Document ID:', result._id)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

addNestJsAbout()
