const express=require('express');
const cors = require('cors');
const connectToDatabase = require('./config/connecttodb');
const router = require('./routes/router');
const app = express();

require('dotenv').config();
app.use(express.json());
app.use(cors());

connectToDatabase();

app.use("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.send('Home sweet home');
});

