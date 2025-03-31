import React, { useEffect, useState } from "react";

const Electronics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://backend-onef.onrender.com/api/products?category.name=Electronics")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Error fetching electronics:", error));
    }, []);

    return (
        <div className="category-container">
            <h2 className="category-title">Electronics</h2>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <img 
                                src={product.images?.[0] || "https://via.placeholder.com/150"} 
                                alt={product.title} 
                                className="product-image" 
                            />
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No electronics products found.</p>
                )}
            </div>
        </div>
    );
};

export default Electronics;
