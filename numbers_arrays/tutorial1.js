let students=[
    {
        name:'Adam',
        Fname:'Godwin',
        scores:56,
    } ,

    {
        name:'Eva',
        Fname:'Godwin',
        scores:69,
    } ,

    {
        name:'John',
        Fname:'Doe',
        scores:42,
    } ,

    {
        name:'Marie',
        Fname:'Antoinette',
        scores:49,
    }
]

let scorebord=students.map(x => x.scores)
console.log(scorebord)

const passed=students.filter(x => x.scores >= 50)
console.log(passed)

