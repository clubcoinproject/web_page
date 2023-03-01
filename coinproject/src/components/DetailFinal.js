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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, [
  Tooltip,
]);

function DetailFinal(props) {
  const listData = props.data;
  const chartData = listData.slice(0, 15).reverse();
  const name = props.name;
  const symbol = props.symbol;

  return (
    <>
      <DetailTitle name={name} symbol={symbol} />
      <DetailChart data={chartData} />
    </>
  );
}

export default DetailFinal;
