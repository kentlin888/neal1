
let _ = require('lodash')
let b={
    name:"John",
    age:55,
    cv:{
        scholl:""
    }
}
let c = {
    name:"bob",
    age:55
}

let isThesame = _.isEqual(b,c)
console.log(isThesame)