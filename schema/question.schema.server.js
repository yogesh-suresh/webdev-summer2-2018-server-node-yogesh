const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    points: Number,
    description: String,
    blanks:[],
    choices: [{
        text: String,
        value: String,
        correct: Boolean
    }],
    questionType: {type: String, enum: ['essay','fillin','truefalse','multiplechoice']}
},{collection: 'question'});



