import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import { BsPerson } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import payment_product from "../../Images/payment_product.png";

class Payment extends React.Component {
  render() {
    return (
      <>
        <HeaderContanier>
          <img
            class="ikea_logo"
            src="https://www.ikea.com/kr/ko/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
          />
        </HeaderContanier>
        <Content>
          <OrderInfo>
            <div clanssName="OrderInfo_Inner">
              <div className="order_title">주문 정보</div>
              <div className="change_order_info">수정</div>
              <div className="order_info_box">
                <div className="price_section_flex">
                  <img
                    className="order_info_img"
                    src={payment_product}
                    size="32"
                  />
                  <div className="price_number_product_type_box">
                    <span className="order_info_number">1</span>
                    <span> x </span>
                    <span className="order_info_product">
                      LINNMON 린몬 / ADILS 아딜스
                    </span>
                    <p className="order_info_product_type">테이블</p>
                  </div>
                </div>
                <div className="total_price_box">
                  <span className="total_price">총 주문금액</span>
                  <span className="total_price_number">₩ 94,000</span>
                </div>
              </div>
            </div>
          </OrderInfo>
          <MyInfo>
            <div clanssName="my_info_box">
              <div className="my_info">나의 세부 정보</div>
              <div className="change_my_info">수정</div>
            </div>
            <div className="username_section">
              <div className="username_icon">
                <BsPerson size="24" />
              </div>
              <div className="username_data">전성현</div>
            </div>
            <div className="email_section">
              <div className="email_icon">
                <RiMailSendLine size="24" />
              </div>
              <div className="email_data">4dapeace@gmail.com</div>
            </div>
            <div className="phone_num_section">
              <div className="phone_num_icon">
                <FiPhone size="24" />
              </div>
              <div className="phone_num_data">01066144529</div>
            </div>
          </MyInfo>
          <SelectPayment>
            <div className="payment_title">어떤 방법으로 결제하시겠어요?</div>
            <div className="payment_notice">
              환불카드/기프트 카드는 사용할 수 없습니다.
            </div>
            <div className="payment_type_box">
              <p className="payment_type_text">이니시스</p>
              <img
                className="payment_type_img"
                src="https://order.ikea.com/kr/ko/checkout/payment_types/aci_inicis.png"
              />
            </div>
            <div className="payment_type_box2" align="left">
              <p className="payment_type_text2">
                결제 버튼을 클릭하면 이니시스로 이동합니다.
              </p>
            </div>
            <div className="total_price_box">
              <span className="total_price">총 주문금액</span>
              <span className="total_price_number">₩ 94,000</span>
            </div>
            <button className="button">
              <span style={{ color: "white" }}>₩</span>
              <span className="total_price_data"> 94,000</span>
              <span style={{ color: "white" }}> 결제하기</span>
            </button>
          </SelectPayment>
        </Content>
        <Footer />
      </>
    );
  }
}

const HeaderContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90px;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin-top: 60px;
  background-color: #f5f5f5;
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 608px;
  height: auto;
  margin-top: 24px;
  background-color: white;
  border-bottom: 1px solid #d2d9d9;
  padding: 40px 16px;
  margin-top: 0 39px;
  .order_title {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.42px;
    line-height: 29px;
    color: #333333;
  }
  .change_order_info {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 16px;
    color: #407ab1;
    &:hover {
      text-decoration: underline solid rgb(17, 17, 17);
      color: black;
    }
  }
  /* 1 X LINNOMON 린몬 / ADILS 아딜스 */
  .order_info_box {
    .price_section_flex {
      display: flex;
      margin-top: 16px;
      .order_info_img {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
      .price_number_product_type_box {
        .order_info_number {
        }
        .order_info_product {
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
        }
        .order_info_product_type {
          font-size: 14px;
          line-height: 16px;
          font-weight: 0;
        }
      }
    }
  }
  .total_price_box {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    padding: 6px 0;
    border-top: 1px dashed #cacaca;
    border-bottom: 1px dashed #cacaca;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    background-color: white;
    color: #333333;
    .total_price {
    }
    .total_pirce_number {
    }
  }
`;

const MyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 608px;
  height: auto;
  margin-top: 10px;
  background-color: white;
  border-bottom: 1px solid #d2d9d9;
  padding: 40px 16px;
  margin-top: 0 39px;
  .my_info {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.42px;
    line-height: 29px;
    color: #333333;
  }
  .change_my_info {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 16px;
    color: #407ab1;
    &:hover {
      text-decoration: underline solid rgb(17, 17, 17);
      color: black;
    }
  }
  .username_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 352px;
    height: 24px;
    margin-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #cccccc;
    .username_icon {
    }
    .username_data {
      width: 312px;
      height: 16px;
      font-size: 14px;
      line-height: 16px;
    }
  }
  .email_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 352px;
    height: 24px;
    margin-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #cccccc;
    .email_icon {
    }
    .email_data {
      width: 312px;
      height: 16px;
      font-size: 14px;
      line-height: 16px;
    }
  }
  .phone_num_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 352px;
    height: 24px;
    margin-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #cccccc;
    .phone_num_icon {
    }
    .phone_num_data {
      width: 312px;
      height: 16px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const SelectPayment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 608px;
  height: auto;
  margin-top: 10px;
  background-color: white;
  border-bottom: 1px solid #d2d9d9;
  padding: 40px 16px;
  margin-top: 0 39px;
  .payment_title {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.67px;
    line-height: 21px;
  }
  .payment_notice {
    display: flex;
    justify-content: center;
    width: 352px;
    height: 34px;
    margin-top: 20px;
    padding: 8px;
    border: 1px solid #959595;
    border-radius: 2px;
    font-size: 14px;
    line-height: 16px;
    color: black;
  }
  .payment_type_box {
    display: flex;
    justify-content: space-between;
    width: 352px;
    height: 49px;
    margin-top: 10px;
    padding: 16px 0 13px;
    border-top: 1px solid #cccccc;
    .payment_type_text {
      font-size: 14px;
    }
    .payment_type_img {
      width: 32px;
      height: 16px;
    }
  }
  .payment_type_box2 {
    width: 352px;
    height: 49px;
    font-size: 14px;
    text-align: left;
    .payment_type_text2 {
      display: flex;
      justify-content: flex-start;
    }
  }
  .total_price_box {
    display: flex;
    justify-content: space-between;
    width: 352px;
    padding: 6px 0;
    border-top: 1px dashed #cacaca;
    border-bottom: 1px dashed #cacaca;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    background-color: white;
    color: #333333;
    .total_price {
    }
    .total_pirce_number {
    }
  }

  .button {
    width: 352px;
    height: 40px;
    margin-top: 30px;
    border: 1px solid #3a6e9f;
    background-color: #3a6e9f;
    padding: 1px 6px;
    .total_price_data {
      color: white;
    }
  }
`;
export default Payment;
