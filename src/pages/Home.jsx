import ProductCard from "../components/ProductCard";

const Home = ({ products, search }) => {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      
      {/* 🔥 HERO SECTION */}
      <div className="hero">
        <h1>Shop the Latest Trends 🔥</h1>
        <p>Best deals on fashion, gadgets and more</p>
        <button>Shop Now</button>
      </div>

      {/* ⭐ FEATURED SECTION */}
      <h2 className="section-title">Featured Products</h2>
      <div className="featured-products">
        {products.slice(0, 3).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* 🛍️ ALL PRODUCTS */}
      <h2 className="section-title">All Products</h2>
      <div className="products-container">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
};

export default Home;