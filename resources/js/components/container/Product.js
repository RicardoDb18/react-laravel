import React from 'react'

export default function Product({id,title,image,price}) {
    return(
        <div>
            <img src={image} alt="" className="img-fluid w-100"/>

        </div>
    )
    
}