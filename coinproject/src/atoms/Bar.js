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
position: absolute;
background-color: white;
width: 95%;
text-align: center;
height: 3px;
top: 13rem,

`;

export default Bar;
