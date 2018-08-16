var mongoose = require('mongoose');
var quizSchema = mongoose.Schema({
     title: {type: String},
     questions:[{
          type: mongoose.Schema.Types.ObjectId,
         ref: 'QuestionModel'
     }]
}, {collection: 'quiz'});
module.exports = quizSchema;