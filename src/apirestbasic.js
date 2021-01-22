const express = require('express');
// const mongoose = require('mongoose');
// const alunoController = require('./controllers/aluno.controller')
const app = express();


// mongoose.connect("mongodb+srv://testDWM:1234@cluster0.c5rw2.mongodb.net/testDWM?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


app.get('/', function(req,res){
    res.json({
        produtos:{id:12314, categoria:"informatica", nome:"mouse", descricao:"conecta no pv", preco:35.40},
        usuarios:{id:154, nome:"victor", email:"victor@gmail.com", senha:"1234"}
    })
});

app.get('/produtos', function(req,res){

    res.json({mouse: req.query.nome});

});

app.get('/usuarios', function(req,res){

    res.json({nome: req.query.nome});

});

app.delete('/produtos/:id', function(req,res){

    res.json({id: req.params.id});

});

app.delete('/usuarios/:id', function(req,res){

    res.json({id: req.params.id});

});

app.put('/produtos/:categoria', function(req,res){

    res.json({categoria: req.params.categoria});

});

app.put('/usuarios/:email', function(req,res){

    res.json({email: req.params.email});

});

app.use(express.json())
app.post('/produtos',function(req,res){
    res.json(req.body)
});

app.post('/usuarios',function(req,res){
    res.json(req.body)
});



app.listen(4000)