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
  width: 300px;
  float: right;
  margin-top: 100px;
  margin-right: 30px;
`;

export default DetailList;
