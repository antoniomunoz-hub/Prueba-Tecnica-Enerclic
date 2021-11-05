import './App.css';
import UserTable from './components/UserTable';
import NewUser from './components/NewUser';
import React,{useEffect, useState} from "react";


function App() {
  // const users engloba a la tabla y user al editado o creado
  const[users, setUsers] = useState([]);
  const[user, setUser] = useState({name:{first:'', last:''},  email: '', cell: '', location: { city: '', state: ''},login:{ username: ''}});
  const edit = (user)=>{
    setUser(user)
  }
  const deleteUser = (user) =>{
    setUsers(users.filter(u => u.name.last !== user.name.last))
  }
  useEffect(() => {
    //Llamada a la API RandomUser con un resultado de 20 usuarios 
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data=>(setUsers(data.results)
    ));
    
  }, [])
 
  
  // pasamos los parametros al componente para trabajar en el app.js
  return (
      <div className="App"> 
      <UserTable edit={edit} deleteUser={deleteUser} users={users}></UserTable>
      <NewUser user={user} users={users} setUsers={setUsers}></NewUser>
      </div>
  );
}

export default App;
