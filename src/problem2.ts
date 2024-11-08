

const removeDuplicates = (array:number[]):number[]=>{
     array.map((num:number)=> array.filter((a:number)=> a!== num))
     const newArray:number[]=[] ;
     for(let i=0; i<array.length;i++){
        let isDuplicate:boolean=false;
        for(let j=0; j<i; j++){
            if(array[i] === array[j]) {
                isDuplicate=true
                break;
            }
        }
        if(!isDuplicate) newArray.push(array[i]) 
     }
    return newArray
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))