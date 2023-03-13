import styled from "styled-components";
import DetailLi from "../atoms/DetailLi";

function DetailList(props) {
  const data = props.data;

  return (
    <StyledUl>
      {data.map((dict, idx) => {
        return <DetailLi data={dict} idx={idx} key={idx} />;
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul``;

export default DetailList;
