// dol-backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock tracking data
const mockTrackingData = {
  "DOL123456": {
    status: "In Transit",
    location: "New York, NY",
    estimatedDelivery: "2025-08-02"
  },
  "DOL654321": {
    status: "Delivered",
    location: "Stockholm, Sweden",
    estimatedDelivery: "2025-07-25"
  }
};

// Tracking endpoint
app.get('/api/track/:id', (req, res) => {
  const trackingId = req.params.id;
  const data = mockTrackingData[trackingId];

  if (data) {
    res.json({ success: true, trackingId, ...data });
  } else {
    res.status(404).json({ success: false, message: "Tracking ID not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Dol Express backend running on http://localhost:${PORT}`);
});