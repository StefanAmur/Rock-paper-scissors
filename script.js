
let choices = [
    'Rock',
    'Paper',
    'Scissors',
    'Lizard',
    'Spock'
]

let userOptions = [
    document.getElementById('rock'),
    document.getElementById('paper'),
    document.getElementById('scissors'),
    document.getElementById('lizard'),
    document.getElementById('spock'),
]

let userChoice = '';
userOptions.forEach(element => {
    element.addEventListener('click', () => {
        userChoice = element.innerText;
    })
});

let result = document.getElementById('result-title');

document.getElementById('play').addEventListener('click', () => {
    let pcChoice = choices[Math.floor(Math.random() * choices.length)];
    if (userChoice == pcChoice) {
        result.textContent = "It's a tie. You both choose the same thing!"
        //if user chooses rock
    } else if (userChoice == 'Rock') {
        if (pcChoice == 'Paper') result.textContent = `You lost. ${pcChoice} covers ${userChoice}`
        else if (pcChoice == 'Scissors') result.textContent = `You won. ${userChoice} crushes ${pcChoice}`
        else if (pcChoice == 'Lizard') result.textContent = `You won. ${userChoice} crushes ${pcChoice}`
        else if (pcChoice == 'Spock') result.textContent = `You lost. ${pcChoice} vaporizes ${userChoice}`
        // if user chooses paper
    } else if (userChoice == 'Paper') {
        if (pcChoice == 'Rock') result.textContent = `You won. ${userChoice} covers ${pcChoice}`
        else if (pcChoice == 'Scissors') result.textContent = `You lost. ${pcChoice} cuts ${userChoice}`
        else if (pcChoice == 'Lizard') result.textContent = `You lost. ${pcChoice} eats ${userChoice}`
        else if (pcChoice == 'Spock') result.textContent = `You won. ${userChoice} disproves ${pcChoice}`
        // if user chooses scissors
    } else if (userChoice == 'Scissors') {
        if (pcChoice == 'Rock') result.textContent = `You lost. ${pcChoice} crushes ${userChoice}`
        else if (pcChoice == 'Paper') result.textContent = `You won. ${userChoice} cuts ${pcChoice}`
        else if (pcChoice == 'Lizard') result.textContent = `You won. ${userChoice} decapitates ${pcChoice}`
        else if (pcChoice == 'Spock') result.textContent = `You lost. ${pcChoice} smashes ${userChoice}`
        // if user chooses lizard
    } else if (userChoice == 'Lizard') {
        if (pcChoice == 'Rock') result.textContent = `You lost. ${pcChoice} crushes ${userChoice}`
        else if (pcChoice == 'Paper') result.textContent = `You won. ${userChoice} eats ${pcChoice}`
        else if (pcChoice == 'Scissors') result.textContent = `You lost. ${pcChoice} decapitates ${userChoice}`
        else if (pcChoice == 'Spock') result.textContent = `You won. ${userChoice} poisons ${pcChoice}`
        // if user chooses spock
    } else if (userChoice == 'Spock') {
        if (pcChoice == 'Rock') result.textContent = `You won. ${userChoice} vaporizes ${pcChoice}`
        else if (pcChoice == 'Paper') result.textContent = `You lost. ${pcChoice} disproves ${userChoice}`
        else if (pcChoice == 'Scissors') result.textContent = `You won. ${userChoice} smashes ${pcChoice}`
        else if (pcChoice == 'Lizard') result.textContent = `You lost. ${pcChoice} poisons ${userChoice}`
    }
});
