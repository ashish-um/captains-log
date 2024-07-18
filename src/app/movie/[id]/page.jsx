const OMDB_API = process.env.OMDB_API;

export default async function page(movieID) {
  const id = movieID.params.id;
  //   const omdbRes = await fetch(
  //     `http://www.omdbapi.com/?apikey=${OMDB_API}&i=${id}`
  //   );
  //   if (!omdbRes.ok) {
  //     throw new Error(`Failed to fetch OMDb details for ID: ${id}`);
  //   }
  //   const omdbDetails = await omdbRes.json();

  // https://getsuperembed.link/?video_id=tt9663764

  const embedRes = await fetch(
    `https://getsuperembed.link/?video_id=${id}&player_secondary_color=10b981&player_primary_color=10b981&player_sources_toggle_type=2&player_loader=3&player_bg_color=1e1d28`
  );
  const embedURL = await embedRes.text();

  //   console.log(omdbDetails);
  return (
    <div>
      <iframe
        src={embedURL}
        allowFullScreen
        width={"100%"}
        style={{ height: "80svh" }}
      ></iframe>
    </div>
  );
}
