const Term  = require('../models/Term') //relative path to the Term model from term.js

const is_currentSemester = async (id) => {
    //pull term from table
    const term = await Term.query()
        .findById(id)
    //if term is equal to the current semester, return true
    if (term.value == 'fall'/* == Some variable indicating current semester */){ // FIX THIS BEFORE MERGING
        return true
    }
    //else return false
    else {
        return false
    }
}

module.exports.is_currentSemester = is_currentSemester