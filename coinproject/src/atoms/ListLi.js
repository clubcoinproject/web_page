import { Link } from "react-router-dom";
import styled from "styled-components";

function ListLi(props) {
  const data = props;

  return (
    <>
      {data.kind === "name" ? (
        <StyledLink to={"/detail/" + data.symbol}>{props.data}</StyledLink>
      ) : (
        <StyledLi>{props.data}</StyledLi>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: white;
  text-decoration: none;
`;

const StyledLi = styled.li`
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
`;

export default ListLi;
