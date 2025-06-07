import jwt from 'jsonwebtoken';

const auth = (roles = []) => {
    if (typeof roles === 'string') roles = [roles];

    return (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) return res.status(401).json({ msg: 'No token. Authorization denied.' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ msg: 'Access denied' });
            }

            next();
        }catch(err){
            return res.status(401).json({msg: 'Token is not valid'})
        }
    }
}

export default auth;