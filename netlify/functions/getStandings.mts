import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const year = url.searchParams.get("year");
  const regionCode = url.searchParams.get("regionCode");

  if (!year) {
    return new Response(JSON.stringify({ error: "Missing 'year' parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!regionCode) {
    return new Response(
      JSON.stringify({ error: "Missing 'regionCode' parameter" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const API_KEY = Netlify.env.get("IFPA_API_KEY");
  const BASE_URL = "https://api.ifpapinball.com/series/NACS/standings";

  if (!API_KEY) {
    console.error("Missing API Key");
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const apiUrl = `${BASE_URL}?year=${year}&region_code=${regionCode}`;
    const response = await fetch(apiUrl, {
      headers: { "X-API-Key": API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch standings: ${response.status}`);
    }

    const data = await response.json();
    const standings = data.standings || [];

    return new Response(JSON.stringify(standings), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching standings:", error);
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${error.message}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
