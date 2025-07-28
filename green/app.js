const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from GREEN version!');
});

app.listen(port, () => {
  console.log(`Green app listening on port ${port}`);
});
