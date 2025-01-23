import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import ViteExpress from 'vite-express';

dotenv.config();

const app = express();

// Enable CORS for all origins, fix later
app.use(cors());

const API_KEY = process.env.IFPA_API_KEY;
const BASE_URL = 'https://api.ifpapinball.com/series/NACS/standings';

const fetchStandingsByRegion = async (year, regionCode) => {
  if (!API_KEY) {
    throw new Error('Missing API Key');
  }

  const url = `${BASE_URL}?year=${year}&region_code=${regionCode}`;
  const response = await fetch(url, {
    headers: { 'X-API-Key': API_KEY },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch standings: ${response.status}`);
  }

  const data = await response.json();
  return data.standings || [];
};

app.get('/standings', async (req, res) => {
  const { year, regionCode } = req.query;

  if (!year) {
    return res.status(400).json({ error: "Missing 'year' parameter" });
  }

  if (!regionCode) {
    return res.status(400).json({ error: "Missing 'regionCode' parameter" });
  }

  try {
    const standings = await fetchStandingsByRegion(Number(year), regionCode);
    res.json(standings);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...'),
);
