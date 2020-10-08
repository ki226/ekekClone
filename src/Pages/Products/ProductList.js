import React from "react";
import styled from "styled-components";
import ProductContentForm from "./ProductContentForm";
import Nav from "../../Components/Nav";
import { API_URL } from "../../config";

const menu = [
  "정렬",
  "카테고리",
  "색상",
  "가격",
  "사이즈",
  "고객 평가",
  "필터 더 보기",
];

class ProductList extends React.Component {
  state = {
    categorySelect: "",
    productList: [],
    subCategoryList: [],
    underLine: "",
    clicked: "",
    sortProductList: null,
  };

  componentDidMount() {
    fetch(API_URL + `/product/subcategorylist/?category=가구`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          subCategoryList: res.가구,
        })
      );
    fetch(API_URL + `/product/productlist/?subcategory=식탁/책상`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productList: res.data,
        })
      );
  }
  componentDidUpdate(_, prevState) {
    const { clicked, productList } = this.state;

    if (prevState.clicked !== clicked) {
      const idx = clicked;
      switch (idx) {
        case 3:
          const priceSortProductList = productList.sort((a, b) => {
            return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
          });
          this.setState({
            productList: priceSortProductList,
          });
          break;
        case 1:
          const subcateSortProductList = productList.sort((a, b) => {
            return a.sub_category < b.sub_category
              ? -1
              : a.sub_category > b.sub_category
              ? 1
              : 0;
          });
          this.setState({
            productList: subcateSortProductList,
          });
          break;
        case 0:
          const nameSortProductList = productList.sort((a, b) => {
            return a.simple_name < b.simple_name
              ? -1
              : a.simple_name > b.simple_name
              ? 1
              : 0;
          });
          this.setState({
            productList: nameSortProductList,
          });
          break;
        case 4:
          const sizeSortProductList = productList.sort((a, b) => {
            return a.size < b.size ? -1 : a.size > b.size ? 1 : 0;
          });
          this.setState({
            productList: sizeSortProductList,
          });
          break;
        default:
          const idSortProductList = productList.sort((a, b) => {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          });
          this.setState({
            productList: idSortProductList,
          });
      }
    }
  }

  render() {
    const { subCategoryList, underLine, clicked, productList } = this.state;

    return (
      <>
        <Nav />
        <ProductListWrapper>
          <CategoryInfo>
            <p className="text">제품</p>
            <p>></p>
            <p className="text">식탁</p>
            <p>></p>
            <p className="text">식탁/책상</p>
          </CategoryInfo>
          <ProductTitle>{`식탁 & 책상`}</ProductTitle>
          <CategoryContainer>
            {subCategoryList.map((subCategory, idx) => (
              <article
                key={idx}
                onMouseOver={() => {
                  this.setState({
                    underLine: idx,
                  });
                }}
                onMouseLeave={() => {
                  this.setState({
                    underLine: "",
                  });
                }}
              >
                <img src={subCategory.image} alt={subCategory.name} />
                <p
                  className={`${
                    underLine === idx ? "show-underline" : "none-underline"
                  }`}
                >
                  {subCategory.name}
                </p>
              </article>
            ))}
            <Introduce>
              <p>
                테이블 주위에 모여 앉아 도란도란 가족의 소식을 나누거나, 게임을
                하고 숙제를 도와주거나, 물건들
              </p>
              <p>
                을 올려두세요. 다양한 사이즈와 스타일로 출시되어 원하는 공간과
                용도에도 알맞은 제품을 고르실
              </p>
              <p>
                수 있어요. 온라인에서 제품을 찾아보거나 매장에서 직접 실물을
                구경해보세요.
              </p>
            </Introduce>
          </CategoryContainer>
          <MainContentsContainer>
            <MainButton>
              {menu.map((menuButton, idx) => (
                <button
                  className={`menu-btn ${
                    clicked === idx ? "menu-btn-clicked" : "menu-btn"
                  }`}
                  key={idx}
                  onClick={() => {
                    this.setState({
                      clicked: idx,
                    });
                  }}
                >
                  {menuButton}
                </button>
              ))}
            </MainButton>
            <MainContents>
              {productList.map((productList) => (
                <ProductContentForm
                  key={productList.product_number}
                  productName={productList.simple_name}
                  productSubcate={productList.sub_category}
                  productPrice={productList.price}
                  productSize={productList.size}
                  productImg={productList.images[0]}
                  productHoverImg={productList.images[1]}
                  productId={productList.id}
                />
              ))}
            </MainContents>
          </MainContentsContainer>
        </ProductListWrapper>
      </>
    );
  }
}

export default ProductList;

const ProductListWrapper = styled.div`
  position: relative;
  width: 85%;
  top: 40px;
  margin-left: 150px;
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

const ProductTitle = styled.h1`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 700;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  article {
    margin: 30px 20px 0 0;
    cursor: pointer;

    img {
      width: 161px;
      height: 100px;
    }

    p {
      margin-top: 30px;
      font-size: 14px;
    }

    .show-underline {
      text-decoration: underline;
    }
  }
`;

const Introduce = styled.div`
  margin-top: 30px;

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const MainContentsContainer = styled.div`
  margin-top: 30px;
`;

const MainButton = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;

  .menu-btn {
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

    &.menu-btn-clicked {
      height: 40px;
      margin: 15px 8px 10px;
      padding: 0 15px;
      border: none;
      border-radius: 40px;
      font-size: 12px;
      font-weight: bold;
      color: white;
      background-color: black;
      outline: none;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

const MainContents = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dfdfdf;
`;
