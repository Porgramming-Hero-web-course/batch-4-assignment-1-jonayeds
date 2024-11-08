

type Circle =  {
    shape:"circle"
    radius:number
}
type Rectangular ={
    shape:"Rectangular"
    width:number;
    height:number;
}

const calculateShapeArea = (element: Circle | Rectangular): number=>{
    if(element.shape === "circle"){
        return (Math.PI * (element.radius * element.radius)) 
    }else{
        return element.height*element.width
    }

}


console.log(calculateShapeArea({shape:"circle",radius:5}))
console.log(calculateShapeArea({shape:"Rectangular",height:6,width:4}))