const Portfolio  = require('../models/Portfolio') //relative path to the User model from user.js

const contains_grades = async (id) => {
    //pull user from table
    const portfolio = await Portfolio.query()
        .findById(id)
    //if any personally identifiable information is found, return true
    if (portfolio.grades != 0){
        return true
    }
    //else return false
    else {
        return false
    }
}

module.exports.contains_grades = contains_grades