import CoinListPage from "./pages/CoinListPage";
import CoinDetailPage from "./pages/CoinDetailPage";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<CoinListPage />} />
        <Route path="/detail/:symbol/:name" element={<CoinDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
