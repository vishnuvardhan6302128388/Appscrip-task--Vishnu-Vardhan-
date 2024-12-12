import './index.css'

const ProductItemCard = props => {
  const {itemDetails} = props
  const {category, image, price, title} = itemDetails
  return (
    <li className="product-item-container">
      <img src={image} alt={title} className="product-image" />

      <h1 className="product-title">{title}</h1>
      <p className="product-category">
        <span>Category:</span>
        {category}
      </p>
      <p className="product-price">
        <span>Price:</span>
        {price}
      </p>
    </li>
  )
}

export default ProductItemCard
