import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form';
import UserCard from "./components/UserCard";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setError(false);
        } else {
          throw new Error(
            console.log(`User ar arsebobs`)
          );
        }
      } catch (e) {
        setError(true);
      } 
    }

    if (userName) {
      getData();
    }

  }, [userName]);



  function handleSubmit(event) {
      event.preventDefault();
      setUserName(event.target.elements.username.value);
      event.target.elements.username.value = '';
  }


  document.body.style.background= darkMode?"#141D2F":"#F6F8FF";

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Form handleSubmit={handleSubmit} error={error} darkMode={darkMode}/>
      {user ? <UserCard user={user} darkMode={darkMode}/>:""}
    </div>
  );
}

export default App;
