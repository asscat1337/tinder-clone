import {Request,Response,NextFunction} from "express";
import {User} from "../Models/User";

interface IAuth {
    login?:string;
    password?:string
}

class AuthController{
    async register(req:Request,res:Response,next:NextFunction):Promise<Response>{
        try{
            const {login,password}:IAuth = req.body

            console.log(login,password)

            return res.status(200).json(req.body)
        }catch (e) {
            console.log(e)
            return res.status(500).json(e)
        }
    }

    async login(req:Request,res:Response,next:NextFunction){
        try{
           return res.status(200).json(req.body)
        }catch (e) {
            return res.status(500).json(e)
        }
    }

    async getAll(req:Request,res:Response,next:NextFunction){
        try{
            const data = await User.findAll()

            console.log(data)
        }catch (e) {
            console.log(e)
        }
    }

}



export default new AuthController()