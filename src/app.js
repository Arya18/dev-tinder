const express = require('express');

const app = express();
app.listen(7000);

app.use((req,res) => {  // request handler
    res.send('Up I am')
});