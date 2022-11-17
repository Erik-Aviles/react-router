import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import { usePost } from '../../provider/PostContext';
import './EdithPost.css'

const inicialValue = {
  title: '',
  content: '',
  author: '',
};

const EdithPost = () => {
  const navegate = useNavigate() 

  const { messagges } = useAuth();
  const { edithPost, updatePost } = usePost();
  
  const [value, setValue] = useState(inicialValue);
  const {title, content, author } = value;
  
  useEffect(() =>{
    if (edithPost) {
      setValue(edithPost)
      
    }
  }, [edithPost])
  
  const handleChange = (e) =>{
    const changeValue = {
      ...value,
      [e.target.name] : e.target.value,
    }
    setValue(changeValue)
  } 
  const onCalcelar = () =>{
    navegate('/blog')
    /* post.setEdithPost(null) */
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
      updatePost(value);  
      messagges.setSuccessMessagge("Editado con exito")
      messagges.setError(null);
    }
    
    setTimeout(()=> {
      messagges.setSuccessMessagge(null)
      navegate('/blog');
  }, 2000);
 
 }   
    
  

  return (
    <div className='content-add-post'>
      <h3 className='title-3'>Editar post</h3>
      { messagges.error && (<div> {messagges.error} </div>)
      }
      { messagges.successMessagge && (<div> {messagges.successMessagge} </div>)
      }

      <form onSubmit={handleSubmit} className='form'>
        <input 
          placeholder='autor' 
          type='text'
          name='author'
          value={author}
          onChange={handleChange}/>
        <input 
          placeholder='titulo*' 
          type='text'
          name='title'
          value={title}
          onChange={handleChange} />
        <textarea 
          className='text-area-contenido'
          placeholder='contenido*'
          name='content'
          value={content}
          onChange={handleChange}>
        </textarea>
        <button>Guardar cambios</button>
        <button type='button' onClick={onCalcelar}>Cancelar</button>
      </form>
      
    </div>
  )
}

export default EdithPost;
