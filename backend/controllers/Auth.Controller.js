const { User } = require('../models/User.Model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class AuthController {
  async authUser() {
    try {


    } catch (error) {

    }
  }

  async registerUser(req, res, next) {

    try {

      const { fullName, password } = req.body;

      const salt = await bcrypt.genSalt(3);
      const hash = await bcrypt.hash(password, salt);

      const user = new User({
        fullName,
        password: hash,
      });

      user.save()
      res.send(user)

    } catch (error) {
      res.send(error)
    }


  }

  async loginUser(req, res, next) {
    try {
      const user = await User.findOne({ fullName: req.body.fullName });

      if (user && (await bcrypt.compare(String(req.body.password), String(user.password)))) {
        const payload = { fullName: user.fullName, userId: user._id };
        const jwtToken = jwt.sign(payload, 'secret-jwt-key');
        return res.send({
          message: 'Success',
          jwt_token: jwtToken,
        });
      }

    } catch (error) {
      res.status(400).json({ message: 'Not authorized' });
    }
  }

}


module.exports = new AuthController();