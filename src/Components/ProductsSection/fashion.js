import React, { useState } from "react";
import "./productsSection.css";

function FashionPage() {
  const itemsPerPage = 40; // 10 rows * 4 columns
  const [currentPage, setCurrentPage] = useState(1);

  const fashionProducts = Array.from({ length: 200 }, (_, index) => ({
    title: `Fashion Item ${index + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    rating: Math.floor(Math.random() * 5) + 1, 
    reviews: Math.floor(Math.random() * 200) + 10,
    image: `https://placehold.co/150x150?text=Fashion+${index + 1}`,
  }));

  const totalPages = Math.ceil(fashionProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = fashionProducts.slice(startIndex, endIndex);

  return (
    <div className="products-section-container">
      {/* Header */}
      <div className="products-section-header">
        <div className="products-section-label">
          <span>Fashion Collection</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section-grid">
        {currentProducts.map((product, index) => (
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

      {/* Pagination Section */}
      <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`pagination-btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        )).slice(0, 5)}

        {totalPages > 5 && <span className="pagination-dots">...</span>}

        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default FashionPage;
