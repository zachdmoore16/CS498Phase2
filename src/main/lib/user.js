const User  = require('../models/User') //relative path to the User model from user.js

const is_whitelisted = async (linkblue_username) => {
    //pull user from table
    const user = await User.query()
        .findById(linkblue_username)
    //if user is returned, return true
    if (user){
        return true
    }
    //else return false
    else {
        return false
    }
}

module.exports.is_whitelisted = is_whitelisted