import React from "react";
import styled from "styled-components";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import earth from "../Images/earth.png";
import downarrow from "../Images/downarrow.png";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Container>
          <ContainerInner>
            <div className="text_box_ikea_family">
              <h3 className="ikea_family">IKEA Family</h3>
              <p className="ikea_family_text">
                지금 IKEA Family에 무료로 가입하고
                <br />
                다양한 멤버 전용 혜택을 누리세요. &nbsp;
                <a
                  href="https://www.ikea.com/kr/ko/ikea-family/"
                  style={{ textDecoration: "underline" }}
                >
                  자세히 보기
                </a>
              </p>
              <Button>IKEA Family 가입하기</Button>
            </div>

            <div className="text_box_flex">
              <ul className="list_box">
                <h4>
                  <p className="text_box_title">고객문의</p>
                </h4>
                <ul className="text_box_content">
                  <li>고객지원</li>
                  <li>자주 묻는 질문</li>
                  <li>문의하기</li>
                  <li>배송조회</li>
                  <li>교환환불</li>
                  <li>품질보증</li>
                  <li>제품리콜</li>
                  <li>제품 구매 안내</li>
                  <li>피드백</li>
                </ul>
              </ul>

              <ul className="list_box">
                <h4>
                  <p className="text_box_title">쇼핑하기</p>
                </h4>
                <ul className="text_box_content">
                  <li>쇼핑하기</li>
                  <li></li>
                  <li>문의하기</li>
                  <li>배송조회</li>
                  <li>교환환불</li>
                  <li>품질보증</li>
                  <li>제품리콜</li>
                  <li>제품 구매 안내</li>
                  <li>피드백</li>
                </ul>
              </ul>

              <ul className="list_box">
                <h4>
                  <p className="text_box_title">서비스</p>
                </h4>
                <ul className="text_box_content">
                  <li>IKEA 서비스</li>
                  <li>배송 서비스</li>
                  <li>조립 서비스</li>
                  <li>홈퍼니싱 컨설팅 서비스</li>
                  <li>주방 플래닝 서비스</li>
                  <li>전화 플래닝 서비스</li>
                </ul>
              </ul>

              <ul className="list_box">
                <h4>
                  <p className="text_box_title">IKEA 이야기</p>
                </h4>
                <ul className="text_box_content">
                  <li>기업 소개</li>
                  <li>데모크래틱 디자인</li>
                  <li>지속 가능한 생활</li>
                  <li>뉴스</li>
                  <li>채용정보</li>
                </ul>
              </ul>
            </div>
          </ContainerInner>
          <IconListFlex>
            <div className="icon_list_flex">
              <ul className="icon_list">
                <li>
                  <img
                    className="icon_facebook"
                    src={facebook}
                    alt="logo"
                    size="24"
                  ></img>
                </li>
                <li>
                  <img
                    className="icon_instagram"
                    src={instagram}
                    alt="logo"
                    size="24"
                  ></img>
                </li>
                <li>
                  <img
                    className="icon_youtube"
                    src={youtube}
                    alt="logo"
                    size="24"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="icon_all_box">
              <div className="icon_right">
                <img className="icon_right_image" src={earth} size="24"></img>
                <span className="icon_right_text">국가 변경</span>
              </div>
              <div className="icon_right2">
                <span className="icon_right_text2">한국어</span>
                <img className="icon_right_image" src={downarrow}></img>
              </div>
            </div>
          </IconListFlex>
          {/* Footer 아래의 텍스트 */}
          <div className="footer_copyright_and_legal">
            <p className="footer_copyright">
              © Inter IKEA Systems B.V 1999-2020
            </p>
            <ul className="footer_legal_links_box">
              <li className="footer_legal_links_text">개인정보처리방침</li>
              <li className="footer_legal_links_text">웹사이트 이용약관</li>
              <li className="footer_legal_links_text">
                Responsible disclosure
              </li>
            </ul>
          </div>
          <div className="footer_legal_info_box">
            <p className="footer_legal_info">
              IKEA 코리아 <br />
              주소 : (우) 14352 경기도 광명시 일직로 17 IKEA광명점
              <br />
              사업자 등록번호 : 106-86-82871{" "}
              <a
                href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1068682871"
                target="_blank"
              >
                사업자정보확인
              </a>
              <br />
              대표자 : 프레드릭 요한손 <br />
              통신판매업 신고 : 2018-경기광명-0209 <br />
              TEL : 1670-4532
            </p>
          </div>
        </Container>
      </>
    );
  }
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 835px;
  margin: 60px 0px 0px 0px;
  padding: 60px 0px 0px 0px;
  background: #f5f5f5;

  .footer_copyright_and_legal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1605px;
    margin: 0 auto;
    margin-left: 200px;

    .footer_copyright {
      margin: 30px 0px 30px 0px;
      font-size: 12px;
      color: #484848;
    }

    .footer_legal_links_box {
      display: flex;
      justify-content: space-between;
      width: 350px;

      .footer_legal_links_text {
        font-size: 12px;
      }
    }
  }

  .footer_legal_info_box {
    width: 1605px;
    margin: 0 auto;
    margin-left: 200px;

    .footer_legal_info {
      margin: 0 0 8px;
      font-size: 12px;
      line-height: 20px;
      color: #484848;
    }
  }
`;

const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 435px;
  margin: 0 auto;
  margin: 20px 100px 0px 200px;

  .ikea_family {
    margin: 0px 0px 10px;
    font-size: 22px;
    font-weight: 700;
    color: #111111;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }

  .text_box_ikea_family {
    width: 480px;
    height: 375px;
    margin: 0px 0px 60px;
    padding: 0px 95px 0px 0px;
    color: #484848;
  }

  .text_box_flex {
    display: flex;
    justify-content: space-between;
    width: 960px;
    height: 360px;

    .text_box_title {
      margin-bottom: 50px;
      font-size: 24px;
      font-weight: 700;
    }

    ul {
      width: 186px;
      height: 375px;
    }

    .text_box_content {
      font-size: 14px;
      color: #484848;

      li {
        margin-bottom: 20px;
      }
    }
  }
`;

const IconListFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1600px;
  height: 70px;
  margin: 20px 100px 0 200px;
  border-bottom: 1px solid #dfdfdfdf;

  .icon_list {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    width: 150px;

    .icon_facebook {
      width: 40px;
      height: 40px;
      border: 0.0625rem solid #dfdfdf;
      background-color: inherit;
      padding: 0.3125rem;
      border-radius: 40px;
      height: auto;
    }

    .icon_instagram {
      width: 40px;
      height: 40px;
      border: 0.0625rem solid #dfdfdf;
      background-color: inherit;
      padding: 0.3125rem;
      border-radius: 40px;
      height: auto;
    }

    .icon_youtube {
      width: 40px;
      height: 40px;
      border: 0.0625rem solid #dfdfdf;
      background-color: inherit;
      padding: 0.3125rem;
      border-radius: 40px;
      height: auto;
    }
  }

  .icon_all_box {
    display: flex;
    justify-content: space-between;
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
    color: #484848;

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
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    line-height: 1.5;
    color: #484848;

    .icon_right_text2 {
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
      color: #484848;
    }

    .icon_right_image {
      width: 15px;
      height: 15px;
    }
  }
`;

const Button = styled.button`
  height: 40px;
  margin-top: 20px;
  padding: 0px 20px;
  border: 0;
  border-radius: 40px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.42857;
  color: #fff;
  background-color: #111;
  cursor: pointer;
`;
