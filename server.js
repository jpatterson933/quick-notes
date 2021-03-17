const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
// const uniqid = require('uniqid')
const uuid = require('uuid')
const PORT = process.env.PORT || 7000;
const notes = require('./notes')

//helps me track what I am clicking
const logger = require('./middleware/logger')
//middleware practice
app.use(logger);

//needed for express??
//this handles form submissions
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//set static folder
//as soon as I set the folders to static, my code started working -- why?
app.use(express.static(path.join(__dirname, 'Develop/public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public', 'index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public', 'notes.html'))
});

//this route grabs all notes
app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
    const newNote = {
        //generates random universal id
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
        status: 'New Note'
    }
    if (!newNote.title || ! newNote.text) {
        res.status(400).json({ msg: 'Please enter a full note'})
    } 

    notes.push(newNote);
    res.json(newNote)

    // fs.writeFile('db.json', notes, (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("this worked")
    //     }
    // })
})

// app.post('/api/notes', (req, res) => {
//     const newNote = req.body;
//     notes.push(newNote);
//     res.json(notes)
// })
app.post('/notes', (req, res) => {
    res.json(notes)
})

// app.put('/api/notes:id', (req, res) => {
//     const found = notes.some(note => note.id === req.params.id);
//     if (found) {
//         const deleteNote = req.body;
//         console.log("this line")
//     } else {
//         res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
//     }
// })




app.listen(PORT, () => console.log(`Server listening on :http://localhost:${PORT}`))

//fs read file will read db.json

//git the server up and running - 1st
//then figure out the routes that I will need to interact with - where are the routes?
    //console.log routes

//read add write for post - using fs
//read for get -- fs read for 