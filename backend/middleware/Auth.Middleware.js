const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!req.headers) {
    return res.status(401).json({ message: 'Please, provide authorization header' });
  }

  if (!authorization) {
    return res.status(401).json({ message: 'Please, include token to request' });
  }

  try {
    const tokenPayload = jwt.verify(authorization, 'secret-jwt-key');
    req.user = {
      userId: tokenPayload.userId,
      username: tokenPayload.fullName,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  authMiddleware,
};