import React from "react";
import HeaderComponents from "../organisms/HeaderComponents";

const Home = () => {
  return (
    <div className="App">
      <HeaderComponents />
      <h1 style={{ paddingTop: "70px" }}>映画検索アプリ</h1>
      <p>好きなワードで検索ボタンをPUSH！</p>
    </div>
  );
};

export default Home;
