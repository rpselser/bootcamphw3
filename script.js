const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let cardDiv = document.getElementById('card-content')

    if (showingTerm === true){
        cardDiv.innerHTML = 
    `<p> ${flashcards[currentIndex].term} </p>`
    
    }else{
    cardDiv.innerHTML = 
    ` <p> ${flashcards[currentIndex].definition} </p> `
}
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : flashcards.length - 1
    displayCard()
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex < flashcards.length - 1) ? currentIndex + 1 : 0
    displayCard()
});
document.getElementById('flashcard').addEventListener('click', () => {
    showingTerm = !showingTerm
    displayCard()
});


document.getElementById('add-card-btn').addEventListener('click', ()=>{
    const myTerm = document.getElementById('new-term').value
    const myDef = document.getElementById('new-definition').value
    flashcards.push({ term: myTerm, definition: myDef})

    document.getElementById('new-term').value = ''
    document.getElementById('new-definition').value = ''



}


)
// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;