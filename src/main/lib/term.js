const Term  = require('../models/Term') //relative path to the Term model from term.js

const is_currentSemester = async (id) => {
    //pull term from table
    const term = await Term.query()
        .findById(id)
    //if term is equal to the current semester, return true
    var today = new Date()
    date = today.getMonth() + 1
    var semester = 'fall'
    if(date <= 3){
        semester = 'spring'
    }
    else if(date < 6){
        semester = 'summer 1'
    }
    else if(date < 8){
        semester = 'summer 2'
    }
    else if(date < 11){
        semester = 'fall'
    }
    else{
        semester = 'winter'
    }
    if (term.value == semester){
        return true
    }
    //else return false
    else {
        return false
    }
}

module.exports.is_currentSemester = is_currentSemester