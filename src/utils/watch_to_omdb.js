const WATCH_API = process.env.WATCHMODE_API;
const OMDB_API = process.env.OMDB_API;

export default async function WatchToOmdb() {
  return new Promise(async (resolve, _) => {
    const res = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${WATCH_API}&source=all&sort_by=popularity_desc&page=1&limit=20`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch trending data");
    }

    const results = await res.json();

    const data = await Promise.all(
      results.titles.map(async (element) => {
        const id = element.imdb_id;
        const omdbRes = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDB_API}&i=${id}`
        );
        if (!omdbRes.ok) {
          throw new Error(`Failed to fetch OMDb details for ID: ${id}`);
        }
        const omdbDetails = await omdbRes.json();
        return omdbDetails;
      })
    );

    resolve(data);
  });
}
