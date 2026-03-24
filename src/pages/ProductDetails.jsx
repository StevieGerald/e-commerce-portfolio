import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <div className="image-section">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="info-section">
        <h1>{product.name}</h1>
        <p className="price">₦{product.price}</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          bibendum orci nec lectus cursus, in fermentum nulla ultricies.
        </p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;