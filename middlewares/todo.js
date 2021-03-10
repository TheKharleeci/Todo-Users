const Joi = require("joi");
const { todoTitleSchema } = require("../validation");

const validateTitle = (req, res, next) => {
  try {
    const { error } = todoTitleSchema.validate(req.body);
    if (!error) {
      return next();
    }
    res.status(400).json({ status: "fail", message: error.message });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};


module.exports = { validateTitle };