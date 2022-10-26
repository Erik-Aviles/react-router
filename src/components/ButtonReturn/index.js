import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonReturn = (props) => {
    
    const navegate = useNavigate();

    const onReturnBlog = () => {
        navegate(-1);
      }
   return (
    <>
      <button onClick={onReturnBlog}>
        {props.children}
      </button>
    </>
   )
}
export { ButtonReturn };