import React from "react";
import styled from "styled-components";
import TitleLi from "../components/TitleLi";

function TitleUl(props) {
  const dataList = props.data;

  return (
    <StyledUl>
      {dataList.map((data, idx) => (
        <TitleLi data={data} key={idx} />
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul``;

export default TitleUl;
