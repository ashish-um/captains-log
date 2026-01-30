import getIframe from "@/utils/iframe_url";
import Link from "next/link";
import Image from "next/image";

export default async function page(routes) {
  const id = routes.params.id;
  const episode = routes.params.episode;
  const season = routes.params.season;
  const embedURL = await getIframe(id, season, episode);

  return (
    <div className="flex items-center flex-col mt-10 justify-center gap-6">
      <div>
        <p className="text-xl">ID: {id}</p>
        <br />
        <p className="text-xl">Season: {season}</p>
        <br />
        <p className="text-xl">Episode: {episode}</p>
      </div>

      <Link
        className="flex items-center gap-2 mb-6 bg-emerald-500 px-4 py-3 rounded-md font-bold hover:bg-emerald-600"
        href={embedURL}
        target="_blank"
      >
        <p className="pt-0.5 text-2xl">Watch</p>
        <Image
          width={40}
          height={40}
          alt="trending status"
          src={"/link.svg"}
        />
      </Link>
    </div>
  );
}
