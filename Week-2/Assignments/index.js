let express = require('express');

let app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello, My Server!');
})

app.get('/data', function (req, res) {
    let result;
    const { number } = req.query;
    if (!number) {
        result = "Lack of Parameter";
    } else if (isNaN(number)) {
        result = "Wrong Parameter";
    } else {
        result = (1 + Number(number)) * Number(number) / 2;
    }
    res.send(`${result}`);
})

app.listen(3000, () => {
    console.log('the application is running on port3000!');
});  

