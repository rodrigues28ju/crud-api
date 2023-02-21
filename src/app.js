const express = require ('express');
const app = express();
app.use(express.json());

app.get('/' , function(req,res){
    res.send('ola mundo');
})

app.post('/pessoa', function(req,res){
    console.log(req);
    res.json({
        "statucCode": 200
    })
})
app.listen(3000,()=>console.log('api rodando'));