var express = require('express');
const app = express();

app.use('/admin', (req, res) => {
    return res.status(200).json({msg : 'oussama'})
})

app.listen(3000,() => {
    console.log('Hello Oussama')
})