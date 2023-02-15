import styled from "styled-components";

function ListLi(props) {
  const data = props.data;

  return <StyledLi>{data}</StyledLi>;
}

const StyledLi = styled.li`
display: flex;
justify-content: space-around;
width: 1000px;
margin: 3px ;
`;

export default ListLi;
