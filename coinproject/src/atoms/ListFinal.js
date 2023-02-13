import ListUl from "./ListUl";
import TitleUl from "./TitleUl";
import styled from "styled-components";

function ListFinal(props) {
  const titleList = props.title;
  const dataList = props.data;

  return (
    <StyledDiv>
      <TitleUl data={titleList} />
      {dataList.map((data, idx) => (
        <ListUl key={idx} data={data} />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;

export default ListFinal;