import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import { ProductContext } from "../contexts/ProductContext"

const ProductDetails = () => {
  const { id } = useParams()
  // console.log(id)
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  return <div>Product Details Page</div>
}

export default ProductDetails
