import React from "react";
import { Link, useNavigate } from "react-router-dom";


const ButtonReturn = (props) => {
    
    const navegate = useNavigate();

    const onReturnBlog = () => {
        navegate('/blog');
      }
   
   return (
    <>
      <button onClick={onReturnBlog}>
        {props.children}
      </button>
    </>
   )
}


// ------------------------------------------------
const ButtonAddPost = (props) => {
  return (
    <>
      <button >
        <Link to={'/blog/add-post'}>{props.children}</Link>
      </button>
    </>
   )
}


export { ButtonReturn , ButtonAddPost};