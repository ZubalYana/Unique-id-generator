const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const { v4: uuidv4 } = require('uuid');
uuidv4();
app.use(cors());
app.use(express.json());

app.get('/generateID', (req, res) => {
    const id = uuidv4();
    res.json({ id });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

