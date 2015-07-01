var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET question page. */
router.get('/quizes/question', quizController.question);

/* GET answer page. */
router.get('/quizes/answer', quizController.answer);

/* GET author page. */
router.get('/author', function(req, res) {
  res.render('author', { title: 'Creditos' });
});

//Definicion de rutas de /quizes
router.get('/quizes',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',         quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);

module.exports = router;
