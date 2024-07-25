const OMDB_API = process.env.OMDB_API;

import Episode from "@/components/Episode";
import SeasonDropdown from "@/components/SeasonDropdown";
import Link from "next/link";

export default async function page(routes) {
  const id = routes.params.id;
  const episode = routes.params.episode;
  const season = routes.params.season;

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API}&i=${id}&Season=${season}`
  );

  if (!response.ok) {
    throw new Error("Fetch Failed");
  }
  const data = await response.json();
  console.log(data);

  return (
    <div
      style={{ maxHeight: "80svh", scrollbarWidth: "thin" }}
      className="bg-slate-600 h-full p-2 overflow-y-scroll rounded-md lg:w-80"
    >
      <SeasonDropdown
        seasons={Number(data.totalSeasons)}
        imdbID={id}
        current_season={season}
      />
      <div>
        {data.Episodes.map((item, index) => {
          return (
            <Link
              key={item.imdbID}
              href={`/series/${id}/${season}/${index + 1}`}
            >
              <Episode
                episode_no={index + 1}
                data={item}
                selected={index + 1 === Number(episode)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
