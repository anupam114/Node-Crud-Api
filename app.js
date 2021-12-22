const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_db_student';


const app = express();
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('Connected....')
});

app.use(express.json());

//Middleware For Getting Data
const allienrouter = require('./routers/aliens');
app.use('/aliens', allienrouter);

app.listen(9000, () => {
    console.log('Server Running....');
})


