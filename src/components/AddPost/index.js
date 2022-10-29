import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import './AddPost.css'

const inicialValue = {
  slug: '',
  title: '',
  content: '',
  author: '',
};

const AddPost = () => {

  const navegate = useNavigate()

  const [value, setValue] = useState(inicialValue);
  const {slug, title, content, author } = value;
  const { post } = useAuth();
  
  const handleChange = (e) =>{
    const changeValue = {
      ...value,
      [e.target.name] : e.target.value,
    }
    setValue(changeValue)
    console.log(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submint')
    post.addPost(value);
    navegate('/blog')
    console.log(value)
  }

  return (
    <div className='content-add-post'>
      <h3 className='title-3'>Agregar un nuevo post</h3>
      <form onSubmit={handleSubmit} className='form'>
        <input 
          placeholder='slug' 
          type='text'
          name='slug'
          value={slug.toLowerCase().split(" ").join("-")}
          onChange={handleChange}
          />
        <input 
          placeholder='autor' 
          type='text'
          name='author'
          value={author}
          onChange={handleChange}/>
        <input 
          placeholder='titulo' 
          type='text'
          name='title'
          value={title}
          onChange={handleChange} />
        <textarea 
          placeholder='contenido'
          name='content'
          value={content}
          onChange={handleChange}>
        </textarea>
        <button>Guardar post</button>
      </form>
    </div>
  )
}

export default AddPost
