import "./AddItemForm.css";
import { useState, useRef } from "react";
import axios from "axios";

function AddItemForm({ setRefresh }) {
  const [selectedRoom, setSelectedRoom] = useState("リビング");
  const [addText, setAddText] = useState("");
  const [image, setImage] = useState(null);
  const [maker, setMaker] = useState("");
  const user = 1; // 仮:1=TAKUMAログインさせてpropsで渡したい
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    //送信データ作成
    const formData = new FormData();
    formData.append("room", selectedRoom);
    formData.append("maker", maker);
    formData.append("file", image);
    formData.append("addText", addText);
    formData.append("user", user);

    axios
      .post("/api/items", formData)
      .then(() => {
        if (inputRef.current) inputRef.current.value = "";
        setAddText("");
        setRefresh((prev) => !prev);
      })
      .catch((e) => console.error(e));
  };
  const handleSelectChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <>
      <h3>- Add Item -</h3>
      <div id="formArea">
        <form onSubmit={handleSubmit}>
          <div>
            <span>Room : </span>
            <select onChange={handleSelectChange}>
              <option value="リビング">リビング</option>
              <option value="ダイニング">ダイニング</option>
              <option value="和室">和室</option>
              <option value="寝室">寝室</option>
            </select>
          </div>
          <div>
            <span>Maker : </span>
            <input
              type="text"
              onChange={(e) => setMaker(e.currentTarget.value)}
              value={maker}
            />
          </div>
          <div>
            <span>Comment : </span>
          </div>
          <textarea
            id="addItemTextArea"
            value={addText}
            onChange={(e) => setAddText(e.currentTarget.value)}
          ></textarea>
          <div>
            <input
              id="image"
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={(e) =>
                e.target.files ? setImage(e.target.files[0]) : null
              }
            />
            <input
              id="submit"
              type="image"
              src="./public/iconImage/パトランプ黄.jpeg"
              alt="送信"
            />
          </div>
        </form>
      </div>
    </>
  );
}
export default AddItemForm;
