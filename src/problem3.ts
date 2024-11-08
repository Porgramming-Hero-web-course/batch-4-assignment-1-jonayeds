const countWordOccurrences=(sentence:string, word:string): number=>{
    const arrayOfWords:string[] = sentence.split(" ")

    let count:number =0;
    arrayOfWords.map((sWord:string)=>{
        if(word.toLowerCase()===sWord.toLowerCase())count++
    })
    return count

}

console.log(countWordOccurrences("I love typescript", "Typescript"))