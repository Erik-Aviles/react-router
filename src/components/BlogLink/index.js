import React from 'react'
import { Link } from 'react-router-dom';


const BlogLink = ({post}) => {


  return (
    <li>
      <Link to={`/blog/${post.title.toLowerCase().split(" ").join("-")}`}>{post.title}</Link>
    </li>
  )
}

export { BlogLink };
