import React from "react";
import "./productsSection.css";

function ProductsSection() {
  return (
    <div className="products-section-container">
      {/* Header */}
      <div className="products-section-header">
        <div className="products-section-label">
          <span>Our Products</span>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className="products-section-title-nav">
        <h2 className="products-section-heading">Explore Our Products</h2>
        <div className="products-section-nav">
          <button className="products-section-nav-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="products-section-nav-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section-grid">
        {products.map((product, index) => (
          <div className="products-section-product" key={index}>
            <div className="products-section-product-img-container">
              <img
                src={product.image}
                alt={product.title}
                className="products-section-product-img"
              />
              <div className="products-section-product-actions">
                <button className="products-section-action-btn">
                  <i className="far fa-heart"></i>
                </button>
                <button className="products-section-action-btn">
                  <i className="far fa-eye"></i>
                </button>
              </div>
            </div>
            <h3 className="products-section-product-title">{product.title}</h3>
            <div className="products-section-product-price">
              <span>${product.price}</span>
            </div>
            <div className="products-section-product-rating">
              <div className="products-section-stars">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < product.rating
                          ? "products-section-star-filled"
                          : "products-section-star-empty"
                      }`}
                    ></i>
                  ))}
              </div>
              <span className="products-section-review-count">
                ({product.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product Data
const products = [
  {
    title: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 38,
    image: "https://placehold.co/150x150",
  },
  {
    title: "CANON EOS DSLR Camera",
    price: 350,
    rating: 5,
    reviews: 98,
    image: "https://placehold.co/150x150",
  },
  {
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 225,
    image: "https://placehold.co/150x150",
  },
  {
    title: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: "https://placehold.co/150x150",
  },
  {
    title: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "https://placehold.co/150x150",
  },
  {
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: "https://placehold.co/150x150",
  },
  {
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 5,
    reviews: 55,
    image: "https://placehold.co/150x150",
  },
  {
    title: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 80,
    image: "https://placehold.co/150x150",
  },
];

export default ProductsSection;
