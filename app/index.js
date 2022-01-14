const express = require('express');

const app = express();

const port = 8765;

app.set('view engine', 'pug');

app.set('views', './views');

app.use(express.static('../public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.use((_, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});