import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class SideBarClickFurniture extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Top></Top>
          <Content>
            <span
              onClick={this.props.subCurrentIndexHandler}
              className="all_product"
            >
              가구
            </span>
            <ul className="first_ul">
              <li>
                <span>전체 보기</span>
              </li>
              <li className="li_margin">
                <Link to="/products">
                  <span>식탁/책상</span>
                </Link>
              </li>
              <li>
                <span>책장/선반유닛</span>
              </li>
              <li>
                <span>서랍</span>
              </li>
              <li>
                <span>의자</span>
              </li>
              <li>
                <span>바테이블/의자</span>
              </li>
              <li>
                <span>카페가구</span>
              </li>
              <li>
                <span>이동식 카트</span>
              </li>
              <li>
                <span>옷장</span>
              </li>
              <li>
                <span>수납장/장식장</span>
              </li>
              <li>
                <span>거실장/찬장/콘솔테이블</span>
              </li>
              <li>
                <span>TV/멀티미디어가구</span>
              </li>
              <li>
                <span>칸막이</span>
              </li>
              <li>
                <span>침대</span>
              </li>
              <li>
                <span>소파/암체어</span>
              </li>
              <li>
                <span>야외용 가구</span>
              </li>
              <li>
                <span>영아용 가구</span>
              </li>
              <li>
                <span>어린이 가구</span>
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 480px;
  width: 480px;
  height: 100%;
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
    padding: 32px 0 32px 0;

    li {
      font-size: 14px;
      line-height: 24px;
      color: #111111;
      padding: 6px 0 6px 0px;
      &:hover {
        text-decoration: underline;
      }
    }
    .li_margin {
      margin-top: 22px;
    }
  }
`;

export default SideBarClickFurniture;
