import jwt from 'jsonwebtoken'
import user from '../model/UserModel.js';

export const Auth = async(req,res,next) =>{
    try {
        let token  = req.cookies["token"]
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)   
        if(!decoded){
           return res.status(401).json({ message: 'Unauthorized' });
        }  
        const User = await user.findById(decoded.id)
        if (!User) {
           return res.status(404).json({ message: 'User Not Found' });
        }
        req.user = User;
        next();
      } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Internal Server Error' });
     }
}