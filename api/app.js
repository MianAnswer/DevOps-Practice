import express from 'express'
const app = express()

app.get('/', (req, res, next) => {
  res.status(200)
  res.send('Hello, world!')
})

export default app
