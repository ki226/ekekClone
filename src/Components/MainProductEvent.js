import styled from "styled-components";
import React from "react";
import mainevent1 from "../Images/mainevent1.png";
import mainevent2 from "../Images/mainevent2.png";

class MainProductEvent extends React.Component {
  render() {
    return (
      <>
        <ContainerFlex>
          <Container left>
            <img className="event_img" src={mainevent1} alt="logo" />
            <div className="text_box">
              <p className="text_title">밤새도록 쾌적하게</p>
              <p className="text_content">
                숙면을 방해하는 여름철의 꿉꿉한 잠자리. 이번 여름에는 침구를
                새롭게 바꿔보면 어떨까요? 쿨링 침구류가 매일 밤 당신을
                불면으로부터 지켜줄 거예요.
              </p>
            </div>
            <Button>자세히 보기</Button>
          </Container>
          <Container right>
            <img className="event_img" src={mainevent2} alt="logo" />
            <span className="row_red">더 낮은 새로운 가격</span>&nbsp;
            <span className="saltholmen">SALTHOLMEN 살톨멘</span>&nbsp;
            <span className="table">야외 테이블</span>&nbsp;
            <span className="price_sale">￦ 39,900</span>&nbsp;
            <span className="price">￦49,900</span>&nbsp;
            <div className="text_box">
              <p className="text_title">더 낮은 새로운 가격</p>
              <p className="text_content">
                품질은 그대로 가격은 아래로. 모두를 위한 IKEA의 합리적인 솔루션.
                더 많은 제품이 새로운 가격으로 찾아왔어요!
                <br /> 200여 개 이상의 제품을 더 낮은 가격으로 만나보세요.
              </p>
            </div>
            <Button>자세히 보기</Button>
          </Container>
        </ContainerFlex>
      </>
    );
  }
}
const ContainerFlex = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dfdfdfdf;
`;
const Container = styled.div`
  width: 100%;
  margin-right: ${(props) => (props.left ? "40px" : "")};
  .event_img {
    width: 100%;
    height: auto;
  }
  .text_box {
    margin-bottom: 40px;
    .text_title {
      margin-top: 40px;
      font-size: 38px;
      font-weight: 700;
    }
    .text_content {
      margin-top: 10px;
      font-size: 16px;
      line-height: 24px;
      color: #484848;
    }
  }
  .row_red {
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    color: red;
  }
  .saltholmen {
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
  }
  .table {
    font-size: 14px;
    line-height: 24px;
  }
  .price_sale {
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
  }
  .price {
    font-size: 14px;
    line-height: 24px;
    text-decoration: line-through solid black;
  }
`;
const Button = styled.button`
  height: 40px;
  margin-bottom: 60px;
  padding: 0px 20px;
  border: 0;
  border-radius: 40px;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  background-color: #111;
  cursor: pointer;
`;
export default MainProductEvent;
