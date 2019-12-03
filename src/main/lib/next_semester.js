const Portfolio  = require('../models/Portfolio') //relative path to the Term model from term.js

const next_semester = async (id) => {
    //pull term from table
    const portfolio = await Portfolio.query()
        .findById(id)
    var thisMonth = portfolio.monthCreated
    if(thisMonth <= 3){
        startDate = 4
    }
    else if(thisMonth < 6){
        startDate = 6
    }
    else if(thisMonth < 8){
        startDate = 8
    }
    else if(thisMonth < 11){
        startDate = 11
    }
    else{
        startDate = 1
    }

    //Return next semester start date
    return startDate
}

module.exports.next_semester = next_semester