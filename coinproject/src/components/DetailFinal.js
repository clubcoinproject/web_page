import styled from "styled-components";

function ListFinal(props) {
  const dataList = props.data;
  const title = props.name;

  return (
    <div>
      <div>{title}</div>
      {dataList.map((data, idx) => (
        <ul key={idx}>
          <li>{data.date}</li>
          <li>{data.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListFinal;
