


class  Car{
    constructor(public name:string, public model:string, public year:number ){}
    getCarAge(){
        const currentYear = new Date().getFullYear()
        return (currentYear - this.year)
        
    }
}

const honda = new Car("honda", "Kawasaki", 2004)
console.log(honda.getCarAge())