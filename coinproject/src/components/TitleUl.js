import React from "react";
import styled from "styled-components";
import TitleLi from "../atoms/TitleLi";
import Bar from "../molecules/Bar";
function TitleUl(props) {
  const dataList = props.data;

  return (
    <>
      <StyledUl>
        {dataList.map((data, idx) => (
          <TitleLi data={data} key={idx} />
        ))}
      </StyledUl>
      <Bar />
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  width: 70%;
  color: #0eae80;
  font-weight: bold;
  margin: 0 auto;
`;

export default TitleUl;
