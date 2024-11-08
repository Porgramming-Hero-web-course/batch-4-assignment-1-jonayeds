const sumArray  = (array: number[]): number =>{
    let sum:number = 0;
    array.map((num:number)=>sum+=num )
    return sum
}

console.log(sumArray([1,2,3,4,5]))

