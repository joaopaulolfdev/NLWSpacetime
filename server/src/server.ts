import fastify from 'fastify'
import cors from '@fastify/cors'
import {memoriesRoutes} from './routes/memories'

const app = fastify()

app.register(cors, {
    origin: true, //depois pode colocar a URL do front end que vai acessar o back end.
})

app.register(memoriesRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('😂 http server running on http://localhost:3333')
})