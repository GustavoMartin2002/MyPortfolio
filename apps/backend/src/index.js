import dotenv from 'dotenv'
import Fastify from 'fastify'
import connectDB from './connect.js'
import middie from '@fastify/middie'
import cors from 'cors'
import { projectRoutes } from './routes/project.route.js'

dotenv.config(); // loading .env 

const fastify = Fastify({
  logger: true,
})

try {
  await connectDB() // connection database
    .then(async () => {
      await fastify.register(middie) // Register of middie

      // Use middleware cors
      fastify.use(cors({
        origin: process.env.ORIGIN || process.env.LOCAL, // allows origin
        methods: ['GET'], // HTTP allowed methods 
        allowedHeaders: ['Content-Type'], // allowed Headers
      }))

      await fastify.register(projectRoutes) // register routes(projects)
      fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' }) // run fastify
      console.log(`http://localhost:${process.env.PORT}`)
    });
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}