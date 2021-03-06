const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('name', () => {
    return 'Batman!';
});
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('Hi!!!');
    res.render('home.hbs', {
        name : 'Batman',
        vehicle : 'Batmobil'
    })
});

app.get('/about', (req, res) => {
    //res.send('About Page!!!');
    res.render('about.hbs', {
        name : 'Aritra',
        age : 25,
        birthYear : new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.....`);
});