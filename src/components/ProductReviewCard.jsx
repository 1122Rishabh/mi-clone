import React from 'react'

const ProductReviewCard = ({name,price,index,image,review}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index}`}></img>
      <h5>{review} </h5>
      <span>{name}</span>
      <b>{price} </b>
    </div>
  )
}

export default ProductReviewCard
