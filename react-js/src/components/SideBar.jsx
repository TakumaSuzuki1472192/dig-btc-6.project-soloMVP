import "./SideBar.css";
import SearchItems from "./SearchItems";
import AddItemForm from "./AddItemForm";

function SideBar() {
  return (
    <>
      <div id="upsideSearch">
        <SearchItems />
      </div>
      <div id="downsideAddItem">
        <AddItemForm />
      </div>
    </>
  );
}

export default SideBar;
