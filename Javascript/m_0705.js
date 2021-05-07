const Uprofile = {
    IDtag:'yaya-97',
    initials:'YT',
}

function getPeople(Uprofile){
    console.log('User: ',Uprofile.IDtag)
}

let nullObject = {}

getPeople(Uprofile)

const pProfile ={
    fullN:'Yasmine TAY',
    age:23,
    email:'Yasmine.Tay@student.intecbrussel.be',
    country:'Belgium',
    city:'Brussels',
    printPersonInfo:function(){
        console.log('User profile:')
        console.log(`Full name:${pProfile.fullN}\nAge:${pProfile.age}\nCountry:${pProfile.country}\nLocation:${pProfile.city}\nE-mail:${pProfile.email}`)
        return `Full name:${pProfile.fullN}\nAge:${pProfile.age}\nCountry:${pProfile.country}\nLocation:${pProfile.city}\nE-mail:${pProfile.email}`
    }
}

// function clickEvent(){
//     console.log('hello click')
//     console.log(pProfile.printPersonInfo())
//     document.getElementById('PROFILE').innerHTML= pProfile.printPersonInfo()
// }

pProfile.printPersonInfo();

