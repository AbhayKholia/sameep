import React from 'react'
import "./ProductList.scss";
import Product from "../../Product/Product"

const ProductList = ({products}) => {
  return (
    <div className='product-lists grid bg-whitesmoke my-4'>
      {
      products.map(product =>{
        let discountedPrice = (product.price) -(product.price*(product.discountedPercentage/100));

        return(
          <Product key = {product.id}product = {{...product,discountedPrice}}/>
        )
      })
    }
    </div>
  )
}

export default ProductList



