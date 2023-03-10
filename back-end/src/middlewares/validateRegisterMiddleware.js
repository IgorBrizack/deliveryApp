const { registerSchema } = require('../joi/schemas');

const registerValidation = (req, res, next) => {
  const { body: { name, email, password, role } } = req;

    const { error } = registerSchema.validate({ name, email, password, role });
    if (error) return res.status(400).json({ message: error.message });
   
    next();
};

module.exports = registerValidation;