import React, {useState} from "react";
import './App.css';


import User from './components/users/User';
import UserData from "./components/userData/UserData"


function App() {

  const[user, setUser] = useState([])

  function addData(newData){

    return setUser(precontent => {
      return [...precontent,newData]})
  }
 
  return (
    <div>
      
      <User onAdd={addData} />
      <UserData users={user} />
    </div>
    

  );
}

export default App;
