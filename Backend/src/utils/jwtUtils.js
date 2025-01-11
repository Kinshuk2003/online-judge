import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig.js';

export const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email},
        JWT_SECRET, 
        { expiresIn: '1h' }
    );
};