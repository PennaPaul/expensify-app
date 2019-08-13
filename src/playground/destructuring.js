//
// Object destructing
//


// const person = {
//     age: 22,
//     location: {
//         city: 'London',
//         temp: 88
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`); 



// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }

//
// Array destructing
//

// const address = ['1299 S Juniper Street', 'Philly', 'Penn state', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$3.50', '$2.75'];

const [itemName = 'Coffee (iced)', , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);