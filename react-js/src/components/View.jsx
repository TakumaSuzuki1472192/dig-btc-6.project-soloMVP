import Item from "./Item";

function View({ itemList }) {
  return (
    <>
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

export default View;
