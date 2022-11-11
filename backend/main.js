const express = require('express')
const fs  = require('fs')
const path = require('path');
const { send } = require('process');

const app = express();
const parser = express.urlencoded({extended:false})

function getJson(path){
    const info = fs.readFileSync(path);
    const parse = JSON.parse(info);
    return parse;
}

app.post('/config',parser, (req, res)=>{
    const reqPostBody = req.body;
    const jsonData = getJson("users.json");
    for (let i of jsonData){
        if(i.nick === reqPostBody.nick){
            res.redirect(`/users/${i.nick}`);
        }
        else{
            res.send("<h1>User is not found!</h1>");
        }
    }
});

app.get('/config/getdata/:nick', (req,res)=>{
    const jsonData = getJson("users.json");
    for (let i of jsonData){
        if(i.nick === req.params['nick']){
            res.send(JSON.stringify(i))
        }
        else{
            send("error")
        }
    }
})

app.listen(3001);