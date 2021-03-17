
const fs = require('fs');
const express = require('express');
const path = require('path');




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//adding an empty array here to store our notes in
const notes = [{
    title: "",
    text: "",
}]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/Develop/public/index.html')))
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/Develop/public/notes.html')))

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(notes)
})
app.post('/notes', (req, res) => {
    res.json(notes)
})




app.listen(PORT, () => console.log(`Server listening on :http://localhost:${PORT}`))

//fs read file will read db.json

//git the server up and running - 1st
//then figure out the routes that I will need to interact with - where are the routes?
    //console.log routes

//read add write for post - using fs
//read for get -- fs read for 