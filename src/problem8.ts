


const validateKeys=(obj:object, keys:string[] )=>{
    let isValid:boolean = true
    keys.map(key=>{
        if(!(key in obj)) isValid = false
    })
    return isValid
}

console.log(validateKeys({name:"abc",id:3}, ["id"]))