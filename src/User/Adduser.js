import { useState } from "react";
import Card from "../UL/Card";

const Adduser=(props)=>{
   const[enterusername,setusername]=useState(''); 
   const [enterpaswoord,setenterpaswoord]=useState('');
const addchancghhandel=(event)=>{
    event.preventDefault();
    console.log(enterusername,enterpaswoord)
    setusername('');
    setenterpaswoord('');
}
const usernamehande=()=>{

}
if(setusername===0||setenterpaswoord===0){
return;
    
}
if(+setenterpaswoord <1){
    return;
}
const usernamehandel=()=>{
setusername(event.target.value)

}
const paswoordamehande=()=>{
setenterpaswoord(event.target.value)
}
return(
  
<form className=" bg-red-200  w-2/4 m-auto mt-4" onSubmit={ addchancghhandel}>
    <label htmlFor="username" className=" block ">usernaem</label>
< input id="username"  type="text"  onChange={usernamehandel} className=" w-full"/>

<label htmlFor="age"  className=" block">age</label>
<input  id="age"  type="number "  className=" w-full" onChange={paswoordamehande}/>
<button type="submit" className=" block">add user</button>
</form>


)

}
export default Adduser;