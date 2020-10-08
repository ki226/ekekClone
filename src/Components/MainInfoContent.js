import React from "react";
import styled from "styled-components";

class MainInfoContent extends React.Component {
  render() {
    return (
      <Container>
        <img className="" src={this.props.MainInfoData.image_url} alt="logo" />
        <Button>
          <span>{this.props.MainInfoData.button_name}</span>
        </Button>
      </Container>
    );
  }
}
const Container = styled.div`
  width: 500px;
  height: 455px;
  margin: 20px;
  img {
    width: 100%;
    height: 374px;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 70px;
  padding: 0 20px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  background: #f5f5f5;
  color: #111;
  border-radius: 40px;
  span {
    font-size: 12px;
    color: #111;
  }
`;
export default MainInfoContent;
