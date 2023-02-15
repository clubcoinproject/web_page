/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";

function TitleText() {
  return (
    <Text>
      <h1>암호화폐 실시간 TOP 30</h1>
    </Text>
  );
}
const Text = styled.h1`
font-weight: bold;
font-size: 30px;
text-align: center;

`;

export default TitleText;
