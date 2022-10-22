import React from 'react';
import { BlogLink } from '../BlogLink';
import { blogData } from '../blogData';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogData.map(post =>(
        <BlogLink key={post.slug} post={post}/>
       ))}
      </ul>
    </div>
  )
}



export {BlogPage};
