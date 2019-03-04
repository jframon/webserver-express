const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))

//Express HBS 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan ramoN'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        img: __dirname + '/public/assets/img/img.jpg'
    });
});

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Juan Ramon',
//         edad: '34',
//         url: req.url
//     };

//     res.send(salida);
// });

// app.get('/data', (req, res) => {


//     res.send('Hola Data');
// })

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});