import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { API_URL } from "../../config";

const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/;
const birthReg = /^\d{4}-\d{1,2}-\d{1,2}$/;

function Signup({ history }) {
  const [focus, setFocus] = useState({
    name: false,
    birth: false,
    phoneNumber: false,
    email: false,
    password: false,
    certifiNumber: false,
  });

  const [valid, setValid] = useState({
    name: null,
    birth: null,
    phoneNumber: null,
    email: null,
    password: null,
    certifiNumber: false,
  });

  const [signupValue, setSignupValue] = useState({
    name: "",
    birth: "",
    phoneNumber: "",
    email: "",
    password: "",
    certifiNumber: "",
  });

  const [borderColor, setBorderColor] = useState({
    name: null,
    birth: null,
    phoneNumber: null,
    email: null,
    password: null,
    certifiNumber: null,
  });

  const [fontSize, setFontSize] = useState({
    name: "big",
    birth: "big",
    phoneNumber: "big",
    email: "big",
    password: "big",
    certifiNumber: "big",
  });

  const [show, setShow] = useState(false);

  const [inputToggle, setInputToggle] = useState({
    family: false,
    regular: true,
  });

  const [result, setResult] = useState("");
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (show) {
      const time =
        timer > 0 &&
        setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      return () => clearInterval(time);
    }
  }, [timer, show]);

  const inputFocus = (e) => {
    const { name } = e.target;

    setFocus({
      ...focus,
      [name]: !focus[name],
    });

    setFontSize({
      ...fontSize,
      [name]: "small",
    });

    setBorderColor({
      ...borderColor,

      [name]:
        valid[name] === null || valid[name] === true
          ? "bottomBlue"
          : "bottomRed",
    });
  };

  const inputBlur = (e) => {
    const { name } = e.target;

    setFocus({
      ...focus,
      [name]: !focus[name],
    });

    setBorderColor({
      ...borderColor,
      [name]: valid[name] === true ? null : "bottomRed",
    });

    setFontSize({
      ...fontSize,
      [name]: signupValue[name].length > 0 ? "small" : "big",
    });
  };

  const onChangeName = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      name: value.length > 0 && true,
    });
  };

  const onChangeBirth = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      birth: birthReg.test(value) ? true : false,
    });
  };

  const onChangePhoneNumber = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      phoneNumber: value.length === 11 ? true : false,
    });
  };

  const onChangeCertifiNumber = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      certifiNumber: value.length === 6 ? true : false,
    });
  };

  const onChangeEmail = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      email: value.includes("@" && ".") ? true : false,
    });
  };

  const onChangePassword = (e) => {
    const { name, value } = e.target;

    setSignupValue({
      ...signupValue,
      [name]: value,
    });

    setValid({
      ...valid,
      password: passwordReg.test(value) ? true : false,
    });
  };

  const borderColorChange = (name) => {
    switch (borderColor[name]) {
      case null:
        return "1px solid #929292";
      case "bottomRed":
        return "1px solid #e00751";
      case "bottomBlue":
        return "1px solid #0058a3";
      default:
        return "";
    }
  };

  const borderBoxStyle = (name) => {
    switch (borderColor[name]) {
      case "bottomRed":
        return "0 1px 0 #e00751";
      case "bottomBlue":
        return "0 1px 0 #0058a3";
      default:
        return "";
    }
  };

  const handleInputRadio = (e) => {
    setInputToggle({
      ...inputToggle,
      family: !inputToggle.family,
      regular: !inputToggle.regular,
    });
  };

  const sendNumber = () => {
    valid.phoneNumber && setShow(true);

    axios({
      method: "post",
      url: `${API_URL}/account/sms`,
      data: {
        mobile: signupValue.phoneNumber,
      },
    });
  };

  const checkCertifiNum = () => {
    axios({
      method: "post",
      url: `${API_URL}/account/check`,
      data: {
        mobile: signupValue.phoneNumber,
        code: signupValue.certifiNumber,
      },
    })
      .then((res) => {
        setResult(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("잘못된 인증번호입니다.");
      });
  };

  const signupClick = () => {
    axios({
      method: "post",
      url: `${API_URL}/account/signup`,
      data: {
        name: signupValue.name,
        birthday: signupValue.birth,
        email: signupValue.email,
        password: signupValue.password,
        phone_number: signupValue.phoneNumber,
      },
    }).then((res) => {
      console.log(res);
    });
    history.push("/login");
  };

  return (
    <Wrapper>
      <Container>
        <div className="left-container">
          <div className="title">
            <span>IKEA Family</span>&nbsp;회원 가입
          </div>
          <p>
            이미 가입하셨나요&nbsp;?&nbsp;
            <Link>로그인 하기</Link>
          </p>
          <div className="img-container">
            <div className="img">
              <img
                className="rectangle"
                src="https://www.ikea.com/kr/ko/profile/c32d6464605fc9a389ed8cd8d11dc823.jpg"
                alt=""
              />
              <img
                className="rectangle"
                src="https://www.ikea.com/kr/ko/profile/521c6682e543900b1f2998b3280da6fe.jpg"
                alt=""
              />
              <img
                className="square"
                src="https://www.ikea.com/kr/ko/profile/84266cbf332efaa19108852836bf96ec.jpg"
                alt=""
              />
              <img
                className="rectangle"
                src="https://www.ikea.com/kr/ko/profile/fb2d702126a826270e926cbf8e2da6d4.jpg"
                alt=""
              />
            </div>
            <div className="img">
              <img
                className="square"
                src="https://www.ikea.com/kr/ko/profile/a2340c99bd92bd38aabbc91d1675a294.jpg"
                alt=""
              />
              <img
                className="square"
                src="https://www.ikea.com/kr/ko/profile/835b4ce9b142791a3b227a424b5bd234.jpg"
                alt=""
              />
              <img
                className="rectangle"
                src="https://www.ikea.com/kr/ko/profile/aec2f9f174a48998cd3d26812e866672.jpg"
                alt=""
              />
              <img
                className="square"
                src="https://www.ikea.com/kr/ko/profile/c2d46cda21a58f1c999e125060c25d53.jpg"
                alt=""
              />
              <img
                className="rectangle"
                src="https://www.ikea.com/kr/ko/profile/58fbe918aaddca62a0446e4dbd9260b0.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="form">
          <div>IKEA Family에 가입하시겠어요?</div>
          <div className="option-box">
            <input
              type="radio"
              name="family"
              checked={inputToggle.family}
              onChange={handleInputRadio}
            />
            <span></span>
            <div className="option-text">
              예, IKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다!&nbsp;
              <Link>IKEA Family 혜택</Link>
            </div>
          </div>
          <div className="option-box">
            <input
              type="radio"
              name="regular"
              checked={inputToggle.regular}
              onChange={handleInputRadio}
            />
            <span className="checked"></span>
            <div className="option-text">
              아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다.&nbsp;
              <Link>IKEA 온라인몰 혜택</Link>
            </div>
          </div>
        </div>
        <FormBox>
          <Input
            name="name"
            value={signupValue.name}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangeName}
            borderColor={borderColorChange("name")}
            borderbox={borderBoxStyle("name")}
          />
          <Label fontSize={fontSize.name}>이름</Label>
        </FormBox>
        <FormBox>
          <Input
            name="birth"
            value={signupValue.birth}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangeBirth}
            borderColor={borderColorChange("birth")}
            borderbox={borderBoxStyle("birth")}
          />
          <Label fontSize={fontSize.birth}>생일</Label>
        </FormBox>
        <FormBox>
          <Input
            name="phoneNumber"
            value={signupValue.phoneNumber}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangePhoneNumber}
            borderColor={borderColorChange("phoneNumber")}
            borderbox={borderBoxStyle("phoneNumber")}
          />
          <Label fontSize={fontSize.phoneNumber}>휴대폰</Label>
          <button onClick={sendNumber}>인증번호 발송</button>
        </FormBox>
        <FormBox checkNum showCheckNum={show}>
          <Input
            name="certifiNumber"
            value={signupValue.certifiNumber}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangeCertifiNumber}
            borderColor={borderColorChange("certifiNumber")}
            borderbox={borderBoxStyle("certifiNumber")}
          />
          <div className="success-msg">
            {result === "SUCCESS" ? "인증되었습니다." : ""}
          </div>
          <Label fontSize={fontSize.certifiNumber}>인증번호</Label>
          <span className="timer">00:{timer < 10 ? `0${timer}` : timer}</span>
          <button onClick={checkCertifiNum} className="check-btn">
            확인
          </button>
        </FormBox>
        <FormBox>
          <Input
            name="email"
            value={signupValue.email}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangeEmail}
            borderColor={borderColorChange("email")}
            borderbox={borderBoxStyle("email")}
          />
          <Label fontSize={fontSize.email}>이메일</Label>
        </FormBox>
        <FormBox password>
          <Input
            type="password"
            name="password"
            value={signupValue.password}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={onChangePassword}
            borderColor={borderColorChange("password")}
            borderbox={borderBoxStyle("password")}
          />
          <Label fontSize={fontSize.password}>비밀번호</Label>
        </FormBox>
        <CheckBox>
          <input type="checkbox" />
          <span className="check"></span>
          <div>
            마케팅 수신 동의를 통해 IKEA의 홈퍼니싱 아이디어와 신상품 소식,
            그리고 할인 혜택 정보를 받고 싶어요!
          </div>
        </CheckBox>
        <CheckBox secondCheck>
          <input type="checkbox" />
          <span className="check"></span>
          <div className="agreement">
            모든 약관에 동의합니다.
            <br />
            -&nbsp;<Link>이용약관</Link>
            <br />
            -&nbsp;<Link>개인정보 수집ㆍ이용</Link>
            <br />
            -&nbsp;<Link>개인정보 처리 위탁</Link>
            <br />
            -&nbsp;<Link>개인정보 국외이전</Link>
          </div>
        </CheckBox>
        <Button onClick={signupClick}>가입하기</Button>
      </Container>
    </Wrapper>
  );
}

export default withRouter(Signup);

const Wrapper = styled.div`
  display: flex;
  width: 78.55%;
  margin: 0 auto;
  padding: 96px 48px;
`;

const Container = styled.div`
  flex: 1;
  padding: 0 32px 0 16px;

  .left-container {
    width: 66.666%;

    .title {
      font-size: 36px;
      font-weight: 700;
      line-height: 48px;
      color: #111111;

      span {
        color: rgb(0, 88, 163);
      }
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }

    .img-container {
      display: flex;
      width: 100%;
      margin-top: 48px;

      .img {
        flex: 1;
        &:last-child {
          margin-left: 6.4px;
        }

        img {
          width: 100%;
          border-radius: 4px;
          margin-bottom: 6.4px;
          object-fit: cover;

          &.rectangle {
            height: 256px;
          }

          &.square {
            height: 192px;
          }
        }
      }
    }
  }

  .form {
    width: 100%;
    height: 144px;
    margin-bottom: 40px;
    padding-top: 20px;

    div:first-child {
      margin-bottom: 32px;
      font-family: "NotoSansBold";
      font-size: 14px;
      font-weight: 700;
      color: #111111;
    }

    .option-box {
      display: flex;
      align-items: center;
      position: relative;
      height: 24px;
      margin-bottom: 20px;

      .option-text {
        position: absolute;
        padding-left: 20px;
        left: 24px;
        font-size: 14px;
        line-height: 24px;

        a {
          text-decoration: underline;
        }
      }

      input {
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        display: inline-block;
        border: 0;
        opacity: 0;
        padding: 0;
        z-index: 1;
        cursor: pointer;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #929292;
        background: #fff;
        transition: all 0.2s ease-in-out;
      }

      input:checked ~ span {
        border-color: #111;
        background: #fff;
      }

      input:checked ~ span:after {
        background: #111;
        content: "";
        width: 18px;
        height: 18px;
        display: block;
        border-radius: 50%;
      }
    }
  }
`;

const Link = styled.a`
  text-decoration: underline;

  &:hover {
    color: #111111;
    text-decoration: underline solid #111111;
  }
`;

const FormBox = styled.div`
  position: relative;
  width: ${(props) => (props.password ? "65.2%" : "100%")};
  height: 50px;
  margin-bottom: 40px;
  transition: 0.2s;
  ${(props) =>
    props.checkNum &&
    `
        display : none;
    `}
  ${(props) =>
    props.showCheckNum &&
    `
        display : block;
    `}


    .timer {
    position: absolute;
    top: 28px;
    right: 38px;
    color: #e00751;
    font-weight: 700;
  }

  button {
    position: absolute;
    top: 26px;
    right: 0;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 700;
    font-family: "NotoSansBold";
    color: #0058a3;
  }

  .success-msg {
    position: absolute;
    top: 55px;
    color: #e00751;
    font-weight: 700;
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 24px 32px 1px 0;
  border: none;
  font-size: 16px;
  line-height: 24px;

  border-bottom: ${(props) => props.borderColor};
  box-shadow: ${(props) => props.borderbox};
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: ${(props) => (props.fontSize === "small" ? 0 : "26px")};
  font-size: ${(props) => (props.fontSize === "small" ? "12px" : "16px")};
  transition: 0.2s;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: ${(props) => (props.secondCheck ? "120px" : "48px")};
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 24px;

  input {
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 0;
    opacity: 0;
    padding: 0;
    z-index: 1;
    cursor: pointer;
  }

  .check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #929292;
    background: #fff;
    transition: all 0.2s ease-in-out;

    &:after {
      content: "";
      display: block;
      height: 0.625rem;
      width: 0.3125rem;
      transform: rotate(45deg);
      border: 2px solid #fff;
      border-left: 0;
      border-top: 0;
      margin-top: -0.1875rem;
      color: #fff;
    }
  }

  input:checked ~ .check {
    background: #0058a3;
    border-color: #0058a3;
  }

  div {
    padding-left: 20px;
    font-size: 14px;
    line-height: 24px;
  }

  .agreement {
    width: 26%;
    padding-left: 20px;
  }
`;

const Button = styled.button`
  width: 528px;
  height: 56px;
  margin-top: 16px;
  padding: 0 40px;
  border: none;
  border-radius: 40px;
  color: #ffffff;
  background: #111111;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background: #333333;
  }
`;
