const express = require('express');

const app = express();
const PORT = 8081;

app.use('/', express.static(__dirname));

app.listen(PORT, function() {
    console.log('Front app running on', PORT);
});
