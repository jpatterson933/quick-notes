const uniqid = require('uniqid')

//adding an empty array for notes
const notes = [{
    title: "",
    text: "",
}]

class Notes {
    constructor (id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}



module.exports = notes;