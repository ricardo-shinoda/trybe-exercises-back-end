module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || authorization.length < 16) {
        return res.status(4001).json({ message: 'Token inválido' });
    }
    next();
};