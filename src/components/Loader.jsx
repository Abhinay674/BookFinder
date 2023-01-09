import React from 'react'
import loader from './assets/loader.gif'

function Loader() {
  return (
    <div>
      <img src={loader} alt="Loading..." style={{ display: 'block', width: '100%', height:'100%', margin:'auto' }} />
    </div>
  )
}

export default Loader
