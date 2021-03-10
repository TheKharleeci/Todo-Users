const { validateSignup, validateLogin, checkIfUserExists } = require("./user");
const { validateTitle } = require("./todo");


module.exports = {
    validateLogin,
    validateSignup,
    checkIfUserExists,
    validateTitle
}