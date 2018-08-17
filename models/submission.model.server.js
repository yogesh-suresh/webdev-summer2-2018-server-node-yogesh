var mongoose = require('mongoose');
var submissionSchema = require('../schema/submission.schema.server');
var submissionModel = mongoose.model(
    'SubmissionModel',
    submissionSchema
);

function findSubmissionsForQuiz(quizId) {
    return submissionModel.find({quiz: quizId}).populate('student');;
}

function findSubmission(submissionId) {
     return submissionModel.findById(submissionId);
 }

function findSubmissionsForUser(quizId,studentId) {
     return submissionModel.find({student: studentId}).populate('student');
 }

function findAllSubmissions() {
    return submissionModel.find();
}

function submitQuiz(submission) {
    return submissionModel.create(submission);
}

module.exports = {
    submitQuiz: submitQuiz,
    findSubmissionsForQuiz: findSubmissionsForQuiz,
    findSubmissionsForUser: findSubmissionsForUser,
    findAllSubmissions: findAllSubmissions,
    findSubmission: findSubmission
};