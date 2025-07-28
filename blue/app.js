const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from BLUE version!');
});

app.listen(port, () => {
  console.log(`Blue app listening on port ${port}`);
});
