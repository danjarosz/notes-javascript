//------MAPS-------
let ages_2 = new Map();
ages_2.set("Boris", 39);
ages_2.set("Liang", 22);
ages_2.set("Júlia", 62);

console.log(`Júlia is ${ages_2.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages_2.has("Jack"));
// → Is Jack's age known? false
console.log(ages_2.has("toString"));
// → false

console.log(`Boris is ${ages_2.get("Boris")}`);
ages_2.set("Boris", 20);
console.log(`Boris is ${ages_2.get("Boris")}`);
