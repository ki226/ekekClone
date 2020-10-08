import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class ProductContentForm extends React.Component {
  state = {
    imgHover: "",
  };

  imageButtonClickHandle = (id) => {
    this.props.history.push(`/products/${id}`);
  };

  render() {
    const {
      productName,
      productSubcate,
      productPrice,
      productSize,
      productImg,
      productHoverImg,
      product_number,
      productId,
    } = this.props;

    const { imgHover } = this.state;
    return (
      <Wrapper
        onMouseOver={() => {
          this.setState({
            imgHover: product_number,
          });
        }}
        onMouseOut={() => {
          this.setState({
            imgHover: "",
          });
        }}
      >
        <img
          onClick={() => this.imageButtonClickHandle(productId)}
          src={imgHover === product_number ? productHoverImg : productImg}
          alt={productName}
        />
        <ul>
          <li className="product-name">{productName}</li>
          <li className="product-info">
            {productSubcate}, {productSize}
          </li>
          <li className="product-price">
            <span className="price-symbol">₩</span>
            <h1 className="price-number">{productPrice.toLocaleString()}</h1>
          </li>
        </ul>
      </Wrapper>
    );
  }
}

export default withRouter(ProductContentForm);

const LikeButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background-color: none;
  background-image: url("../../Images/like.png");
`;

const Wrapper = styled.div`
  margin: 0 10px 10px 0;

  img {
    width: 260px;
    height: 260x;
    animation: fadein 1s linear;
  }

  ul {
    margin-top: 30px;

    li {
      margin-bottom: 8px;
    }

    .product-name {
      font-size: 14px;
      font-weight: 700;
    }

    .product-info {
      font-size: 12px;
    }

    .product-price {
      display: flex;
      align-items: top;

      .price-symbol {
        font-size: 10px;
      }

      .price-number {
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
`;
