// импортируем express и модули Request и Response (специальный синтаксис TypeScript)
//для исключения возникновения ошибки 501 в POST-запросах нужно подключить bodyParser


import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { router_video, videos } from './routers/video-router'

//создаем express app
const app = express()
// создаем приложение на порту 3000, а таже указываем "динамический" порт для heruku
const port = process.env.PORT || 3000
const parserMiddleware = bodyParser()

app.use(parserMiddleware)

app.use('/videos', router_video)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Homework from Alen ')
})

app.get('/test', (req: Request, res: Response) => {
  res.send('Test')
})

app.delete('/testing/all-data', (req: Request, res: Response) => {
  videos.length = 0
  res.status(204).send(videos)
})

//start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
