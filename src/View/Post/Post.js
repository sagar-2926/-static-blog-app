import React from 'react'
import blogData from './../../Config/blog.data.json';
import './Post.css';
import Previewpostcard from '../../Componant/Previewpostcard/Previewpostcard';
function Post() {
  return (
   
   <div>
   
   <div className='Post-card'>
   {
    
    blogData.map((post , index) =>{
     return <Previewpostcard key = { index } id={post.id} Title={post.Title} Description={post.Description} Author={post.Author} Image={post.ImageUrl}/>
    })
  
   }
   </div>
   </div>
  )
}

export default Post