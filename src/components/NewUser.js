import React, { useEffect } from 'react'
import Input from './Input'
import '../styles/NewUser.css'
import Container from './Container'
import useFormulario from '../hooks/useFormulario'


export default function NewUser({user, users, setUsers}) {
    const [formulario, handleChange, setFormulario] = useFormulario({
      firstName: '',
      lastName: '',
      cell:'',
      email:'',
      city:'',
      state:'',
      username:''
    })

    useEffect(()=> setFormulario({

      firstName: user.name.first,
      lastName: user.name.last,
      cell:user.cell,
      email:user.email,
      city:user.location.city,
      state:user.location.state,
      username:user.login.username
    })
    , [user, setFormulario]);
    const submit = e => {
      e.preventDefault()
      // Filtramos por el apellido del usuario para cargarlo, si existe lo modifica y si no lo añade como nuevo
      var index = users.findIndex(u=>u.name.last === formulario.lastName);

      let userToUpdate = {

        name:{
            first: formulario.firstName, 
            last: formulario.lastName
        },
        email: formulario.email, 
        cell: formulario.cell, 
        location: { 
          city: formulario.city, 
          state: formulario.state
        },
        login: { 
          username: formulario.username
        }
      };
  if (index === -1){
    setUsers([...users, 
      {
        name:{
            first: formulario.firstName, 
            last: formulario.lastName
        },
        email: formulario.email, 
        cell: formulario.cell, 
        location: { 
          city: formulario.city, 
          state: formulario.state
        },
        login: { 
          username: formulario.username
        }
      }
    ])

  }
  else
    setUsers([
      ...users.slice(0,index),
      userToUpdate,
      ...users.slice(index+1)
    ]
      );
  
    } 
    return (
        <div>
            <Container>
                <h2>Selecciona El Usuario a Editar o Registralo</h2>
                <form onSubmit={submit}>
                    <Input label= "Name" name="firstName" value={formulario.firstName} placeholder= 'Name' onChange={handleChange}/>
                    <Input label= "Last Name" name="lastName" value={formulario.lastName} placeholder= 'Last Name' onChange={handleChange}/>
                    <Input label= "Phone" name="cell" value={formulario.cell} placeholder= 'Number Phone' onChange={handleChange}/>
                    <Input label= "Email" name="email" value={formulario.email} placeholder= 'Email' onChange={handleChange}/>
                    <Input label= "City" name="city" value={formulario.city} placeholder= 'City' onChange={handleChange}/>
                    <Input label= "State" name="state" value={formulario.state} placeholder= 'State' onChange={handleChange}/>
                    <Input label= "UserName" name="username" value={formulario.username} placeholder= 'User Name' onChange={handleChange}/>
                    <button type="submit" className="submit">Enviar</button>
                </form>        
            </Container>
        </div>
    )
}

