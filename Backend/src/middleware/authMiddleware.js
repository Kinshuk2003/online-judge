import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/serverConfig.js'

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        return res.status(401).json({ message: "Access token required"});
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach the decoded user to the request object
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or missing token" });
    }
}