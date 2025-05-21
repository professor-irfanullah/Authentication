const authorize = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ err: 'Forbidden - Insufficient permissions' });
        }

        next();
    };
};

module.exports = authorize;