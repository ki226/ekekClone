import React from "react";
import styled from "styled-components";

class MonthlyContent extends React.Component {
  render() {
    return (
      <MonthlyContainer>
        <img className="month_image" src={this.props.MonthlyData.images} />
        <ul>
          <li className="month_title">{this.props.MonthlyData.name}</li>
          <li className="month_product_info">
            {this.props.MonthlyData.category},{this.props.MonthlyData.size}
          </li>
          <li className="month_price_dollar">
            ￦{this.props.MonthlyData.price}
          </li>
        </ul>
      </MonthlyContainer>
    );
  }
}
// const MonthlyContanier = styled.div`
//   display: flex;
// `;
const MonthlyContainer = styled.div`
  width: 367px;
  height: 605px;
  margin: 20px;
  padding-top: 40px;
  .month_image {
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-top: 5px;
    }
  }
  .month_title {
    font-size: 15px;
    font-weight: 700;
    line-height: 21px;
  }
  span {
    font-size: 15px;
    line-height: 21px;
    color: #484848;
  }
  .month_price_dollar {
    font-size: 11px;
    font-weight: 700;
    color: black;
  }
  .month_price {
    font-size: 22px;
    font-weight: 700;
    color: black;
  }
`;
export default MonthlyContent;
