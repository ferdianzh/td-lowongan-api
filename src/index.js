import express from 'express'
import * as dotenv from 'dotenv'

// import { productRouter } from './routes/product.routes'

dotenv.config()
const app = express()

// app.use('/api/products', productRouter)

app.listen(process.env.APP_PORT, () => {
  console.log(`server is listening on port ${process.env.APP_PORT}`)
})
