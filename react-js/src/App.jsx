import axios from "axios";

import { useEffect, useState } from "react";
import "./App.css";
import View from "./components/View";
import SideBar from "./components/SideBar";

function App() {
  const [itemList, setItemList] = useState([]);
  const [refresh, setRefresh] = useState([true]);

  useEffect(() => {
    axios.get("/api/items").then((res) => {
      setItemList(res.data);
    });
  }, [refresh]);

  console.log(itemList);

  return (
    <>
      <div>
        <div id="backImage"></div>
        <header className="globalNavigation">
          <div id="headerArea">
            <h1>My Home, Items</h1>
          </div>
        </header>
        <main>
          <div className="localNavigation">
            <SideBar setRefresh={setRefresh} />
          </div>
          <div className="content">
            <View itemList={itemList} setRefresh={setRefresh}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
