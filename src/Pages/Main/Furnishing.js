import React from "react";
import styled from "styled-components";
import ImgContainer from "./ImgContainer";

const category = [
  "침실",
  "거실",
  "주방",
  "홈오피스",
  "아웃도어",
  "욕실",
  "어린이 IKEA",
  "다이닝",
  "현관",
];

class Furnishing extends React.Component {
  state = {
    colorHandle: "",
    furnishingData: [],
    buttonClick: 0,
  };

  moreButtonHandler = () => {
    this.setState({
      buttonClick: this.state.buttonClick + 1,
    });
  };

  render() {
    const { category, colorHandle, buttonClick } = this.state;
    const { title } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        {category &&
          category.map((category, idx) => (
            <button
              className={`${
                colorHandle === idx ? "category-btn-clicked" : "category-btn"
              }`}
              key={idx}
              onClick={() => {
                this.setState({
                  colorHandle: idx,
                });
              }}
            >
              {category}
            </button>
          ))}

        <ImgContainer buttonClick={buttonClick} />
        <MoreProduct>
          <MoreProductButton>
            <button onClick={this.moreButtonHandler}>12개 더 보기</button>
          </MoreProductButton>
        </MoreProduct>
      </Wrapper>
    );
  }
}

export default Furnishing;

const Wrapper = styled.div`
  margin: 55px 0 0 0;
  position: relative;

  .category-btn {
    border: none;
    outline: none;
    margin: 15px 8px 10px;
    border-radius: 40px;
    height: 40px;
    font-size: 12px;
    padding: 0 15px;
    font-weight: bold;
    color: #111111;
    background-color: #f5f5f5;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: #dfdfdf;
    }
  }
  .category-btn-clicked {
    border: none;
    outline: none;
    margin: 15px 8px 10px;
    border-radius: 40px;
    height: 40px;
    font-size: 12px;
    padding: 0 15px;
    font-weight: bold;
    color: white;
    background-color: black;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  color: #111111;
`;

const MoreProduct = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 20px;
  margin-top: 50px;
`;

const MoreProductButton = styled.div`
  width: 115px;
  height: 40px;
  position: relative;
  margin: 0 auto;
  left: -50px;
  button {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: #dfdfdf;
    }
  }
`;
