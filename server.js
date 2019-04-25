const clientApi = require('./api/clientApi.js');
const scheduleApi = require('./api/scheduleApi.js');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.get('/', (req, res) => { 
    res.send("working")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Hello: ' + PORT);
});

