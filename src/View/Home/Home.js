import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Componant/Navbar/Navbar'
import Post from './../Post/Post';
function Home() {
  return (
    <>
    <Navbar/>
     <Post />
    </>
   
  )
}

export default Home