function log(x) {
    return console.log(x);
}

log(typeof "Some string")
log(typeof 0)
log(typeof true)
log(typeof false)
log(typeof [])
log(typeof {})
log(typeof new Date())
log(typeof new String("nanan"))
log(new String("nanan") instanceof Object)
log(typeof new Number(2))

log(2>0)
log(2<0)
log(4>=2)
log(4<=4)

log(2==2)
log(2=="2")
log(2!=2)
log(2===2)
log(2==="2")
log(2!==2)

console.log(NaN == NaN)
console.log(NaN === NaN)

log(true && false)
log(true || false)
log(!true)

log(1 + 1 == 2 && 10 * 10 > 50)

log(true ? "yes" : "no")