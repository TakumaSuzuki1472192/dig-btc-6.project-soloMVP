import "./Item.css";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

function Item({ item, setRefresh }) {
  const {
    id,
    name,
    room,
    maker,
    // add_text: addText,
    // fix_text: null,
    // image: item.image ?? "",
    created_at,
    // fixed_at: null,
  } = item;

  function handleOnClick(e) {
    e.preventDefault();
    axios
      .delete(`/api/items/${e.currentTarget.dataset.id}`)
      .then((res) => {
        console.log("delete:", res);
        setRefresh((prev) => !prev);
      })
      .catch((e) => console.error("deleteError:", e));
  }

  return (
    <>
      <div id="itemContainer">
        <div>
          <img id="itemImage" src={item.image} alt="image" />
        </div>
        <div>
          <p>投稿者：{name}</p>
          <p>日付：{new Date(created_at).toLocaleDateString("en-us")}</p>
          <p>置いてある部屋：{room}</p>
          <p>メーカー：{maker}</p>
          <p id="addText">{item.add_text}</p>
          <a href="a" data-id={id} onClick={handleOnClick}>
            <FaRegTrashAlt />
          </a>
        </div>
      </div>
    </>
  );
}

export default Item;
