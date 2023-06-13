
import Header from './component/Header';
import './App.css';
import Body from './component/Body';
import { useState } from 'react';



function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("listUser")) || [])
  const handleSubmit = (userSubmit) => {
    if (userSubmit.id !== "" && userSubmit.name !== "" && userSubmit.date !== "" && userSubmit.status !== "") {
      const newUser = [...user, userSubmit]
      setUser(newUser)
      localStorage.setItem("listUser", JSON.stringify(newUser))
    } else {
      alert("Check your information")
    }
  }

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = user.map((item) => {
      if (item.id === updatedUser.id) {
        return updatedUser;
      }
      return item;
    })

    setUser(updatedUsers);
    localStorage.setItem("listUser", JSON.stringify(updatedUsers));


    // localStorage.setItem("listUser",JSON.stringify(value))
  }

  const deleteUser = (idUser) => {
    const filterUser = user.filter((user) => {
      return user.id !== idUser
    })
    setUser(filterUser)
    localStorage.setItem("listUser", JSON.stringify(filterUser))

  }

  return (
    <>
      <div className='containerAll'>
        <Header handleSubmit={handleSubmit} />
        <Body user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} />

      </div>

    </>
  );
}

export default App;
