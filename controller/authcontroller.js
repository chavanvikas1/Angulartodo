const user = require("../model/usermodel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await user.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "email not found"
            })
        }
        const isMatch = await bcrypt.compare(password, result.password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "password is incorrect"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
        res.status(200).json({
            success: true,
            message: "user logged in",
            token,
            data:result


        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error" + error
        })


    }
}
module.exports = login