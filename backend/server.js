// import express from 'express';
// import path from "path";
// const app = express();
// const port = 9000;
// const __dirname = path.resolve();
// app.use(express.urlencoded({extended : false}));
// app.use(express.static(path.join(__dirname, "dist")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "dist", "index.html"));
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// });
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(cors());

// Serve notifications JSON
app.get('/api/notifications', (req, res) => {
  fs.readFile('./data/notification.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to load data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
