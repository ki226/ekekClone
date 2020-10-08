import React from "react";
import styled from "styled-components";
import Furnishing from "../Pages/Main/Furnishing";

class FurnishingDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <CategoryInfo>
          <p className="text">홈</p>
          <p>></p>
          <p className="text">아이디어</p>
          <p>></p>
          <p className="text">갤러리</p>
        </CategoryInfo>
        <MainContents>
          <img
            src={
              "https://www.ikea.com/ext/ingkadam/m/425c69d8aa99e148/original/PH156736-crop001.jpg?f=m"
            }
            alt="sample"
          />
        </MainContents>
        <Furnishing title="더 많은 갤러리 보기" />
      </Wrapper>
    );
  }
}

export default FurnishingDetail;

const Wrapper = styled.div`
  width: 85%;
  margin: 40px 0 0 150px;
`;

const CategoryInfo = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;

  p {
    margin-right: 10px;
  }

  .text {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContents = styled.div`
  padding: 60px 0;

  img {
    display: block;
    margin: auto;
    width: 750px;
    height: 1000px;
  }
`;
