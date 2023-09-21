const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000; 

app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('music'), (req, res) => {
  // Handle the uploaded file here
  // You can save it to a database, process it, etc.
  res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
