import {Router} from "express";
import authController from "../controller/authController";

const authRouter:Router = Router()


authRouter.post('/register',authController.register)
authRouter.post('/login',authController.login)


export {
    authRouter
}
