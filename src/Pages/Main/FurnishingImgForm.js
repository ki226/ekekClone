import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./FurnishingImgForm.scss";
import arrowIcon from "../../Images/arrowIcon.png";

function FurnishingImgForm(props) {
  const [dotDisplay, setDotDisplay] = useState("");
  const [articleDisplay, setArticleDisplay] = useState("");

  const dotShow = (id) => {
    setDotDisplay(id);
  };

  const dotHide = () => {
    setDotDisplay("");
  };

  const articleShow = (productId) => {
    setArticleDisplay(productId);
  };

  const articleHide = () => {
    setArticleDisplay("");
  };

  const imageButtonClickHandle = (id) => {
    props.history.push(`/products/${id}`);
  };

  const { furnishingInfo } = props;

  return (
    <div className={`furnishing-img item${furnishingInfo.id}`}>
      <img
        src={furnishingInfo.background_img}
        alt="furnishing"
        onMouseOver={() => dotShow(furnishingInfo.id)}
        onMouseOut={() => dotHide(furnishingInfo.id)}
      ></img>
      {furnishingInfo.product.map((products, idx) => (
        <div
          key={idx}
          onMouseEnter={() => dotShow(furnishingInfo.id)}
          onMouseLeave={() => dotHide(furnishingInfo.id)}
        >
          <button
            className={`furnishing-btn ${products.product_name.split(" ")[0]}`}
            onMouseOver={() => articleShow(products.id)}
            onMouseLeave={() => articleHide()}
            onClick={() => imageButtonClickHandle(products.product_id)}
            style={{
              top: `${products.product_position_top}`,
              left: `${products.product_position_left}`,
              opacity: `${dotDisplay === furnishingInfo.id ? "1" : "0"}`,
            }}
          >
            <article
              className="furnishing-product"
              style={{
                display: `${articleDisplay === products.id ? "flex" : "none"}`,
              }}
            >
              <ul className="product-info">
                <li className="product-name">
                  {products.product_name.split(" ")[0]}
                </li>
                <li className="product-name-korean">
                  {products.product_name.split(" ")[1]}
                </li>
                <li className="product-category">
                  {products.product_category}
                </li>
                <li className="product-price">{products.product_price}</li>
              </ul>
              <img className="go-to-product" src={arrowIcon} alt="arrow"></img>
            </article>
            <div className="article-shadow"></div>
            <div
              className="mini-dot"
              style={{
                top: `${products.product_position_top}`,
                left: `${products.product_position_left}`,
                opacity: `${dotDisplay === furnishingInfo.id ? "1" : "0"}`,
              }}
            ></div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default withRouter(FurnishingImgForm);
