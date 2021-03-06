const express  = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

console.log(process.env);

app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'static','index.html'))
});

app.listen(port);
console.log('Server started!');