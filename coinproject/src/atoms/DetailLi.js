import styled from "styled-components";

function DetailLi(props) {
  const data = props.data;
  const idx = props.idx;

  return idx % 2 === 0 ? (
    <StyledLi1>
      <div>{data.date}</div>
      <div>{data.price}</div>
    </StyledLi1>
  ) : (
    <StyledLi2>
      <div>{data.date}</div>
      <div>{data.price}</div>
    </StyledLi2>
  );
}

const StyledLi1 = styled.li`
  display: flex;
  width: 400px;
  justify-content: space-around;
  height: 55px;
  line-height: 55px;
  font-size: 23px;
  background-color: grey;
`;

const StyledLi2 = styled.li`
  display: flex;
  width: 400px;
  justify-content: space-around;
  height: 55px;
  line-height: 55px;
  font-size: 23px;
`;

export default DetailLi;
