import styled from "styled-components";
import DetailLi from "../atoms/DetailLi";

function DetailList(props) {
  const data = props.data;
  const title = props.title;

  return (
    <StyledUl>
      <DetailLi data={title} />
      {data.map((dict, idx) => {
        return <DetailLi data={dict} idx={idx} key={idx} />;
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  width: 400px;
  float: right;
  margin-top: 50px;
  margin-right: 100px;
`;

export default DetailList;
