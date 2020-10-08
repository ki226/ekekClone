import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CartProduct from "./CartProduct";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Loading from "./Loading";
import { API_URL } from "../../config";

function Cart() {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_URL}/order/list`,
      headers: { Authorization: localStorage.getItem("access_token") },
    }).then((res) => {
      setItems(res.data.total_info);
      setIsLoading(false);
    });
  }, []);

  const removeItem = (product_number) => {
    axios
      .delete(`${API_URL}/order/delete`, {
        headers: { Authorization: localStorage.getItem("access_token") },
        data: {
          product_number: product_number,
        },
        withCredentials: true,
      })
      .then((res) => {
        setItems(res.data.total_info);
      });
  };

  const quantityHandler = (product_number, product_quantity) => {
    fetch(`${API_URL}/order/upload`, {
      method: "post",
      headers: { Authorization: localStorage.getItem("access_token") },
      body: JSON.stringify({
        product_number: product_number,
        quantity: product_quantity,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res.total_info);
      });
  };

  return (
    <>
      <Nav />
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          {items.total_number === 0 ? (
            <Container>
              <img
                src="https://order.ikea.com/kr/ko/checkout/static/media/ill-alien.cb42647f.svg"
                alt=""
              />
              <Title empty>
                장바구니<sup>0</sup>
              </Title>
              <div className="text">현재 장바구니가 비어 있습니다.</div>
              <ButtonBox empty>
                <Button>제품 검색</Button>
              </ButtonBox>
            </Container>
          ) : (
            <Container>
              <Title>장바구니</Title>
              <ButtonBox>
                <Button>결제하기</Button>
              </ButtonBox>
              {items.chosen_items &&
                items.chosen_items.map((product, idx) => {
                  return (
                    <CartProduct
                      key={idx}
                      product={product}
                      removeItem={removeItem}
                      quantityHandler={quantityHandler}
                    />
                  );
                })}
              <TotalBox>
                <div>총 주문금액</div>
                <div>
                  ₩&nbsp;
                  {items.total_price && items.total_price.toLocaleString()}
                </div>
              </TotalBox>
              <ButtonBox bottomBtn>
                <Button>결제하기</Button>
              </ButtonBox>
            </Container>
          )}
        </Wrapper>
      )}
      <Footer />
    </>
  );
}

export default Cart;

const Wrapper = styled.main`
  margin: 24px 0 40px 0;
  padding-top: 40px;
`;

const Container = styled.section`
  width: 40%;
  margin: 0 auto;

  img {
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto 10px;
  }

  .text {
    text-align: center;
    font-size: 14px;
    line-height: 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: 8px;
  padding-top: ${(props) => props.empty && "16px"};
  color: #333333;
  font-size: ${(props) => (props.empty ? "17px" : "24px")};
  font-weight: 700;
  letter-spacing: -0.84px;
  line-height: 28px;
  text-align: center;

  sup {
    display: inline-block;
    position: relative;
    top: -5px;
    width: 19px;
    height: 19px;
    margin-left: 5px;
    border-radius: 50%;
    background: #f9d616;
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${(props) => (props.bottomBtn ? "48px" : "16px")};
  margin-top: ${(props) => props.empty && "16px"};
`;

const Button = styled.button`
  display: inline-block;
  width: 352px;
  height: 40px;
  color: #fff;
  background-color: #0058a3;
  border: none;
  border-color: #0058a3;
  border-radius: 2px;
  line-height: 37px;
  font-size: 13px;
`;

const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.6px 0;
  margin-top: 16px;
  border: 1px dashed #cacaca;
  border-left: none;
  border-right: none;
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
