import React from "react";
import styled from "styled-components";
import MainInfoContent from "./MainInfoContent";

class MainInfo extends React.Component {
  state = { mainInfo: [] };
  componentDidMount() {
    fetch("http://10.58.5.220:8000/product/importantinformation")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          mainInfo: res.data,
        })
      );
  }

  render() {
    const { mainInfo } = this.state;
    return (
      <>
        <Title>
          <p className="title">IKEA 중요 정보</p>
        </Title>
        <Flex>
          {mainInfo.map((MainInfo, idx) => (
            <MainInfoContent key={idx} MainInfoData={MainInfo} />
          ))}
        </Flex>
      </>
    );
  }
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

const Title = styled.div`
  margin-top: 65px;
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: bold;
`;

export default MainInfo;
