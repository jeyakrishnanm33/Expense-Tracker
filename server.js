const express = require('express');
const connectdb = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors');
const app = express();

connectdb();
app.use(cors());   
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api', expenseRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
