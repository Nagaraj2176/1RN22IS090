const express=require('express');
const app = express();
const cors = require('cors');
const connectToDatabase = require('./config/connecttodb');
const router = require('./routes/router');

require('dotenv').config();
app.use(express.json());
app.use(cors());

connectToDatabase();



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/test', (req, res) => {
    res.send('Test route working');
});
app.use("/api", router);


app.get('/', (req, res) => {
    res.send('Home sweet home');
});

