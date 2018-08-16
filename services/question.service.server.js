module.exports = function (app) {

    app.post('/api/question',
        createQuestion);

    app.delete('/api/question/:quesId',
                deleteQuestion);

    app.get('/api/question/:quesId',findQuestionById)

    var questionModel = require('../models/question.model.server');

    function createQuestion(req, res) {
        questionModel
            .createQuestion(req.body)
            .then(
                question => res.json(question),
                error => res.send(error))

    }

     function deleteQuestion(req, res) {
            questionModel
                .deleteQuestion(req.params.quesId)
                .then(status => res.send(status))

        }

     function findQuestionById(req, res) {
                    questionModel
                        .findQuestionById(req.params.quesId)
                        .then(status => res.send(status))

                }
};