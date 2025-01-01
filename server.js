const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/sections', (req, res) => {
    res.json({
        sections: [
            { name: "Tourist Attractions", path: "/attractions" },
            { name: "Food and Beverages", path: "/food" },
            { name: "Hotels", path: "/hotels" },
            { name: "Culture and Heritage", path: "/culture" },
        ],
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
