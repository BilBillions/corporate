import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock tracking data
const trackingData = {
  "DOL123456": {
    status: "In Transit",
    location: "Istanbul, TR",
    estimatedDelivery: "2025-07-30"
  },
  "DOL987654": {
    status: "Delivered",
    location: "New York, USA",
    estimatedDelivery: "2025-07-20"
  },
  "DOL555777": {
    status: "Out for Delivery",
    location: "Berlin, DE",
    estimatedDelivery: "2025-07-26"
  }
};

// API to get tracking info
app.get('/api/track/:trackingNumber', (req, res) => {
  const trackingNumber = req.params.trackingNumber.toUpperCase();
  const data = trackingData[trackingNumber];

  if (data) {
    res.json({ success: true, data });
  } else {
    res.status(404).json({ success: false, message: 'Tracking number not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚚 Tracking API running at http://localhost:${PORT}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
