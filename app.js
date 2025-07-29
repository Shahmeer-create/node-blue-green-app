const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from BLUE version!',
    version: '1.0.0',
    color: 'blue',
    region: 'ap-south-1',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', version: 'blue' });
});

app.listen(port, () => {
  console.log(`Blue app listening on port ${port}`);
});
