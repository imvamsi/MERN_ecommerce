import React from 'react'

const Image = ({item}) => {
    
  return(
      <>
        <div className="product-image">
            <img src={`http://localhost:8000/api/product/photo/${item._id}`} className="mb-3" style={{maxHeight: '100%', maxWidth: '100%'}}/>
        </div>   
      </>   
  )
   
}

export default Image
