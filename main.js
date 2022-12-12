/*
    Define a variable named `notes` and assign a value of an empty array
*/
notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const note1 = {
    id: 1,
    text: "feed the dog",
    author: "Max",
    date: "January 5, 2022",
    topics: ["pet care", "daily tasks", "important"]
}
const note2 = {
    id: 2,
    text: "water the plants",
    author: "Phil",
    date: "October 10, 2020", 
    topics: ["plant care", "weekly tasks"]
}
const note3 = {
    id: 3,
    text: "change the litter",
    author: "Tate",
    date: "July 30, 2019",
    topics: ["pet care", "weekly tasks", "important"]
}
/* use .push() to add above notes into the notes array */
notes.push(note1)
notes.push(note2)
notes.push(note3)
const note4 = {
    id: 4,
    text: "wash the dishes",
    author: "Hannah",
    date: "March 1, 2018",
    topics: ["household chores", "daily tasks"]
}
const note5 = {
    id: 5,
    text: "put away laundry",
    author: "Marcus",
    date: "June 6, 2019",
    topics: ["household chores", "weekly tasks"],
}
const note6 = {
    id: 6,
    text: "give belly rubs",
    author: "Charlie",
date: "October 8, 2018",
topics: ["pet care", "daily tasks", "most important"]
}
notes.push(note4)
notes.push(note5)
notes.push(note6)
for (const note of notes){console.log(note.text)}
for (const note of notes){
    for (const topic of note.topics) {console.log(topic)}
}
/* average topics per note*/

let totalTopics = 0
for (const note of notes){totalTopics = totalTopics +
    note.topics.length}

    let averageTopics = totalTopics / 6
console.log(averageTopics)

const filteredNotes = []
const criteria = "pet care"
for (const note of notes){
    if (note.topics.includes (criteria)){filteredNotes.push(note)}
}
console.log(filteredNotes)

/*Note Articles */
console.log("***  Note Articles  ***")
let myString = ""
for (const note of notes){
    myString+= (`<article> \n ${note.text} \n`)
    for (const topic of note.topics){
        myString+= (`<section> ${topic} </section> \n`)
    }
    myString+= (`</article>`)
}
console.log(myString)

