import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Article from './components/ Article';


function App() {
  
  const adminUser = 
  {
    email: "try@test.com",
    password: "try123"
  }

  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError] = useState("");
  
  const Login = details =>
  {
    console.log(details);

    setUser({
      name: details.name,
      email: details.email
    });
  }

  const Logout = () =>
  {
    setUser ({name: "", email: ""});
  }

  return (
    <div className="App">
        {(user.email != "") ?(
          <div className="welcome">
            {/* <h2>Welcome, <span>{user.name}</span></h2> */}
            <Article/>
            <button onClick={Logout} className="logout">Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        ) }
    </div>
  );
}

export default App;
