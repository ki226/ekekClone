import React from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import MainProductEvent from "../../Components/MainProductEvent";
import MainProductMonth from "../../Components/MainProductMonth";
import MainInfo from "../../Components/MainInfo";
import Furnishing from "../../Pages/Main/Furnishing";
import main_photo from "../../Images/main_photo.png";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Container>
          <img className="main_photo" src={main_photo} alt="main_photo"></img>
          <p className="main_photo_text">
            매년 여름 찾아오는 마법같은 축제와 세일! 최대 70%까지 할인되는
            제품을 확인해보세요.
          </p>
          <Button>자세히 보기</Button>
          <MainProductEvent />
          <MainProductMonth />
          <MainInfo />
          <Furnishing />
        </Container>
        <Footer />
      </>
    );
  }
}

const Container = styled.div`
  width: 90.5%;
  height: 100%;

  padding: 0 40px 0 20px;
  margin: 60px 20.5px 0 auto;

  .main_photo {
    width: 100%;
    margin-bottom: 60px;
    cursor: pointer;
  }
  .main_photo_text {
    margin-bottom: 60px;
    font-family: "Noto IKEA";
    font-size: 16px;
    line-height: 26px;
    color: #484848;
  }
`;

const Button = styled.button`
  height: 40px;
  margin-bottom: 60px;
  padding: 0px 20px;
  border: 0;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.875rem;
  font-family: "Noto IKEA";
  line-height: 1.42857;
  color: #fff;
  background-color: #111;
  cursor: pointer;
`;

export default Main;
