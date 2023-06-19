import React from 'react'
import "./Loader.scss";
import {loader}  from "../../utils/images"
// imp
const Loader = () => {
  return (
    <div className='container'>
       <div className='loader flex justify-center align-center'>
        <img src={Image.loader} alt=''/>
       </div>
    </div>
  )
}

export default Loader