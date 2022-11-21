import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';

const inicialValue = {
  id: '',
  name: '',
  apellido: '',
  favoriteMovies: [],
};

const UserForm = () => {
  const navegate = useNavigate()
  const { addUser, error, setError, successMessagge, setSuccessMessagge} = useAuth();
  const [value, setValue] = useState(inicialValue);
  const {name, apellido} = value;


  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && apellido === ''){
      setError('Campos obligatorios (*)')
      return;
    } else {
      addUser(value);  
      setSuccessMessagge("Agregado con exito")
      setError(null);
    }
    
    setTimeout(()=> {
      setSuccessMessagge(null)
      navegate('/login');
    }, 2000);
  }

  const handleChange = (e) => {
    const changeValue = {
      ...value,
      [e.target.name] : e.target.value
    }
    setValue(changeValue)
  }
  const onCancelar = () => {
    setValue(inicialValue);
    navegate('/login');
  }
  return (
    <div>
      <h2>Formulario</h2>
      { error && (<div> {error} </div>)
      }
      { successMessagge && (<div> {successMessagge} </div>)
      }
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='*Escribe tu nombre'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <input 
          placeholder='*Escribe tu apellido'
          type='text'
          name='apellido'
          value={apellido}
          onChange={handleChange}
        />
        <button> Guardar</button>
        <button 
          type='button'
          onClick={onCancelar}
        > Cancelar</button>
      </form>
    </div>
  )
}

export default UserForm
