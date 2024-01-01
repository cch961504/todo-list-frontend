import React from "react";
import ItemList from "../components/ItemList";

const MainPage = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>TODO List</h1>
      <ItemList />
    </div>
  );
};

export default MainPage;
