const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;

const internData = {
  name: "John Doe",
  referralCode: "johndoe2025",
  totalDonations: 12500,
  rewards: ["Free T-shirt", "Intern Badge", "Amazon Voucher"]
};


app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Alice", donations: 20000 },
    { name: "Bob", donations: 15000 },
    { name: "John Doe", donations: 12500 },
    {name:"Basil",donations:12000}
  ]);
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
