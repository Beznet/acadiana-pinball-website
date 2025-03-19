import { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  const url = new URL(req.url);
  const regionCode = url.searchParams.get("regionCode");

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
  const BASE_URL = "https://api.ifpapinball.com/tournament/search";

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

  const todaysDate = new Date();
  const sixMonthsOut = new Date();

  sixMonthsOut.setMonth(sixMonthsOut.getMonth() + 6);

  try {
    const apiUrl = `${BASE_URL}?stateprov=${regionCode}start_date=${todaysDate.toISOString().split("T")[0]}&end_date=${sixMonthsOut.toISOString().split("T")[0]}&total=20`;
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
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${errorMessage}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
