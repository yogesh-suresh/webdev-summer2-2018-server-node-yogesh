module.exports = function (app) {

    app.get('/api/quiz', findAllQuizzes);
    app.post('/api/quiz', createQuiz);
    app.get('/api/quiz/:quizId', findQuizById);
    app.delete('/api/quiz/:quizId', deleteQuiz);
    app.put('/api/quiz/:quizId', updateQuiz);
    app.put('/api/quiz/:quizId/question/:questionId', addQuestion);

    app.post('/api/quiz/:quizId/submission', submitQuiz);
    app.get('/api/quiz/:quizId/submissions', findSubmissionsForQuiz);
    app.get('/api/quiz/:quizId/submissions/:studId', findSubmissionsForUser);
    app.get('/api/submission/:submissionId',findSubmission);




    var submissionModel = require('../models/submission.model.server');

    var quizModel = require('../models/quiz.model.server');


    function findSubmissionsForQuiz(req, res) {
        var quizId = req.params.quizId;
        submissionModel
            .findSubmissionsForQuiz(quizId)
            .then(function (submissions) {
                res.json(submissions);
            });
    }

     function findSubmissionsForUser(req, res) {

            var sId = req.params.studId
            submissionModel
                .findSubmissionsForUser(sId)
                .then(function (submissions) {
                    res.json(submissions);
                });
        }

     function findSubmission(req, res) {
             var subId = req.params.submissionId;
             submissionModel
                 .findSubmission(subId)
                 .then(function (submissions) {
                     res.json(submissions);
                 });
         }
    function submitQuiz(req, res) {
        var submission = req.body;

        return submissionModel
            .submitQuiz(submission)
            .then(function (submission) {
                res.json(submission);
            })
//        return res.json(req.body);
    }

    function findQuizById(req, res) {
            return quizModel.findQuizById(req.params.quizId)
                .then(quiz => res.send(quiz))
    }

    function findAllQuizzes(req, res) {
        quizModel.findAllQuizzes().then(resp => res.send(resp))
    }

    function createQuiz(req, res){
        quizModel.createQuiz(req.body).then(quiz => res.send(quiz));
    }

    function updateQuiz(req, res){
        quizModel.updateQuiz(req.params.quizId,req.body).then(status => res.send(status));
    }

    function deleteQuiz(req, res){
        quizModel.deleteQuiz(req.params.quizId).then(status => res.send(status));
    }

    function addQuestion(req, res){
         quizModel.addQuestion(req.params.quizId,req.params.questionId)
         .then(
         status => res.send(status),
         error => res.send(error)
         );
    }
}