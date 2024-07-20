const OMDB_API = process.env.OMDB_API;

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("q");

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${OMDB_API}`
    );
    const searchData = await response.json();

    return Response.json(searchData);
  } catch {
    return Response.json({ Response: "False" });
  }
}
