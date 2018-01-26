let chalk = require('chalk');

var fs = require('fs');

const app = require('./src/app');



// port

const port = process.argv[2];



// start server here

app.listen(port, function () {

    console.log(chalk.green('Hello web server'));

});




app.get('/bingo', function (req, res) {
    res.end("Bingo")
})