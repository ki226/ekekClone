import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ikea from "../../Images/ikea.svg";

class SideBarClick extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Top>
            <div className="grform_and_img_box">
              <div
                className="grformclose_box"
                onClick={() => {
                  this.props.NavButtonHandler(0);
                  this.props.currentIdxHandler(0);
                  this.props.subCurrentIndexHandler(0);
                }}
              >
                <GrFormClose size="24" />
              </div>
              <img src={ikea} alt="" width="90" heigh="36" />
            </div>
            <div
              className="left_arrow_button_hover"
              onClick={() => {
                this.props.currentIdxHandler(0);
                this.props.subCurrentIndexHandler(0);
              }}
            >
              <AiOutlineArrowLeft size="24" />
            </div>
          </Top>
          <Content>
            <span className="all_product">모든 제품</span>
            <ul className="first_ul">
              <li>
                <span onClick={() => this.props.subCurrentIndexHandler(1)}>
                  가구
                </span>
              </li>
              <li>
                <span>소파 & 암체어</span>
              </li>
              <li>
                <span>침대 & 매트리스</span>
              </li>
              <li>
                <span>수납 & 정리</span>
              </li>
              <li>
                <span>어린이 IKEA</span>
              </li>
              <li>
                <span>텍스타일</span>
              </li>
              <li>
                <span>러그/매트/조립마루</span>
              </li>
              <li>
                <span>주방가구</span>
              </li>
              <li>
                <span>주방용품</span>
              </li>
              <li>
                <span>조명</span>
              </li>
              <li>
                <span>가전제품</span>
              </li>
              <li>
                <span>여름용 소품</span>
              </li>
              <li>
                <span>더보기</span>
              </li>
            </ul>
          </Content>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 480px;
  height: 952px;
  z-index: 3;
  background-color: white;
  cursor: pointer;
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
  
    .left_arrow_button_hover {
      position: absolute;
      top: 110px;
      left: 55px;
      width: 40px;
      height: 40px;
      padding: 8px;
      border-radius: 40px;
      color: #111111;
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
  .all_product {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.12px;
    line-height: 29px;
    color: #111111;
  }
  .first_ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 259px;
    height: 532px;
    padding: 32px 0 32px 0;
    li {
      font-size: 14px;
      line-height: 24px;
      text-align: left;
      color: #111111;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default SideBarClick;
