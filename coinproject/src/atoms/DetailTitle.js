import React from "react";
import styled from "styled-components";

function DetailTitle(props) {
  return (
    <StyledDiv>
      {props.name}
      <StyledSmall>{props.symbol}</StyledSmall>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 60px;
  margin: 30px;
`;

const StyledSmall = styled.div`
  font-size: 30px;
  display: inline-block;
  margin-left: 10px;
  color: rgb(230, 230, 230);
`;

export default DetailTitle;
