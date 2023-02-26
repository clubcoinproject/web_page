import DetailFinal from "../components/DetailFinal";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CoinDetailPage() {
  const params = useParams();
  const name = params.name;
  const symbol = params.symbol;
  const url = "http://3.35.133.132:5050/detail?symbol=";

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(url);

    const requestOptions = {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    };
    fetch(url + symbol, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.body))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <DetailFinal data={data} name={name} symbol={symbol} />
    </>
  );
}

export default CoinDetailPage;
