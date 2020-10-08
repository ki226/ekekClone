import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingPage>
      <img
        src="https://order.ikea.com/kr/ko/checkout/static/media/loading-animation.cfc0905d.gif"
        alt="loading"
      />
    </LoadingPage>
  );
}

export default Loading;

const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
