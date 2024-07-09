// server.js
const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/generate', async (req, res) => {
  const data = req.body.data;

  try {
    const qrCode = await qr.toDataURL(data);
    res.json({ qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
