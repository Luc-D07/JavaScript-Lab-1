let danielle = {
    name: "Danielle Lucaj",
    age: 27,
    birthday: "July 30",
    detroitGC: true,
    lifeEvents: ["Born in Detroit", "Graduated college", "Quarantine", "Traveled to Europe"],
};

if (danielle.detroitGC === true) {
    console.log(`My name is ${danielle.name} and I am a student at Grand Cicus in Detroit, Michigan. I am currently ${danielle.age} years old and my birthday is on ${danielle.birthday}`)
} else {
    console.log(`My name is ${danielle.name} and I am a student at Grand Cicus in Grand Rapids, Michigan. I am currently ${danielle.age} years old and my birthday is on ${danielle.birthday} `)
};

for (let i = 0; i <= danielle.lifeEvents.length - 1; i++) {
    console.log(danielle.lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

while (true) {
    let randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    } else {
        counter++;
        console.log(`5 === 5 it took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}

