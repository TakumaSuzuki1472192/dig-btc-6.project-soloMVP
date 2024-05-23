// library
const path = require("path");
const express = require("express");
const cors = require("cors"); // corsのインポート
const multer = require('multer');


// user
const PORT = process.env.PORT || 3000;
const app = express();
const itemsController = require("./fetch-items/items.controller");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //画像置き場

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 画像ファイルのアップロード設定
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log({__dirname},{__filename});
    const uploadPath = path.resolve(__dirname, "./uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
console.log(upload.single)
//

app.get("/items", itemsController.index);
app.post("/post",upload.single("file"), itemsController.postForm);
