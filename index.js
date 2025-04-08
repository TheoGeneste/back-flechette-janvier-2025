const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const playersRoutes = require('./routes/playersRoutes');
const playRoutes = require('./routes/playRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/players', playersRoutes);
app.use('/api/play', playRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${process.env.PORT}`);
});