import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan';

import AppRoutes from './src/routes/index.js'

dotenv.config()

const PORT = process.env.PORT


const app = express()



app.use(morgan('dev'));
app.use(cors())
app.use(express.json())
app.use('/',AppRoutes)
app.get('/', (req, res) => {
    res.send('API is running...');
  });


app.listen(PORT,()=> console.log(`App is listening ${PORT}`))