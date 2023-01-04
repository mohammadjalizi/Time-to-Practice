import { useState } from "react"

import Adduser from "./User/Adduser";
import UsersList from "./User/Userslist";
function App() {
const[userlist,setuserlist]=useState([]);
const adduserhandel=(uName,uAge)=>{

  setuserlist((preveuserlist)=>{

      return [...preveuserlist,{name:uName , age:uAge}];
  })
}
  return (
    <div className="App">
<h1>logomamohamamd</h1>
    </div>
  );
}

export default App;
