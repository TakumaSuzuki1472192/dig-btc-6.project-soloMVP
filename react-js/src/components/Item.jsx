import "./Item.css";

function Item({ item }) {
  return (
    <>
      <div id="itemContainer">
        <div>
          <span>{item.room}</span>
        </div>
        <img src={item.image} alt="image" />
      </div>
    </>
  );
}

export default Item;
