const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('./../config/secrets.js');

const Helpers = require('./helpers.js');

/**
 * @api {post} /api/auth/register Create User
 * @apiName Signup
 * @apiGroup Users
 */
// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;
	Helpers.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(({ name, code, message, stack }) => {
			res.status(500).json({ name, code, message, stack });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;
	console.log(req.body);

	return Helpers.findBy({ username })
		.first()
		.then(user => {
			console.log('user', user);
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);
				const id = user.id;
				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token,
					id
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(({ name, code, message, stack }) => {
			res.status(500).json({ name, code, message, stack });
		});
});

function generateToken(user) {
	const payload = {
		subject: user.id, // sub
		username: user.username

		//other data
	};
	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;