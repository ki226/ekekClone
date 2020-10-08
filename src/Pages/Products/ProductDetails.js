import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import { URL_PATH } from "../../config";
import { API_URL } from "../../config";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import container from "../../Images/icon-container.png";
import heart from "../../Images/icon-heart.png";
import truck from "../../Images/icon-truck.png";
import like from "../../Images/like.png";

function ProductDetails(props) {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState(null);
  const [show, setShow] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${URL_PATH}product/productdetail/${props.match.params.id}`)
      .then((res) => {
        setData(res.data.product_data);
      });
  }, [props.match.params.id]);

  const modalHandle = (num) => {
    setActiveTab(num);
  };

  const addHandle = () => {
    setIsLoading(true);
    setAddToCart(true);
    axios({
      method: "Post",
      url: `${API_URL}/order/upload`,
      headers: { Authorization: localStorage.getItem("access_token") },
      data: {
        product_number: data.product_number,
      },
    }).then((res) => console.log(res));
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <div className="wrapper">
          <Navi>
            <ol className="category">
              <li>
                <Link to="" className="category-link">
                  제품
                </Link>
              </li>
              <MdKeyboardArrowRight size="13" className="icon" />
              <li>
                <Link to="" className="category-link">
                  {data.category}
                </Link>
              </li>
              <MdKeyboardArrowRight size="13" className="icon" />
              <li>
                <Link to="" className="category-link">
                  {data.sub_category}
                </Link>
              </li>
              <MdKeyboardArrowRight size="13" className="icon" />
              <li>{data.detail_category}</li>
            </ol>
          </Navi>
          <ContainerBox>
            <Container left>
              <ProductImage>
                <div className="img-box">
                  {data.images &&
                    data.images
                      .slice(0, 4)
                      .map((img, idx) => (
                        <img key={idx} src={img} alt="product-img" />
                      ))}
                  {show
                    ? data.images &&
                      data.images
                        .slice(4)
                        .map((img, idx) => (
                          <img key={idx} src={img} alt="product-img" />
                        ))
                    : null}
                </div>
                <SmallBtn
                  onClick={() => {
                    setShow(!show);
                    if (show) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  {show ? "접기" : "더 보기"}
                </SmallBtn>
              </ProductImage>

              <ProductNum>{data.product_number}</ProductNum>
              <Description>
                <div onClick={() => modalHandle(0)}>
                  <div>제품 설명</div>
                  <MdKeyboardArrowRight size="22" className="icon" />
                </div>
                <div onClick={() => modalHandle(1)}>
                  <div>제품 크기</div>
                  <MdKeyboardArrowRight size="22" className="icon" />
                </div>
              </Description>
            </Container>
            <Container>
              <ProductText>
                <div className="product-name">
                  <div>{data.name}</div>
                  <div className="price">
                    {data.price && data.price.toLocaleString()}
                  </div>
                </div>
                <div className="sub-info">{data.sub_info}</div>
              </ProductText>
              <div className="btn">
                <Button onClick={addHandle} buyBtn>
                  {isLoading ? (
                    <div className="loading-circle"></div>
                  ) : (
                    <>
                      {addToCart && (
                        <FaCheck size="11" className="check-icon" />
                      )}
                      {addToCart ? "장바구니에 추가되었습니다." : "구매하기"}
                    </>
                  )}
                </Button>
                <HeartBtn>
                  <img src={like} alt="wishlist" />
                </HeartBtn>
              </div>
              <SubText>
                <div>
                  <img src={truck} className="truck-icon" alt="truck-icon" />
                  <span className="circle">배송 가능</span>
                </div>
                <div>
                  <img
                    src={container}
                    className="container-icon"
                    alt="container-icon"
                  />
                  <span className="circle">
                    {data.product_location}에 재고가 있습니다.
                  </span>
                </div>
                <div>
                  <img src={heart} className="heart-icon" alt="heart-icon" />
                  <span>
                    마음이 바뀌어도 괜찮아요. 365일 이내에 영수증과 온전한
                    상태의 제품을 가져오시면 전액 환불해드립니다.
                  </span>
                </div>
              </SubText>
            </Container>
          </ContainerBox>
        </div>
      </Wrapper>

      <Modal activeTab={activeTab}>
        <div className={`modal ${activeTab === null ? "slide-close" : ""}`}>
          <div className="close-btn">
            <span className="close-icon" onClick={() => setActiveTab(null)}>
              <IoMdClose size="22" color="#111" />
            </span>
          </div>
          <div className="context">
            {activeTab === 0 && (
              <>
                <h1 className="title">제품 설명</h1>
                <div className="title-info">{data.explaination}</div>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h1 className="title">제품 크기</h1>
                <div className="title-info">{data.size}</div>
                <img src={data.images && data.images[0]} alt="product" />
              </>
            )}
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
}

export default ProductDetails;

const Wrapper = styled.section`
  margin: 0 20.5px;
  padding: 0 40px 0 20px;

  .wrapper {
    width: 92.2%;
    margin-left: auto;
  }
`;

const Navi = styled.nav`
  width: 100%;
  height: 54px;
  margin-bottom: 60px;
  border-bottom: 1px solid #dfdfdf;

  .category {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px 0;
    font-size: 12px;
    line-height: 18px;

    .category-link {
      color: #333333;
      cursor: pointer;

      &:hover {
        text-decoration: underline solid #333333;
      }
    }

    .icon {
      margin: 0 5px;
    }
  }
`;

const ContainerBox = styled.div`
  display: flex;
`;

const Container = styled.div`
  flex: ${(props) => (props.left ? 2.42 : 1)};
  ${(props) =>
    props.left ||
    `
        position: sticky;
        top: 6rem;
        right : 0;
        height : 500px;
        padding : 0 40px 0 60px;
        background : #ffffff;
    `}

  .btn {
    display: flex;
  }
`;
const ProductImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 60px;

  .img-box {
    margin: 0 -10px;

    img {
      width: 48%;
      margin: 0 10px 20px;
    }
  }
`;
const SmallBtn = styled.button`
  display: block;
  height: 40px;
  margin: 16px auto 0;
  padding: 0 20px;
  color: #111111;
  border-radius: 40px;
  border: none;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  &:hover {
    background: #dfdfdf;
  }
`;

const ProductNum = styled.span`
  display: inline-block;
  margin-bottom: 60px;
  padding: 1px 10px;
  background: #f5f5f5;
  color: #111111;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

const ProductText = styled.div`
  margin-bottom: 60px;

  .product-name {
    display: flex;

    div {
      margin-bottom: 5px;
      color: #000000;
      font-size: 22px;
      font-weight: 700;
      line-height: 32px;
    }

    .price {
      position: relative;
      justify-self: flex-end;
      margin-left: auto;

      &:before {
        content: "￦";
        position: absolute;
        top: -5px;
        left: -12px;
        font-size: 11px;
      }
    }
  }

  .sub-info {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.buyBtn ? "calc(100% - 56px)" : "100%")};
  height: 56px;
  margin-bottom: 20px;
  margin-right: ${(props) => (props.buyBtn ? "15px" : "0")};
  padding: 0 40px;
  background: ${(props) => (props.buyBtn ? "#0058a3" : "#F5F5F5")};
  color: ${(props) => (props.buyBtn ? "#fff" : "#111")};
  border: none;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background: ${(props) => (props.buyBtn ? "#004F93" : "#DFDFDF")};
  }

  img {
    width: 17.26px;
    height: 15.8px;
    margin-right: 2px;
  }

  .check-icon {
    margin-right: 5px;
  }

  .loading-circle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    animation: bounce 0.7s 3;
  }

  @keyframes bounce {
    0% {
      bottom: 20px;
      animation-timing-function: ease-out;
    }

    50% {
      bottom: 32px;
      animation-timing-function: ease-in;
    }

    100% {
      bottom: 20px;
      animation-timing-function: ease-out;
    }
  }
`;

const HeartBtn = styled(Button)`
  width: 56px;
  padding: 0;
  &:hover {
    background: #dfdfdf;
  }

  img {
    width: 17.26px;
    height: 15.8px;
  }
`;

const SubText = styled.div`
  display: inline-block;
  width: 100%;
  height: 218px;

  div {
    display: flex;
    align-items: center;
    height: 45px;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
    font-size: 14px;
    line-height: 24px;

    .truck-icon {
      width: 22px;
      height: 16.25px;
    }

    .container-icon {
      width: 20px;
      height: 16px;
    }

    .heart-icon {
      align-self: flex-start;
      margin-top: 5px;
      width: 17.26px;
      height: 15.8px;
    }

    span {
      display: inline-block;
      position: relative;
      padding: 0 5px 0 12px;
    }

    .circle {
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: -8px;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        padding: 0;
        border-radius: 50%;
        background-color: #0a8a00;
      }
    }
  }

  div:last-child {
    height: 68px;
    border: none;
  }
`;

const Description = styled.div`
  height: 182px;

  > div {
    display: flex;
    align-items: center;
    height: 90px;
    padding: 20px 0;
    border-top: 1px solid #f5f5f5;
    cursor: pointer;

    div {
      color: #111111;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      &:hover {
        text-decoration: underline solid #111111;
      }
    }

    .icon {
      justify-self: flex-end;
      margin-left: auto;
    }
  }
`;
const Modal = styled.div`
    position : fixed;
    z-index : -10;
    top : 0;
    left : 0;
    bottom : 0;
    right : 0;
    width : 100vw;
    height : 100vh;
    background: rgba(0,0,0,.15);
    opacity : 0;
    transition : all 0.3s;    

    ${(props) =>
      props.activeTab === null ||
      `
       opacity : 1;
       visibility: visible;
       z-index : 100;
   
    `}
 
    .modal{
        position : absolute;
        top : 0;
        right :0 ;
        bottom : 0;
        width : 27%;
        height : 100%;
        background : #ffffff;
        animation : slideToLeft 0.3s ease forwards;

        @keyframes slideToLeft {
            0%{
                transform : translateX(100%)
            }
            100%{
                transform : translateX(0)
            }
        }

        &.slide-close{
            animation : slideToRight 0.3s ease forwards;
        }

        @keyframes slideToRight {
            0%{
                transform : translateX(0)
            }
            100%{
                transform : translateX(100%)
            }
        }

        .close-btn{
            height : 90px;
            padding : 25px 37px;

            .close-icon{
                display : flex;
                justify-content : center;
                align-items : center;
                width : 40px;
                height : 40px;
                padding : 8px;
                margin-left : auto;
                border-radius: 40px;

                &:hover{
                    background : #DFDFDF ;
                }
            }
        }


        .context{
            padding : 30px 50px 40px;

            .title{
                margin-bottom : 30px;
                color : #111111;
                font-size : 22px;
                font-weight : 700;
            }

            .title-info{
                    font-size: 14px;
                    line-height : 24px;
                    margin-bottom : 8px;
            }

            img{
                width :100%;
            }
        }
    }
}
`;
