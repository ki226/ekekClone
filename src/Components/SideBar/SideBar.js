import React from "react";
import styled, { keyframes } from "styled-components";
import { GrFormClose } from "react-icons/gr";
import ikea from "../../Images/ikea.svg";
import earth from "../../Images/earth.png";
import downarrow from "../../Images/downarrow.png";
import SideBarClick from "../../Components/SideBar/SideBarClick";

class SideBar extends React.Component {
  render() {
    return (
      <>
        <Container setOverflow>
          <Top>
            <div className="grform_and_img_box">
              <div
                onClick={this.props.NavButtonHandler}
                className="grformclose_box"
              >
                <GrFormClose size="24" />
              </div>
              <img src={ikea} alt="" width="90" heigh="36" />
            </div>
          </Top>
          {this.props.currentIndex === 0 ? (
            <Content>
              <ul className="first_ul">
                <li>
                  <span
                    className="all_product"
                    onClick={() => this.props.currentIdxHandler(1)}
                  >
                    모든 제품
                  </span>
                </li>
                <li>
                  <span className="digital_showroom">디지털 쇼룸</span>
                </li>
                <li>
                  <span>아이디어</span>
                </li>
                <li>
                  <span>매장 안내</span>
                </li>
                <li>
                  <span>이달의 혜택</span>
                </li>
                <li>
                  <span>유용한 정보</span>
                </li>
                <li>
                  <span>더 낮은 새로운 가격</span>
                </li>
              </ul>
              <ul className="second_ul">
                <li>
                  <span>IKEA Family</span>
                </li>
                <li>
                  <span>고객지원</span>
                </li>
                <li>
                  <span>배송조회</span>
                </li>
                <li>
                  <span>내 프로필</span>
                </li>
              </ul>
            </Content>
          ) : (
            <SideBarClick
              currentIdxHandler={this.props.currentIdxHandler}
              NavButtonHandler={this.props.NavButtonHandler}
              subCurrentIndexHandler={this.props.subCurrentIndexHandler}
            />
          )}
          <Bottom>
            <div className="icon_all_box">
              <div className="icon_right2">
                <span className="icon_right_text2">한국어</span>
                <img
                  className="icon_right_image"
                  src={downarrow}
                  size="24"
                  alt="logo"
                ></img>
              </div>
            </div>
            <div className="icon_right">
              <img
                className="icon_right_image"
                src={earth}
                size="24"
                alt="logo"
              ></img>
              <span className="icon_right_text">국가 변경</span>
            </div>
          </Bottom>
        </Container>
      </>
    );
  }
}

export default SideBar;

const SideBarMove = keyframes`
from{transform : translateX(-100%)}
to{transform : translateX(0)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 480px;
  overflow: ${(props) => (props.setOverflow ? "" : "hidden")};
  height: 952px;
  z-index: 3;
  background-color: white;
  animation: ${SideBarMove} 0.25s ease-in-out;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  margin-bottom: 20px;
  padding: 0px 30px;
  .grform_and_img_box {
    display: flex;
    justify-content: space-between;
    width: 210px;
    height: 92px;
    .grformclose_box {
      position: relative;
      right: 10px;
      width: 40px;
      height: 40px;
      margin: 26px 37px 26px 37px;
      padding: 8px;
      border-radius: 40px;
      &:hover {
        background-color: #dfdfdf;
        transition-property: background-color;
        transition-duration: 0.3s;
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  left: 150px;

  .first_ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 305px;
    cursor: pointer;

    li {
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      text-align: left;
      &:hover {
        text-decoration: underline;
      }
      .all_product {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.64px;
        line-height: 48px;
        color: #111111;
        cursor: pointer;
      }
      .digital_showroom {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.64px;
        line-height: 48px;
        color: #111111;
        cursor: pointer;
      }
    }
  }

  .second_ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
    width: 300px;
    height: 144px;
    li {
      font-size: 14px;
      text-align: left;
      line-height: 24px;
      padding: 6px;
    }
  }
`;

const Bottom = styled.div`
  display: Flex;
  justify-content: center;
  position: relative;
  top: 320px;
  left: 40px;
  width: 480px;
  height: 96px;
  .icon_all_box {
    display: flex;
    justify-content: center;
  }
  .icon_right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 40px;
    margin-right: 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    line-height: 1.5;
    .icon_right_text {
      font-size: 12px;
    }
    .icon_right_image {
      width: 24px;
      height: 24px;
    }
  }
  .icon_right2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 115px;
    height: 40px;
    margin-right: 15px;
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    line-height: 1.5;
    color: black;
    .icon_right_text2 {
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
    }
    .icon_right_image {
      width: 15px;
      height: 15px;
    }
  }
`;
