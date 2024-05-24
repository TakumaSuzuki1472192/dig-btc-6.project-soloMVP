import axios from "axios";


import { useEffect, useState } from "react";
import "./App.css";
import View from "./components/View";
import SideBar from "./components/SideBar";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get("/api/items").then((res) => {
      setItemList(res.data);
    });
  }, []);

  console.log(itemList);

  return (
    <>
      <header className="globalNavigation">
        <p>グローバルナビゲーション</p>
      </header>
      <main>
        <div className="localNavigation">
          <SideBar/>
        </div>
        <div className="content">
          <View itemList={itemList} />
        </div>
      </main>
    </>
  );
}

export default App;
