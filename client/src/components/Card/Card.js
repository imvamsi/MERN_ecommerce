import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'

const Card = ({product}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                 <div className="card-header">{product.name}</div>
                 <div className="card-body">
                     <Image item={product}/>
                     <p>{product.description}</p>
                     <p>${product.price}</p>
                     <Link to = '/'>
                         <button className="btn btn-outline-primary mr-2">
                             View product
                         </button>
                     </Link>
                     <Link to = '/'>
                         <button className="btn btn-outline-warning">
                             Add to cart
                         </button>
                     </Link>
                 </div>
            </div>
        </div>
    )
}

export default Card
