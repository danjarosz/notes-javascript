function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'
hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'

//----------------
let finder = {
    find(array) {
        return array.some(v => v == this.value);
    },
    value: 5
};
console.log(finder.find([4, 5]));
// → true

//------------------
const obj = {}
const arr = []
const fn = () => {}

console.log("obj", typeof obj, Array.isArray(obj))
console.log("arr", typeof arr, Array.isArray(arr))
console.log("fn", typeof fn)

//------------
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'

//---------

const fn_1 = () => {
    console.log("1", this)
    return "lalal"
}

function fn_2() {
    console.log("2", this)
}

const obj_for_2 = {
    fn_2,
    fn_1
}

fn_1()
fn_2()
obj_for_2.fn_1()
obj_for_2.fn_2()

//---------

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

//-------------
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

const redRabbit = makeRabbit('red')
redRabbit.speak("I am red!")

//------

const arr_1 = [1,3,5]
console.log(arr_1.map(val => val * 2))

//----------------
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

console.log("toString" in Object.create(null));