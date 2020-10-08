import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FurnishingImgForm from "./FurnishingImgForm";
import { API_URL } from "../../config";

function ImgContainer(props) {
  const [furnishingData, setFurnishingData] = useState([]);
  const buttonClick = props;

  useEffect(() => {
    fetch(API_URL + "/product/homefurnishing/")
      .then((res) => res.json())
      .then((res) => {
        setFurnishingData([res.FurnishingData]);
      });
  }, []);

  useEffect(() => {
    fetch(API_URL + `/product/homefurnishing/?page=${buttonClick}`)
      .then((res) => res.json())
      .then((res) => {
        setFurnishingData([res.FurnishingData]);
      });
  }, [buttonClick]);

  return (
    <Wrapper>
      <div className="img-form">
        {furnishingData &&
          furnishingData.map((furnishing, idx) => (
            <FurnishingImgForm key={idx} furnishingInfo={furnishing} />
          ))}
      </div>
    </Wrapper>
  );
}

export default ImgContainer;

const Wrapper = styled.div`
  margin: 10px 0 0 0;

  .img-form {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: 160px;
    grid-gap: 1.25rem;
  }
`;
