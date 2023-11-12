import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

let httpServer

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.init()
  httpServer = await app.getHttpServer()
}

bootstrap()

export default httpServer
