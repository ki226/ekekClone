import React from "react";
import styled from "styled-components";
import ProductContentForm from "../Products/ProductContentForm";
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

class ProductSearch extends React.Component {
  state = {
    categorySelect: "",
    productList: [],
    subCategoryList: [],
    underLine: "",
    clicked: "",
    sortProductList: null,

    inputClick: false,
  };

  componentDidMount() {
    fetch(
      `${API_URL}/product/search/?user_input=${this.props.match.params.item}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.search_result.data,
        });
      });
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
    const { clicked, productList } = this.state;

    return (
      <>
        <Nav />
        <ProductListWrapper>
          <ProductTitle>"{this.props.match.params.item}"</ProductTitle>
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
                />
              ))}
            </MainContents>
          </MainContentsContainer>
        </ProductListWrapper>
      </>
    );
  }
}

export default ProductSearch;

const ProductListWrapper = styled.div`
  position: relative;
  width: 85%;
  top: 40px;
  margin-left: 150px;
`;

const ProductTitle = styled.h1`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 700;
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
