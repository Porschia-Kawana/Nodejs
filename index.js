const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static('images'));

require('./server/routes')(app);

const PORT = 3081;

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})
