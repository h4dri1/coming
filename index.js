const express = require('express');

const app = express();

const router = require('./app/router');

const port = 8765;

app.set('view engine', 'pug');

app.set('views', './app/views');

app.use(express.static('./public'));

app.use(router);

app.use((_, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});