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

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/api/uploads", express.static(path.join(__dirname, "uploads"))); //画像置き場

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`,{__dirname});
});

// 画像ファイルのアップロード設定
// https://viblo.asia/p/nodejs-express%E3%81%A7%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E3%82%92%E5%AE%89%E5%85%A8%E3%81%AB%E8%A1%8C%E3%81%86%E6%96%B9%E6%B3%95%E8%A9%B3%E7%B4%B0%E3%81%A7%E8%A6%96%E8%A6%9A%E7%9A%84%E3%81%AA%E3%82%AC%E3%82%A4%E3%83%89-Yym40zPWL91
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log({__dirname},{__filename});
    const uploadPath = path.join(__dirname, "./uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
//

app.get("/api/items", itemsController.index);
app.post("/api/items",upload.single("file"), itemsController.postItem); 
//upload.singleでサーバーへの保存とreq.fileに情報追加しpostItem起動
app.delete("/api/items/:id", itemsController.deleteItem); 

