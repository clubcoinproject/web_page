import React from "react";
import styled from "styled-components";
import TitleLi from "../components/TitleLi";
import Bar from "../atoms/Bar";
function TitleUl(props) {
  const dataList = props.data;

  return (
    <>
      <Bar />
      <StyledUl>
        {dataList.map((data, idx) => (
          <TitleLi data={data} key={idx} />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: inline-block;
  font-size: 20px;
  margin: 3px;
  text-align: center;
  width: 70%;
  color: #0eae80;
  font-weight: bold;
`;

export default TitleUl;
