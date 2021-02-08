console.log('connected...')

let grades = [
    68, 
    49,
    58,
    75,
    96,
    97,
    97,
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

for ( let i = 0; i < grades.length; i++) {
    document.getElementById('output').innerHTML += `${grades[i]}<br>`
}
document.getElementById('output2').innerHTML = `The number of grades is ${grades.length}`