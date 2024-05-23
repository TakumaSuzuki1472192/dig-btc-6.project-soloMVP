import "./AddItemForm.css";

function AddItemForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    // const formData = new FormData();
  };

  return (
    <>
      <form
        action="http://localhost:3000/post"
        method="POST"
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => console.log(e.currentTarget.files[0])}
        />
        <button type="submit">送信</button>
      </form>
    </>
  );
}
export default AddItemForm;
