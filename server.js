const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Handling request and response methods
  res.status(200).json({ message: 'Hello, World!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
