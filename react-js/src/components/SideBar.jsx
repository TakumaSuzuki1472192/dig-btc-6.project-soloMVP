import "./SideBar.css";
import SearchItems from "./SearchItems";
import AddItemForm from "./AddItemForm";

function SideBar({setRefresh}) {
  return (
    <>
      <div id="upsideSearch">
        <SearchItems />
      </div>
      <div id="downsideAddItem">
        <AddItemForm setRefresh={setRefresh}/>
      </div>
    </>
  );
}

export default SideBar;
