const mongoose = require('mongoose');
const schema = require('../schema/question.schema.server');
const questionModel = mongoose.model('QuestionModel',schema);

function findAllQuestions() {
    // return submissionModel.find({quizId: quizId});
    return questionModel.find()
}

function createQuestion(question){
    return  questionModel.create(question)
}

function findQuestionById(quesId){
    return questionModel.findById(quesId)
}

// function updateQuiz(quizId, newQuiz){
//     return questionModel.update({_id: quizId},{$set: newQuiz})
// }
//
 function deleteQuestion(quizId){
     return questionModel.remove({_id: quizId})
 }

module.exports = {
    findAllQuestions, createQuestion ,findQuestionById,deleteQuestion
};