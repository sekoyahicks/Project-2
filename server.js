const clientController = require('./controllers/clientController');
const styleController = require('./controllers/styleController');
const scheduleController = require('./controllers/scheduleController');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.use('/', styleController)
app.use('/clients', clientController)
app.use('/schedules', scheduleController)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Hello: ' + PORT);
});
