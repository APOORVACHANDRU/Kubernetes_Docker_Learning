const express = require('express');

const expressfile = express();


expressfile.get('/',function(req,res){
    res.send("Hello world!!!");
})
expressfile.get('/alien',function(req,res){
    const id = req.query.id
    res.send("Hello Alien, Welcome back!!How are you?!"+id);
})

expressfile.get('/alien/:id',function(req,res){
    const id = req.params.id
    if(id == 21)
    {
        res.send("Hi Apoorva commit 2 in branch 2 "+id);
    }
    else if(id == 22)
    {
        res.send("Hi Anusha How are you?"+id);
    }
    else {
        res.send("Invalid user"+id);
    }
    
})
expressfile.get('/alien/:id',function(req,res){
    res.send("Hi Apoorva branch 4");
})

expressfile.listen(3000 , function(req,res){    // routing - is handling request nd response 

    console.log("Running server");
});


