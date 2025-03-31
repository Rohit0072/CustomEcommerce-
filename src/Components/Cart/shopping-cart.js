import React, { useState } from "react";

function ShoppingCartComponent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sandqvist",
      color: "Brown",
      size: "30 L",
      quantity: 2,
      price: 110.99,
      image: "https://placehold.co/150x150",
    },
    {
      id: 2,
      name: "Sandqvist",
      color: "Green",
      size: "30 L",
      quantity: 1,
      price: 159.99,
      image: "https://placehold.co/150x150",
    },
    {
      id: 3,
      name: "Sandqvist",
      color: "Navy",
      size: "30 L",
      quantity: 1,
      price: 89.99,
      image: "https://placehold.co/150x150",
    },
  ]);


  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [cardInfo, setCardInfo] = useState({
    name: "John Carter",
    number: "**** **** **** 2123",
    cvv: "156",
  });

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return React.createElement(
    "div",
    { className: "sc_shopping_cart_container" },
    React.createElement(
      "div",
      { className: "sc_shopping_cart_wrapper" },
      React.createElement(
        "div",
        { className: "sc_cart_section" },
        React.createElement("h2", { className: "sc_section_title" }, "Shopping Cart."),
        React.createElement(
          "table",
          { className: "sc_cart_table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", { className: "sc_product_header" }, "Product"),
              React.createElement("th", { className: "sc_size_header" }, "Size"),
              React.createElement("th", { className: "sc_quantity_header" }, "Quantity"),
              React.createElement("th", { className: "sc_price_header" }, "Total Price"),
              React.createElement("th", { className: "sc_remove_header" }, "")
            )
          ),
          React.createElement(
            "tbody",
            null,
            cartItems.map((item) =>
              React.createElement(
                "tr",
                { key: item.id, className: "sc_cart_item" },
                React.createElement(
                  "td",
                  { className: "sc_product_cell" },
                  React.createElement(
                    "div",
                    { className: "sc_product_info" },
                    React.createElement("img", {
                      src: item.image,
                      alt: item.name,
                      className: "sc_product_image",
                    }),
                    React.createElement("span", { className: "sc_product_name" }, item.name)
                  )
                ),
                React.createElement(
                  "td",
                  { className: "sc_size_cell" },
                  React.createElement(
                    "select",
                    { className: "sc_size_select" },
                    React.createElement("option", null, item.size)
                  )
                ),
        
                React.createElement(
                  "td",
                  { className: "sc_quantity_cell" },
                  React.createElement(
                    "div",
                    { className: "sc_quantity_controls" },
                    React.createElement(
                      "button",
                      {
                        className: "sc_quantity_btn sc_quantity_decrease",
                        onClick: () => updateQuantity(item.id, item.quantity - 1),
                      },
                      "−"
                    ),
                    React.createElement("span", { className: "sc_quantity_value" }, item.quantity),
                    React.createElement(
                      "button",
                      {
                        className: "sc_quantity_btn sc_quantity_increase",
                        onClick: () => updateQuantity(item.id, item.quantity + 1),
                      },
                      "+"
                    )
                  )
                ),
                // Price cell
                React.createElement(
                  "td",
                  { className: "sc_price_cell" },
                  React.createElement(
                    "span",
                    { className: "sc_price_value" },
                    `$${(item.price * item.quantity).toFixed(2)}`
                  )
                ),
                // Remove cell
                React.createElement(
                  "td",
                  { className: "sc_remove_cell" },
                  React.createElement(
                    "button",
                    {
                      className: "sc_remove_btn",
                      onClick: () => removeItem(item.id),
                    },
                    "×"
                  )
                )
              )
            )
          )
        ),
        // Cart summary
        React.createElement(
          "div",
          { className: "sc_cart_summary" },
          React.createElement(
            "div",
            { className: "sc_subtotal_row" },
            React.createElement("span", { className: "sc_subtotal_label" }, "Subtotal:"),
            React.createElement("span", { className: "sc_subtotal_value" }, `$${calculateSubtotal()}`)
          ),
          React.createElement(
            "div",
            { className: "sc_shipping_row" },
            React.createElement("span", { className: "sc_shipping_label" }, "Shipping:"),
            React.createElement("span", { className: "sc_shipping_value" }, "Free")
          ),
          React.createElement(
            "div",
            { className: "sc_total_row" },
            React.createElement("span", { className: "sc_total_label" }, "Total:"),
            React.createElement("span", { className: "sc_total_value" }, `$${calculateSubtotal()}`)
          )
        ),
        // Continue shopping button
        React.createElement(
          "button",
          { className: "sc_continue_shopping_btn" },
          React.createElement("span", { className: "sc_continue_icon" }, "←"),
          " Continue Shopping"
        )
      ),
      // Right column - Payment Info
      React.createElement(
        "div",
        { className: "sc_payment_section" },
        React.createElement("h2", { className: "sc_sec_title_pay" }, "Payment Info."),
        // Payment method selection
        React.createElement(
          "div",
          { className: "sc_payment_method" },
          React.createElement("h3", { className: "sc_payment_method_title" }, "Payment Method:"),
          // Credit Card option
          React.createElement(
            "label",
            { className: "sc_payment_option" },
            React.createElement("input", {
              type: "radio",
              name: "paymentMethod",
              value: "creditCard",
              checked: paymentMethod === "creditCard",
              onChange: () => setPaymentMethod("creditCard"),
            }),
            React.createElement("span", { className: "sc_payment_option_label" }, "Credit Card")
          ),
          // PayPal option
          React.createElement(
            "label",
            { className: "sc_payment_option" },
            React.createElement("input", {
              type: "radio",
              name: "paymentMethod",
              value: "paypal",
              checked: paymentMethod === "paypal",
              onChange: () => setPaymentMethod("paypal"),
            }),
            React.createElement("span", { className: "sc_payment_option_label" }, "PayPal")
          )
        ),
        // Credit card form (only shown if credit card is selected)
        paymentMethod === "creditCard" &&
          React.createElement(
            "div",
            { className: "sc_credit_card_form" },
            // Name on card
            React.createElement(
              "div",
              { className: "sc_form_group" },
              React.createElement("label", { className: "sc_form_label" }, "Name On Card"),
              React.createElement("input", {
                type: "text",
                className: "sc_form_input",
                placeholder: cardInfo.name,
                onChange: (e) => setCardInfo({ ...cardInfo, name: e.target.value }),
              })
            ),
            // Card number
            React.createElement(
              "div",
              { className: "sc_form_group" },
              React.createElement("label", { className: "sc_form_label" }, "Card Number"),
              React.createElement("input", {
                type: "text",
                className: "sc_form_input",
                placeholder: cardInfo.number,
                onChange: (e) => setCardInfo({ ...cardInfo, number: e.target.value }),
              })
            ),            
            // CVV
            React.createElement(
              "div",
              { className: "sc_form_group" },
              React.createElement("label", { className: "sc_form_label" }, "CVV"),
              React.createElement("input", {
                type: "text",
                className: "sc_form_input sc_cvv_input",
                placeholder: cardInfo.cvv,
                onChange: (e) => setCardInfo({ ...cardInfo, cvv: e.target.value }),
              })
            ),

          ),
        // Checkout button
        React.createElement("button", { className: "sc_checkout_btn" }, "Check Out")
      )
    ),
    // CSS styles
    React.createElement(
      "style",
      null,
      `
      .sc_shopping_cart_container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        position: relative;
        top : 2rem;
        background-image: url(https://img.freepik.com/free-vector/retro-style-geometric-background-black-white_1048-15515.jpg?t=st=1743246228~exp=1743249828~hmac=3905cd0…&w=900);
      }
      
      .sc_shopping_cart_wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
      }
      
      .sc_cart_section {
        flex: 1;
        min-width: 300px;
        padding: 2rem;
        background-color: white;
      }
      
      .sc_payment_section {
        flex: 1;
        min-width: 300px;
        padding: 2rem;
        background-color: #f5f5f5b0;
        backdrop-filter: blur(5.5px);
      }
      
      .sc_section_title {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 30px;
        text-align : center;
      }
        .sc_sec_title_pay{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
        }
      
      .sc_cart_table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      
      .sc_cart_table th {
        text-align: left;
        font-size: 14px;
        font-weight: normal;
        color: #666;
        padding-bottom: 15px;
      }
      
      .sc_cart_item {
        border-bottom: 1px solid #eee;
      }
      
      .sc_cart_item td {
        padding: 15px 0;
      }
      
      .sc_product_info {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      
      .sc_product_image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
      }
      
      .sc_product_name {
        font-weight: 500;
      }
      
      .sc_size_select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: white;
        min-width: 80px;
      }
      
      .sc_quantity_controls {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .sc_quantity_btn {
        width: 28px;
        height: 28px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
      }
      
      .sc_quantity_value {
        min-width: 20px;
        text-align: center;
      }
      
      .sc_price_value {
        font-weight: 500;
      }
      
      .sc_remove_btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #999;
      }
      
      .sc_cart_summary {
        margin-top: 20px;
      }
      
      .sc_subtotal_row,
      .sc_shipping_row,
      .sc_total_row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      
      .sc_total_row {
        font-weight: 600;
        font-size: 18px;
        margin-top: 15px;
      }
      
      .sc_continue_shopping_btn {
        background: none;
        border: none;
        color: #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0;
        margin-top: 30px;
        font-size: 14px;
      }
      
      .sc_continue_icon {
        margin-right: 5px;
      }
      
      .sc_payment_method {
        margin-bottom: 30px;
      }
      
      .sc_payment_method_title {
        font-size: 14px;
        font-weight: normal;
        color: #666;
        margin-bottom: 15px;
      }
      
      .sc_payment_option {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      
      .sc_form_group {
        margin-bottom: 20px;
      }
      
      .sc_form_row {
        display: flex;
        gap: 20px;
      }
      
      .sc_form_group_half {
        flex: 1;
      }
      
      .sc_form_label {
        display: block;
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
      }
      
      .sc_form_input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
      }
      
      .sc_expiry_inputs {
        display: flex;
        gap: 10px;
      }
      
      .sc_form_select {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: white;
        flex: 1;
      }
      
      .sc_checkout_btn {
        width: 100%;
        padding: 15px;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        margin-top: 20px;
      }
      
      .sc_checkout_btn:hover {
        background-color: #1d4ed8;
      }
      
      @media (max-width: 768px) {
        .sc_shopping_cart_wrapper {
          flex-direction: column;
        }
        
        .sc_cart_table th:nth-child(2),
        .sc_cart_table td:nth-child(2) {
          display: none;
        }
        
        .sc_form_row {
          flex-direction: column;
          gap: 20px;
        }
      }
    `
    )
  );
}

export default ShoppingCartComponent;
