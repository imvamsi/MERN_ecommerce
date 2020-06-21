import React from 'react'

const Image = ({item}) => {
    
  return(
      <>
        <div className="product-image">
            <img src={`http://localhost:8000/api/product/photo/${item._id}`} className="mb-3" style={{height: '50%', width: '50%'}}/>
        </div>   
      </>   
  )
   
}

export default Image
