import styled from "styled-components";
import { Line } from "react-chartjs-2";

function DetailChart(props) {
  const date = [];
  const price = [];

  Object.values(props.data).map((value) => {
    date.push(value.date);
    price.push(value.price);
  });
  console.log(date, price);

  const data = {
    labels: date,
    datasets: [
      {
        type: "line",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: price,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          color: "#E3E3E3",
        },
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      tooltip: {
        titleFont: {
          size: 18,
        },
        bodyFont: {
          size: 16,
        },
      },
      legend: { display: false },
    },
    elements: {
      point: {
        backgroundColor: "rgb(53,  150, 216)",
        hoverBackgroundColor: "white",
        radius: 5,
        hoverRadius: 10,
      },
    },
  };

  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
}

const Container = styled.div`
  width: 1500px;
  margin: 30px;
`;

export default DetailChart;
