import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';
import './AddPost.css'

const inicialValue = {
  id: '',
  title: '',
  content: '',
  author: '',
};

const AddPost = () => {

  const navegate = useNavigate()

  const [value, setValue] = useState(inicialValue);
  const {id, title, content, author } = value;
  const { post, messagges } = useAuth();
  
  const handleChange = (e) =>{
    const changeValue = {
      ...value,
      [e.target.name] : e.target.value,
    }
    setValue(changeValue)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title.trim() === ''){
      messagges.setError('Completar campos obligatorios (titulo*)')
      return;
    }else if(content.trim() === ''){
      messagges.setError('Completar campos obligatorios (contenido*)')
      return;
    } else {
      post.addPost(value);  
      messagges.setSuccessMessagge("Agregado con exito")
      messagges.setError(null);
    }
    
    setTimeout(()=> {
      messagges.setSuccessMessagge(null)
      navegate('/blog');
  }, 2000);
   
  }
  const onCalcelar = () =>{
    navegate('/blog')
    /* post.setEdithPost(null) */
  } 

  return (
    <div className='content-add-post'>
      <h3 className='title-3'>Agregar un nuevo post</h3>
      { messagges.error && (<div> {messagges.error} </div>)
      }
      { messagges.successMessagge && (<div> {messagges.successMessagge} </div>)
      }

      <form onSubmit={handleSubmit} className='form'>
        <input 
          placeholder='Clave unica' 
          type='text'
          name='id'
          value={id}
          onChange={handleChange}/>
        <input 
          placeholder='Autor' 
          type='text'
          name='author'
          value={author}
          onChange={handleChange}/>
        <input 
          placeholder='Titulo*' 
          type='text'
          name='title'
          value={title}
          onChange={handleChange} />
        <textarea 
          className='text-area-contenido'
          placeholder='Contenido*'
          name='content'
          value={content}
          onChange={handleChange}>
        </textarea>
        <button>Guardar post</button>
        <button type='button' onClick={onCalcelar}>Cancelar</button>
      </form>
      
    </div>
  )
}

export default AddPost
