const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());

app.get('/USERS',(req,res)=>{
    res.send('lista')
});

const port = 3000;

app.listen(port,()=>{
    console.log(`El servidor ha iniciado ${port}`);
})