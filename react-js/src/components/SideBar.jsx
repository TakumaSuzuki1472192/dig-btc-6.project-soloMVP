import "./SideBar.css";
import SearchItems from "./SearchItems";
import AddItemForm from "./AddItemForm";

function SideBar({ setRefresh, setSearchRoom }) {
  return (
    <>
      <div id="upsideSearch">
        <SearchItems setSearchRoom={setSearchRoom} setRefresh={setRefresh}/>
      </div>
      <div id="downsideAddItem">
        <AddItemForm setRefresh={setRefresh} />
      </div>
    </>
  );
}

export default SideBar;
