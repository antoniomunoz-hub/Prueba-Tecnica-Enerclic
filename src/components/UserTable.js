import React from "react";
import '../styles/UserTable.css'

export default function UserTable ({edit, deleteUser, users}) {
  
   
    return (
        <div className="userList">
          {/* cabezera de la tabla */}
          <table>
            <thead className="header">
              <tr className="tittle">
                <td>Name</td>
                <td>Last Name</td>
                <td>Number Phone</td>
                <td>Email</td>
                <td>City</td>
                <td>State</td>
                <td>UserName</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
              <tbody>
              {/* Hacemos un map para que nos devuelva los resultados por cada usuario */}
                  {users.map((user)=>{
                    return(
                      
                      <tr key={user.name.last}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.cell}</td>
                        <td>{user.email}</td>
                        <td>{user.location.city}</td>
                        <td>{user.location.state}</td>
                        <td>{user.login.username}</td>
                        <td><button onClick={()=>edit(user)} className="edit">Edit</button></td>
                        <td><button onClick={()=>deleteUser(user)} className="delete">Delete</button></td>
                      </tr>
            
                    )
                  })}
                </tbody>
          </table>    
        </div>
    )
}

