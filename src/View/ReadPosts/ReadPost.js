import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import blogData from './../../Config/blog.data.json';
import './ReadPost.css'
import Navbar from '../../Componant/Navbar/Navbar';

function ReadPost() {
  const { id } = useParams()

  const [post , setPost]  =useState({})
   
  useEffect (() =>{
    blogData.forEach((postObj)=>{
      if (postObj.id == id) {
        setPost(postObj)
      }
    })
  },[id])

  return (
   <>
   < Navbar />
   <div className='ReadPost-container'>
     <p className='ReadPost-title'>{post.Title}</p>
     <p className='ReadPost-auther'>{post.Author}</p>
     <p className='ReadPost-discription'>{post.Description}</p>
     <p className='ReadPost-date'>Date : {post.publishedDate}</p>
    
    </div></>
  )
}

export default ReadPost