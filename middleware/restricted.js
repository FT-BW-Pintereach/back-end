const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./../config/secrets.js');

module.exports = (req, res, next) => {
	const { authorization } = req.headers;

	console.log('secret', jwtSecret, 'auth', authorization);

	if (authorization) {
		jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid Credentials' });
			} else {
				req.decodedToken = decodedToken;

				console.log('decoded token', decodedToken);
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'No credentials provided' });
	}
};
