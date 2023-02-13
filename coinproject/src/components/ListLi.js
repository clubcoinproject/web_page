import styled from "styled-components";

function ListLi(props) {
  const data = props.data;

  return <StyledLi>{data}</StyledLi>;
}

const StyledLi = styled.li``;

export default ListLi;
