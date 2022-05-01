import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import {authRouter} from './routers/auth'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth',authRouter)



app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
})



