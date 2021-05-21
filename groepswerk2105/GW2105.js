let User = [
  {
    id: "user1",
    fullname: "Yasmine Tay",
    email: "yasminetay5@gmail.com",
    phone: "0478593744" ,
    username: "yaya-97",
    password: "geqrges54g1584g5t54",
  },

  {
    id: "user2",
    fullname: "Roger Kassanda",
    email: "rkassanda@gmail.com",
    phone: "0486513744",
    username: "R.Kassanda",
    password: "L8dfg81584g5t54",
  },

  {
    id: "user3",
    fullname: "Kabbaj Said",
    email: "mksaid@gmail.com",
    phone: "0474898733",
    username: "mksaid",
    password: "F756dss4g1584g5t54",
  },

  {
    id: "user4",
    fullname: "John Doe",
    email: "jdoe4555@gmail.com",
    phone: "0477536944",
    username: "j_d0e",
    password: "Q485F78h2L84g5t54",
  },

{
    id: "user5",
    fullname: "Mary Caroline",
    email: "mctv458@gmail.com",
    phone: "0478540907",
    username: "maca_87",
    password: "DD4hygvg69GFGdt54",
},
];

/*
add 5 User 
Use only array methods and no regular loops
*/

function addUser(){
    const addUser = User.push(
        {
            id: "user6",
            fullname: "Maria Lopez",
            email: "malopez79@gmail.com",
            phone: "0477458933" ,
            username: "malo_79",
            password: "H2585d5fg69GFGdt54",    
        },
        
    );
};
addUser();
console.log(User);

  // params: id,fullname, email, phone, username,password

function getUser() {
    console.log(User);
  // get all User

}

function getSortedUsersByName() {
    User.sort(function(a, b){
        if(a.fullname < b.fullname) { return -1; }
        if(a.fullname > b.fullname) { return 1; }
        return 0;
    })

  // getAllUser sorted list by names
  // google is your friend: "How to sort an array of objects by a property value?"
}

getSortedUsersByName();
console.log(User);


function getUserByName() {
  // You should get single user object by name
  let nameFilter = User.filter((x) => x.fullname == "John Doe");

    console.log(nameFilter);

};
getUserByName();


function deleteUserById() {
  // delete single user object by id
  let removeUser =  User.filter((x) => x.id !== "user6");
User=removeUser;
};
deleteUserById();
console.log(User);
// CONSOLE RESULT HERE
//
