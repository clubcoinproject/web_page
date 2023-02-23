import styled from "styled-components";

function TitleLi(props) {
  const data = props.data;

  return <StyledLi>{data}</StyledLi>;
}

const StyledLi = styled.li`
  margin-bottom: 10px;
  text-align: center;
  width: 300px;
  font-size: 20px;
  position: relative;
`;

export default TitleLi;
