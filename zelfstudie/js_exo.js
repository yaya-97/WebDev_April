 //zelfstudie 02/06/21

    //regular for loop example:

// let i=0;


// for (let k = 0; i<10; i++){
//    console.log(i, k)
// }

    //regular while loop example:

   //-> We set the variable(1) OUTSIDE of the loop!

const lln=[
    {
        naam:"Tay",
        age:24,
    },
    {
        naam:"Desmet",
        age:23,
    },
    {
        naam:"Karen",
        age:65,
    }
]

let k;
k=0;
while(k < lln.length){
    console.log(lln[k].naam);
    k++;
};

k=0;
while(k<= lln.length-1){
    console.log(lln[k].naam);
    k++;
};

//!!!!!!  Index begint op 0, maar lengte/.length begint bij 1  !!!!!!!!!!

for(let leerling of lln){
    console.log(leerling.naam,2021-leerling.age)
};

