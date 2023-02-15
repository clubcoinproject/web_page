import styled from "styled-components";

function TitleLi(props) {
  const data = props.data;

  return <StyledLi>{data}</StyledLi>;
}

const StyledLi = styled.li`
float: left;
margin-right: 50px;
`;

export default TitleLi;
