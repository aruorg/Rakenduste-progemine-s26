const users = [
{ id: 1, name: "Mari", age: 22, active: true },
{ id: 2, name: "Jüri", age: 17, active: false },
{ id: 3, name: "Kati", age: 31, active: true },
{ id: 4, name: "Martin", age: 19, active: false },
{ id: 5, name: "Laura", age: 26, active: true }
]

//võtme iga kasutaja nime
users.forEach(user => {
    console.log(user.name);
});

//filteerime välja aktiivsed userid
const activeUsers = users.filter(user => user.active == true);
console.log(activeUsers);

//filtreerime välja täisealised userid
const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);

//Loome massiivi ainult userite nimedega
const userNames = users.map(user => user.name)
console.log(userNames);

//Liame useri id-ga 3
const findIdThree = users.find(user => user.id === 3);
console.log(findIdThree);

//anname väärtusele active: true/false "kategooriad"
function getUserStatus(user){
    if (user.active === true){
        return 'aktiivne';
    } else {
        return 'mitteaktiivne';
    }
};

//kuvame aktiivusese sorteerimise tulemuse iga useri kohta
users.forEach(user =>{
    console.log(user.name, '-', getUserStatus(user));
});

//tervitame iga userit ning toome välja nende vanuse
const greetUser = (user) => {
    return `Tere, ${user.name}! Sa oled ${user.age} vana.`;
};

//kuvame terminalis
users.forEach(user =>{
    console.log(greetUser(user));
});

//toome välja ainult teise useri nime ja vanuse
const [first, second, ...rest] = users;
const {name, age} = second;
console.log(name, age);

//lisame uue useri ilma originaal massiivi muutmata
const newUser = {...users, id: 6, name: "Karl", age: 24, active: true}
console.log(newUser);

//lisame esimesele userile aadressi
const newInfo = {...first,  address: {city: 'Tallinn'}};
console.log(newInfo);

//kontrollime aadressi olemasolu
console.log(newInfo.address?.city);

//Kui uuel useril pole aadressi anname vastava teate
console.log(newUser.address?.city??"Linn puudub");

//sorteerime userite vanused noorimast vanimani
const SortByAge = users.sort((a, b) => a.age - b.age);
console.log(SortByAge);