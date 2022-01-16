const {Router} = require('express');

const {getPrice} = require('./middlewares/fetch');

const mainController = require('./controllers/mainController');

const router = Router();

router.get("/", getPrice(), mainController.view);

module.exports = router;