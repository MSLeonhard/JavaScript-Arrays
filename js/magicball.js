// 1. user enters  a question
// 2. verify that their input contains a question mark
// 3. If it doesn't, ask for a question again
// 4. Respond with an ambiguous answer

let userInput

let magicAnswers = [
    'Yes',
    'No',
    'Maybe',
    'It is certain',
    'Ask again later',
    'Without a doubt',
    'Signs point to yes',
    "Don't count on it",
    'Very doubtful'
]

do{
    userInput = prompt('Ask me a question')
}while (userInput.indexOf('?') <= -1)

let response = Math.floor(Math.random() * magicAnswers.length )

document.getElementById('output').innerHTML = `${magicAnswers[response]}`

