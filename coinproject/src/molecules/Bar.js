import React from "react";
import styled from "styled-components";

function Bar() {
  return (
    <>
      <BarLabel></BarLabel>
    </>
  );
}
const BarLabel = styled.div`
  position: relative;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  height: 3px;
`;

export default Bar;
