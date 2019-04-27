const clientApi = require('./api/clientApi.js');
const styleApi = require('./api/styleApi.js');
const scheduleApi = require('./api/scheduleApi.js');
const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.use('/', clientApi)
app.use('/styles', styleApi)
app.use('/schedules', scheduleApi)

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Hello: ' + PORT);
});

