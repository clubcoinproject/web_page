import styled from "styled-components";

function DetailFinal(props) {
  const listData = props.data;
  const chartData = listData.slice(0, 7);
  const name = props.name;
  const symbol = props.symbol;

  return (
    <>
      <div>{name + " / " + symbol}</div>
      <div>
        {chartData.map((data, idx) => (
          <ul key={idx}>
            <li>{data.date}</li>
            <li>{data.price}</li>
          </ul>
        ))}
      </div>
      <br />
      <div>
        {listData.map((data, idx) => (
          <ul key={idx}>
            <li>{data.date}</li>
            <li>{data.price}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default DetailFinal;
