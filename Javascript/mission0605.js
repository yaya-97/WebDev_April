CV = {
    name: "Yasmine",
    Fname: 'Tay',
    age: 23,
    status:'student',
    "Is a student" : true,

    address:{
        city:'Brussels',
        country: 'Belgium',
    },


    // const vakken=[
    //     'HTML',
    //     'CSS',
    //     'Bootstrap',
    // ],
  
    vakken:{
        v1:'HTML, ',
        v2:'CSS, ',
        v3:'Bootstrap, ',
    },


    'Has finished studying Graphic Design': true,
    'Has finished studying Webdesign': false,

    study1:'Graphic design',
    study2:'Webdesign',
    teacher: 'Atilla',
    
//I can't put anything else in here without the nodemon app crashing. Even arrays don't work! I  always get the following message: SyntaxError: Unexpected identifier
 
  };



const currentV = 'Javascript';


  console.log(
      'Hello, my name is ' + CV.name + " " + CV.Fname + " and I'm " + CV.age + " years old. \n\nI currently live in "+CV.address.country+
      ", in "+CV.address.city+" to be specific and am studying "+CV.study2+", \nwith Atilla teaching us " + CV.vakken.v1 + CV.vakken.v2 + CV.vakken.v3 +"and as of now, "+currentV+". \n\nLast year I finished a study in "
      +CV.study1+", and with \nextra knowledge in "+CV.study2+", i hope \nto soon find a nice job in those fields in "+CV.address.city+"."
      
  );