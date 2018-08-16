var mongoose = require('mongoose');
var quizSchema = require('../schema/quiz.schema.server');
var quizModel = mongoose.model(
    'QuizModel',
    quizSchema
);


function findAllQuizzes() {
    // return submissionModel.find({quizId: quizId});
    return quizModel.find()
}

function createQuiz(quiz){
   return  quizModel.create(quiz)
}

function findQuizById(quizId){
    return quizModel.findById(quizId)
    .populate('questions').exec()
}

function updateQuiz(quizId, newQuiz){
    return quizModel.update({_id: quizId},{$set: newQuiz})
}

function deleteQuiz(quizId){
    return quizModel.remove({_id: quizId})
}

addQuestion = (quizId, questionId) =>
    quizModel.update({_id: quizId}, {
    $push: {questions: questionId}
    })

module.exports = {
    findAllQuizzes, createQuiz ,findQuizById ,updateQuiz ,deleteQuiz, addQuestion
};