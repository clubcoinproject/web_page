import styled from "styled-components";
import ListLi from "../atoms/ListLi";

function ListUl(props) {
  const dataList = Object.values(props.data);

  return (
    <StyledUl>
      {dataList.map((data, idx) => (
        <ListLi
          key={idx}
          kind={Object.keys(props.data)[idx]}
          data={data}
          symbol={dataList[2]}
        />
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  text-align: center;
  width: 70%;
  margin: 0 auto;
`;

export default ListUl;
