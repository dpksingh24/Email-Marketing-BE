const { JsonWebTokenError } = require("jsonwebtoken");
const User = require('../models/User');

module.exports = async function(req, res, next){
    const token = req.header('x-auth-token');
    console.log('Token:', token);

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.user.id).select('-password'); // Attach user object to req.user
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
