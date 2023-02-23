/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";

function TitleText() {
  return <Text>암호화폐 실시간 TOP 30</Text>;
}
const Text = styled.h1`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin: 30px 0;
`;

export default TitleText;
