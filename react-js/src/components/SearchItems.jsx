import { useState } from "react";
import "./SearchItems.css";

function SearchItems({ setSearchRoom , setRefresh }) {
  function handleOnChange(e) {
    setSearchRoom(e.target.value);
    setRefresh((prev) => !prev);
  }
  return (
    <>
      <h3>- Search Items -</h3>
      <div>
        <span>Room : </span>
        <select onChange={handleOnChange}>
          <option value="">すべて</option>
          <option value="リビング">リビング</option>
          <option value="ダイニング">ダイニング</option>
          <option value="和室">和室</option>
          <option value="寝室">寝室</option>
        </select>
      </div>
    </>
  );
}

export default SearchItems;
