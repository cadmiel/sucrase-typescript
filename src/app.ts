import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {

    public express: express.Express;

    public constructor() {
        this.express = express()
        this.database()
        this.routes()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database() {
        mongoose.connect(
            'mongodb://localhost:27017/typescript',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    }

    private routes() {
        this.express.use(routes)
        this.express.get('/', (req, res) => {
            res.send('ok')
        })
    }

}

export default new App().express