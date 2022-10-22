import React from 'react';
import { BlogLink } from '../BlogLink';
import { blogData } from '../blogData';
import { Outlet } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog </h1>
      <ul>
        {blogData.map(post =>(
          <BlogLink key={post.slug} post={post}/>
          ))}
      </ul>
      <Outlet />
    </div>
  )
}



export {BlogPage};
