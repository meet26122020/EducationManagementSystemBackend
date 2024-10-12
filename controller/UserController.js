import user from '../model/UserModel.js'
import jwt from 'jsonwebtoken'
// import cookie from 'cookie-parser'


export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const result = new user({ name, email, password, role });
        if(!result){
            return res.status(400).json({ message: 'Invalid data' });
        }
        await result.save();
        res.status(201).json({ message: 'User registered successfully', data:result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await user.findOne({ email });
        if (!result || !(await result.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: result._id, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        if(!token){
          return res.status(401).json({ message: 'Token not generated' });            
        }
        res.cookie("token", token,{HttpOnly: true, Secure: true});
        res.status(200).json({ message:"user login Successful", token: token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const logout = async(req,res)=>{
    try {
        res.clearCookie('token');
        res.status(200).json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: true, message: "Internal Server Error" });
    }
}