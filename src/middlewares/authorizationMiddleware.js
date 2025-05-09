const authorize = (allowedRoles) => {
    return (req, res, next) => {
        // Assuming you've attached user data to req.user during authentication
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
        }

        next();
    };
};

module.exports = authorize;