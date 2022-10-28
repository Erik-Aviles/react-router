import React from 'react'
import { Link } from 'react-router-dom';


const BlogLink = ({postes}) => {


  return (
    <li>
      <Link to={`/blog/${postes.slug}`}>{postes.title}</Link>
    </li>
  )
}

export { BlogLink };
