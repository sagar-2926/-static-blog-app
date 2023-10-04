import React from 'react'
import'./Previewpostcard.css';
import {Link} from 'react-router-dom';
function Previewpostcard({ id ,Title , Description ,Author,Image}) {
  return (
    <div className='preview-post-card'>
    <img className='preview-img' src={Image}/>
    <h2 className='card-title'>{Title}</h2>
    <p className='card-author'>By : {Author}</p>
     <Link to={`/post/read/${id}` }className='post-link'>Read more</Link> 
 </div>
  )

}

export default Previewpostcard