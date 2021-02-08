console.log('connected...')

let grades = [
    68, 
    49,
    58,
    75,
    96,
    97,
    98,
    68,
    46,
    54,
    82,
    93,	
    51,
    71,
    82,
    91,
    73,
    68,
    83,
    74
]

let main = `The number of grades is ${grades.length}<br>`

for ( let i = 0; i < grades.length; i++) {
    main += `Grade ${i+1}: ${grades[i]}<br>`
}

let total = 0;
for(let i = 0; i < grades.length; i++) {
    total += grades[i];
}
let avg = total / grades.length;

grades.sort()
let lowMiddle = Math.floor((grades.length - 1) / 2);
let highMiddle = Math.ceil((grades.length - 1) / 2);
let median = (grades[lowMiddle] + grades[highMiddle]) / 2;

let over70 = []

for ( let j = 0; j < grades.length; j++) {
    if (grades[j] >= 70){
        over70.push(grades[j])
    }
}

main += `The highest grade was ${Math.max(...grades)}<br> The lowest grade was ${Math.min(...grades)}<br> The mean grade is ${avg}<br> The median grade is ${median} <br> ${over70.length} people got over 70% on the test`

document.getElementById('output').innerHTML = main

//console.log(Math.max.apply(Math, grades))