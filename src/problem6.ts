interface Profile{
    name:string;
    age:number;
    email:string;
}

type Property  = Partial<Profile>



const updateProfile = (profile:Profile,property:Property )=>{
    const newProfile={...profile,...property}
    return newProfile 

} 

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, {age: 30}))

