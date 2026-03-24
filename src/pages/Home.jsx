import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ products, search }) => {
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Shop</h1>


      <div className="products-container">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;