import { useParams } from "react-router-dom";

function CoinDetailPage() {
  const params = useParams();

  return <div>{params.name}</div>;
}

export default CoinDetailPage;
