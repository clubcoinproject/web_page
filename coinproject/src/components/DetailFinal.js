import styled from "styled-components";
import DetailChart from "../atoms/DetailChart";
import DetailTitle from "../atoms/DetailTitle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import DetailList from "../molecules/DetailList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function DetailFinal(props) {
  const chartData = props.data;
  const listData = chartData.slice(0, 15).reverse();
  const name = props.name;
  const symbol = props.symbol;

  return (
    <>
      <StyledDiv>
        <DetailTitle name={name} symbol={symbol} />
        <DetailChart data={chartData.reverse()} />
      </StyledDiv>
      <DetailList data={listData} />
    </>
  );
}

const StyledDiv = styled.div`
  display: box;
  float: left;
`;

export default DetailFinal;
