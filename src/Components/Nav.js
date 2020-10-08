import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SideBar from "../Components/SideBar/SideBar";
import SideBarClickFurniture from "../Components/SideBar/SideBarClickFurniture";
import deilver from "../Images/deilver.png";
import person from "../Images/person.png";
import like from "../Images/like.png";
import basket from "../Images/basket.png";
import search from "../Images/search.png";
import { IoIosMenu } from "react-icons/io";

class Nav extends React.Component {
  state = {
    sideBar: false,
    sideBarClick: false,
    currentIndex: 0,
    subCurrentIndex: 0,
    inputClick: false,
    searchWord: "",
  };

  NavButtonHandler = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };

  GoBackButtonHandler = () => {
    this.setState({ SideBarClick: !this.state.SideBarClick });
  };

  currentIdxHandler = (idx) => {
    this.setState({ currentIndex: idx });
  };

  subCurrentIndexHandler = (idx) => {
    this.setState({ subCurrentIndex: idx });
  };

  searchHandler = (search) => {
    this.props.history.push(`/product/search/${search}`);
  };

  render() {
    return (
      <>
        {this.state.sideBar ? (
          <SideBarOption>
            <SideBar
              sideBar={this.state.sideBar}
              NavButtonHandler={this.NavButtonHandler}
              currentIndex={this.state.currentIndex}
              currentIdxHandler={this.currentIdxHandler}
              subCurrentIndexHandler={this.subCurrentIndexHandler}
            />
          </SideBarOption>
        ) : (
          ""
        )}
        {this.state.subCurrentIndex !== 0 && <SideBarClickFurniture />}
        <Container>
          <div className="ioio_menu_box" onClick={this.NavButtonHandler}>
            <IoIosMenu size="24" />
          </div>

          <ContainerInner>
            <div className="left_nav_align">
              <Link to="/">
                <img
                  className="ikea_logo"
                  src="https://www.ikea.com/kr/ko/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
                />
              </Link>
              <ul className="nav_text_box">
                <li>
                  <a herf="https://www.ikea.com/kr/ko/cat/products-products/">
                    모든 제품
                  </a>
                </li>
                <li>
                  <a herf="https://www.ikea.com/kr/ko/rooms/">디지털 쇼룸</a>
                </li>
              </ul>
            </div>
            <img className="search" src={search} alt="logo" />
            <Input
              onClick={() =>
                this.setState({
                  inputClick: !this.state.inputClick,
                })
              }
            />
            <div className="nav_right_icon_box">
              <img className="deilver" src={deilver} alt="logo" />
              <Link to="/login">
                <img className="person" src={person} alt="logo" />
              </Link>
              <img className="like" src={like} alt="logo" />
              <Link to="/cart">
                <img className="basket" src={basket} alt="logo" />
              </Link>
            </div>
          </ContainerInner>
        </Container>
        {this.state.inputClick ? (
          <SearchContainer>
            <SearchBox>
              <div className="search">
                <div>
                  <div className="img-hover">
                    <img
                      onClick={() => {
                        this.setState({ inputClick: !this.state.inputClick });
                      }}
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23111'%3E%3Cpath fill-rule='evenodd' d='M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z'/%3E%3C/svg%3E"
                      alt=""
                    />
                  </div>
                </div>
                <input
                  value={this.state.searchWord}
                  placeholder="검색어 입력"
                  onChange={(e) =>
                    this.setState({ searchWord: e.target.value })
                  }
                />
                {this.state.searchWord === "" ? null : (
                  <>
                    <div className="img-hover">
                      <img
                        onClick={() => this.setState({ searchWord: "" })}
                        className="btns"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e2e2e2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 10.6L15.6 7 17 8.4 13.4 12l3.6 3.6-1.4 1.4-3.6-3.6L8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6z' fill-rule='evenodd' clip-rule='evenodd' fill='%23666'/%3E%3C/svg%3E"
                        alt=""
                      />
                    </div>
                    <div className="img-hover">
                      <img
                        onClick={() =>
                          this.searchHandler(this.state.searchWord)
                        }
                        className="btns"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23111'%3E%3Cpath d='M12.29 18.37l1.42 1.4 7.7-7.77-7.71-7.64-1.4 1.42L17.57 11H4v2h13.6l-5.31 5.37z'/%3E%3C/svg%3E"
                        alt=""
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="search-list">
                <ol>
                  <li onClick={(e) => this.searchHandler(e.target.innerText)}>
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='%23484848' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.5 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm4.968-.307a6.5 6.5 0 10-1.514 1.315l3.996 3.996 1.414-1.414-3.896-3.897z'/%3E%3C/svg%3E"
                      alt=""
                    />
                    책상
                  </li>
                  <li onClick={(e) => this.searchHandler(e.target.innerText)}>
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='%23484848' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.5 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm4.968-.307a6.5 6.5 0 10-1.514 1.315l3.996 3.996 1.414-1.414-3.896-3.897z'/%3E%3C/svg%3E"
                      alt=""
                    />
                    의자
                  </li>
                  <li onClick={(e) => this.searchHandler(e.target.innerText)}>
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='%23484848' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.5 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm4.968-.307a6.5 6.5 0 10-1.514 1.315l3.996 3.996 1.414-1.414-3.896-3.897z'/%3E%3C/svg%3E"
                      alt=""
                    />
                    수납장
                  </li>
                  <li onClick={(e) => this.searchHandler(e.target.innerText)}>
                    <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='%23484848' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.5 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm4.968-.307a6.5 6.5 0 10-1.514 1.315l3.996 3.996 1.414-1.414-3.896-3.897z'/%3E%3C/svg%3E"
                      alt=""
                    />
                    선반
                  </li>
                </ol>
              </div>
            </SearchBox>
          </SearchContainer>
        ) : null}
      </>
    );
  }
}

export default withRouter(Nav);

const Container = styled.div`
  display: flex;
  padding: 0px 40px 0px 20px;
  margin: 0 20.5px;
  height: 90px;
  .ioio_menu_box {
    width: 40px;
    height: 40px;
    margin: 26px 37px 26px 37px;
    padding: 8px;
    border-radius: 40px;
    cursor: pointer;
    &:hover {
      background-color: #dfdfdf;
      transition-property: background-color;
      transition-duration: 0.3s;
    }
  }
`;

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-left: 20px;
  .left_nav_align {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .ikea_logo {
      width: 90px;
      height: 36px;
    }
    .nav_text_box {
      display: flex;
      width: 183.22px;
      margin-left: 32px;
      li {
        display: block;
        padding: 10px 15px 10px 15px;

        a {
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          color: #111111;
        }
      }
    }
  }
  .search {
    position: absolute;
    left: 535px;
    z-index: 1;
    width: 19px;
  }
  .nav_right_icon_box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 192px;
    height: 40px;
    margin: 0 -10px 0 40px;

    .deilver {
      width: 22px;
      height: 16px;
      cursor: pointer;
    }
    .person {
      width: 16px;
      height: 16px;
    }
    .like {
      width: 17x;
      height: 15px;
      cursor: pointer;
    }
    .basket {
      width: 20.56px;
      height: 16px;
      cursor: pointer;
    }
  }
`;

const Input = styled.input.attrs({
  type: "search",
  spellcheck: "false",
  placeholder: "검색어 입력",
})`
  position: relative;
  width: 65%;
  height: 50px;
  padding: 13px 54px;
  margin-left: 32px;
  border: 0;
  font-size: 16px;
  background-color: #f5f5f5;
  border-radius: 50em;
`;

const slideToBottom = keyframes`
   0%{
        transform : translateY(-100%)
    }
    100%{
        transform : translateY(0)
    }
`;

const SearchContainer = styled.div`
  position: fixed;
  z-index: 500;
  width: 100vw;
  height: 100vw;
  background: rgba(0, 0, 0, 0.15);
`;

const SearchBox = styled.div`
  position: fixed;

  z-index: 500;
  top: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  animation: ${slideToBottom} 0.3s ease forwards;

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 92px;
    padding-right: 40px;
    border-bottom: 1px solid #dfdfdf;

    &:before {
      content: "";
      position: absolute;
      top: 0;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 100%;
      margin-right: 20px;
    }

    .img-hover {
      position: relative;
      width: 40px;
      height: 40px;
      margin: 0;
      border-radius: 50%;

      &:hover {
        background: #e2e2e2;
      }

      img {
        cursor: pointer;
        width: 24px;
        height: 24px;
      }
    }

    input {
      display: block;
      width: 100%;
      height: 47.61px;
      padding: 12px 0;
      border: none;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .search-list {
    width: 100%;
    padding: 40px 40px 80px 145px;
    color: #111111;

    ol {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        img {
          padding-right: 20px;
        }
      }
    }
  }
`;

const SideBarOption = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  overflow: ${(props) => (props.sideBar ? "" : "hidden")};
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  transition: width 0.25s ease-in;
`;
