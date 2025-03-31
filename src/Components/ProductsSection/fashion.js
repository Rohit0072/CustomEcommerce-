import React, { useState, useEffect } from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa"; // Importing icons
import "./fashion.css";

function FashionPage() {
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFashionProducts = async () => {
      try {
        const response = await fetch("https://backend-onef.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        // Ensure filtering is case insensitive
        const filteredFashionProducts = data.filter(
          (product) => product.category?.toLowerCase() === "fashion"
        );

        setFashionProducts(filteredFashionProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFashionProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (fashionProducts.length === 0) return <p>No fashion products found.</p>;

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
                alt={product.name}
                className="products-section-product-img"
              />
              <div className="products-section-product-actions">
                <button className="products-section-action-btn">
                  <FaHeart />
                </button>
                <button className="products-section-action-btn">
                  <FaEye />
                </button>
              </div>
            </div>
            <h3 className="products-section-product-title">{product.name}</h3>
            <div className="products-section-product-price">
              <span>${product.price}</span>
            </div>
            <div className="products-section-product-rating">
              <div className="products-section-stars">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < product.rating
                          ? "products-section-star-filled"
                          : "products-section-star-empty"
                      }
                    />
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
            className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
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
// 