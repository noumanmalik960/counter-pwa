import React, { useState } from 'react'


import './App.css'

const App = () => {
  const [value, setValue] = useState('')
  // const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)


  // counter

  return (
    <div>
      <input style={{ display: "block" }} placeholder="Enter name" type="text" onChange={(e) => setValue(e.target.value)} />
      <input style={{ display: "block" }} placeholder="Enter password" type={showPassword ? "password" : "text"} />
      <hr></hr>
      <button onClick={() => setShowPassword(!showPassword)}>Show/Hide password</button>
      <div>
        {value}
      </div>
      <br /><hr />


    </div>
  )
}

export default App;