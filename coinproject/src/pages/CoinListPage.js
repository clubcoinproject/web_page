import ListFinal from "../components/ListFinal";
import { useEffect, useState } from "react";
import TitleText from "../atoms/TitleText";

const titleList = [
  "등수",
  "이름",
  "기호",
  "가격(KRW)",
  "시가총액",
  "변동(24h)",
];

const url = "http://3.35.133.132:5050/list/";

function CoinListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.body))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <TitleText />
      <ListFinal data={data} title={titleList} />
    </>
  );
}

export default CoinListPage;
