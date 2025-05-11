//-----

class Rabbit {
    constructor(type) {
        this.type = type
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }

    whatAmI(){
        console.log(this)
    }

    returnMyProps() {
        const props = {...this}
        return props;
    }
}

const blueRabbit = new Rabbit('blue')
blueRabbit.speak("I am blue, da bu di, da bu daj!")
console.log((typeof blueRabbit, blueRabbit instanceof Rabbit))
blueRabbit.whatAmI()
const blueRabbitProps = blueRabbit.returnMyProps()
console.log(blueRabbitProps)

//--------
class SecretiveObject {
    #getSecret() {
        return "I ate all the plums";
    }
    interrogate() {
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

const secretiveObject = new SecretiveObject()
console.log(secretiveObject.interrogate())

//--------

class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

const someMax = new RandomSource(4);
console.log(someMax.getNumber())

//---------
const killerRabbit = new Rabbit("killer")
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log((new Rabbit("basic")).teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

//----------


//-- GET SET STATIC----
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
console.log(temp.fahrenheit)
console.log(Temperature.fromFahrenheit(44))

//---------------------------------
class List {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }

    static fromArray(array) {
        let result = null;
        for (let i = array.length - 1; i >= 0; i--) {
            result = new this(array[i], result);
        }
        return result;
    }
}


class ListIterator {
    constructor(list) {
        this.list = list;
    }

    next() {
        if (this.list == null) {
            return {done: true};
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return {value, done: false};
    }
}

List.prototype[Symbol.iterator] = function() {
    return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);
for (let element of list) {
    console.log(element);
}
// → 1
// → 2
// → 3

//--------