const path = require('path');
const express = require('express');
const app = express();
app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/registration', (req,res)=>{
res.sendFile(path.join(__dirname, 'registration.html'));
});
app.get('/login', (req,res)=>{
res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/contact', (req,res)=>{
res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/about', (req,res)=>{
res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(3000, ()=>console.log('Server listening on port no 3000'));