import axios from 'axios'
import React, { useState } from 'react'

const Listarticles = () => {
  const[articles,setArticles]=useState([])
  const fetchartiles=async()=>{try{
    const res = await axios.get('https://backend-8pqd.vercel.app/api/api/articles') 
    setArticles(res.data)
  }catch(error){console.log(error)}}
  return (
    <div>
    <h1>list des articles</h1> 
    <button onClick={fetchartiles}>fetch articles</button>
    
 


    </div>
  )
}

export default Listarticles
