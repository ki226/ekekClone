import React from "react";
import styled from "styled-components";

function CartProduct(props) {
  const {
    product_image,
    product_name,
    product_description,
    product_size,
    product_number,
    product_price,
    product_quantity,
  } = props.product;
  return (
    <List>
      <img src={product_image} alt=""></img>
      <ListLeft>
        <div className="product-name">{product_name}</div>
        <div className="product-info">
          <div className="product-info">{product_description}</div>
          <div className="size">{product_size}</div>
          <div className="product-number">{product_number}</div>
        </div>
      </ListLeft>
      <ListRight>
        <div className="product-price">
          ₩&nbsp;{product_price.toLocaleString()}
        </div>
        <a href="#!">위시리스트로 이동</a>
        <OptionBox>
          <button onClick={() => props.removeItem(product_number)}>
            <img
              src="https://order.ikea.com/kr/ko/checkout/static/media/remove-thin-24.16c1cc7a.svg"
              alt=""
            />
          </button>
          <select
            value={product_quantity}
            onChange={(e) =>
              props.quantityHandler(product_number, e.target.value)
            }
          >
            {new Array(999).fill(undefined).map((val, idx) => {
              return <option value={idx + 1}>{idx + 1}</option>;
            })}
          </select>
        </OptionBox>
      </ListRight>
    </List>
  );
}

export default CartProduct;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 193px;
  margin: 32px 0;

  img {
    width: 136px;
    height: 136px;
    margin-right: 16px;
  }
`;

const ListLeft = styled.div`
  color: #333333;

  .product-name {
    margin-bottom: 8px;
    font-size: 17px;
    font-weight: 700;
    line-height: 21.5px;
  }

  .product-info {
    font-size: 12.96px;
    line-height: 18px;
  }
`;

const ListRight = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .product-price {
    font-size: 17px;
    font-weight: 700;
    text-align: right;
  }

  a {
    justify-self: flex-end;
    margin-top: auto;
    padding-bottom: 8px;
    height: 48px;
    font-size: 13px;
    line-height: 37px;
    color: #437baf;
    text-align: right;
  }
`;
const OptionBox = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 43.8px;
    height: 40px;
    background: none;
    border: 1px solid #666;
    border-radius: 2px;

    img {
      width: 24px;
      height: 24px;
      margin: 0 auto;
    }
  }

  select {
    position: relative;
    width: 87.6px;
    height: 40px;
    padding: 0 10px;
    margin-left: 8px;
    background: none;
    border: 1px solid #666;
    border-radius: 2px;
    font-size: 16px;
    line-height: 18.4px;
    appearance: none;
    background: url("https://order.ikea.com/kr/ko/checkout/static/media/chevron-down-thin-24.1667eab2.svg")
      no-repeat right 8px center;
    background-size: 1.5rem;
  }
`;
