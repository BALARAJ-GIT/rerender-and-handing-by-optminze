      
import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0)
  const [user,setUser] = useState({
    name:'ram',
  })

  console.log(user);

  

  return (
    <div>
      <h1>Hello</h1>

      <h2>count is - {count}</h2>
      <h3>name is - {user.name}</h3>

      <button onClick={()=>{
        setCount (count + 1)
      }} >count
      </button>
      <button onClick={()=>{
       
        setUser( {name:'batman'})
      }}>change name</button>

    </div>
  );
};

export default App;