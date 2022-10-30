import React from "react";
import { Link} from "react-router-dom";

const ButtonAddPost = (props) => {
  return (
    <>
      <button >
        <Link to={'/blog/add-post'}>{props.children}</Link>
      </button>
    </>
   )
}

export {ButtonAddPost};