const bcrypt = require('bcryptjs')
const dotenve = require('dotenv')
dotenve.config()

// hash password
const hashPassword = async (password) => {
    try {

        const hashSalt = 10
        const salt = await bcrypt.genSalt(Number(hashSalt))
        const hashPassword = await bcrypt.hash(password, salt)

        console.log('hash', hashSalt, salt, hashPassword)

        return hashPassword
    } catch (error) {

        console.log('hashpassword-->', error)
    }
}

// verify password
const verifyPassword = async (password, hashPassword) => {
    try {

        const verified = await bcrypt.compare(password, hashPassword)
        if (verified) {

            return true
        }
    } catch (error) {

        console.log('verifyPaaword-->', error)
    }

    return false
}

module.exports = { hashPassword, verifyPassword }