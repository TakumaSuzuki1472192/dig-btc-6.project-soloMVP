import Item from "./Item";

function View({ itemList, setRefresh }) {
  return (
    <>
      {itemList.map((item) => (
        <Item key={item.id} item={item} setRefresh={setRefresh} />
      ))}
    </>
  );
}

export default View;
