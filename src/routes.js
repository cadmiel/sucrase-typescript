import { Router } from 'express'
import UserController from './Controller/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes