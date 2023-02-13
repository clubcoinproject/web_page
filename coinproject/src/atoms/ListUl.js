import styled from "styled-components";
import ListLi from "../components/ListLi";

function ListUl(props) {
  const dataList = Object.values(props.data);
  console.log(dataList);

  return (
    <StyledUl>
      {dataList.map((data, idx) => (
        <ListLi key={idx} data={data} />
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul``;

export default ListUl;
