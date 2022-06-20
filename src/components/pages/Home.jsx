import React from "react";
import { Link } from "react-router-dom";
import HeaderComponents from "../organisms/HeaderComponents";

const Home = () => {
  return (
    <div className="App">
      <HeaderComponents />
      <h1 style={{ paddingTop: "70px" }}>映画検索アプリ</h1>
      <p>好きなワードで検索ボタンをPUSH！</p>
      <Link to="/favorites">お気に入り</Link>
    </div>
  );
};

export default Home;
