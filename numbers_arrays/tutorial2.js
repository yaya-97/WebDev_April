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

let scorebord=students.map(x => x.scores);
console.log(scorebord);

let meanScores=scorebord.map(x => x.reduce(sumArray)/x.length);
console.log(meanScores);

let passed=students.filter((x,i) => meanScores[i] >= 50);
passed.forEach(
    (x,i) => console.log(x.name+', with an average score of '+meanScores.filter(x => x >= 50)[i])
);