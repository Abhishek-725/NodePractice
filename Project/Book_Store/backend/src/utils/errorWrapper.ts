import {Request, Response, NextFunction} from 'express';
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export default  (fn : AsyncHandler) => {
    return (req : Request,res : Response,next : NextFunction) => {
         fn(req,res,next).catch((error) => {
                console.log("Error : ",error);
                next(error);
            });
    }
}