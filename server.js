const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080);

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.get('/', ({query}, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
