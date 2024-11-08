

const getProperty = <X, Y extends keyof X>(obj:X, property:Y ): X[Y]=>{
    return obj[property]
}

const student ={
    name:"abc",
    id:101
}
const employee={
    name:"A",
    salary:100,
    currency:"$"
}
console.log(getProperty(employee,"currency"))
