const users = [
{ id: 1, name: "Mari", age: 22, active: true },
{ id: 2, name: "Jüri", age: 17, active: false },
{ id: 3, name: "Kati", age: 31, active: true },
{ id: 4, name: "Martin", age: 19, active: false },
{ id: 5, name: "Laura", age: 26, active: true }
]

users.forEach(user => {
    console.log(user.name);
});

const activeUsers = users.filter(user => user.active == true);
console.log(activeUsers);

const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);

const userNames = users.map(user => user.name)
console.log(userNames);

const findIdThree = users.find(user => user.id === 3);
console.log(findIdThree);

function getUserStatus(user){
    if (user.active === true){
        return 'aktiivne';
    } else {
        return 'mitteaktiivne';
    }
};

users.forEach(user =>{
    console.log(user.name, '-', getUserStatus(user));
});

const greetUser = (user) => {
    return `Tere, ${user.name}! Sa oled ${user.age} vana.`;
};

users.forEach(user =>{
    console.log(greetUser(user));
});

const [first, second, ...rest] = users;
const {name, age} = second;
console.log(name, age);

const newUser = {...users, id: 6, name: "Karl", age: 24, active: true}
console.log(newUser);

const newInfo = {...first,  address: {city: 'Tallinn'}};

console.log(newInfo);
console.log(newInfo.address?.city);
console.log(newUser.address?.city??"Linn puudub");

const SortByAge = users.sort((a, b) => a.age - b.age);
console.log(SortByAge);