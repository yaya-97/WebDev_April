let students=[
    {
        name:'Adam',
        Fname:'Godwin',
        scores:[56,25,97,71],
    } ,

    {
        name:'Eva',
        Fname:'Godwin',
        scores:[59,48,44,28],
    } ,

    {
        name:'John',
        Fname:'Doe',
        scores:[33,66,97,61],
    } ,

    {
        name:'Marie',
        Fname:'Antoinette',
        scores:[72,40,34,51],
    }
]

const sumArray = (accumulator, currentValue) => accumulator + currentValue;

let passed = students.filter(x => x.scores.reduce(sumArray)/x.scores.length >= 50)
console.log(passed)