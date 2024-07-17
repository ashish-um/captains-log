import Image from "next/image";

export default function Card({ data }) {
  return (
    <div className="group flex flex-col relative">
      <Image
        src={data.Poster}
        alt="poster"
        className="w-full h-full object-cover"
        width={500}
        height={675}
      />

      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <span
          className={`uppercase ${
            data.Type === "movie" ? "bg-blue-700" : "bg-blue-400"
          } px-2 py-1 rounded-md shadow-sm shadow-black`}
        >
          {data.Type}
        </span>
        {data.imdbRating !== "N/A" && (
          <span
            className={`${
              Number(data.imdbRating) > 7 ? "bg-green-500" : "bg-red-700"
            } px-2 py-1 rounded-md shadow-sm shadow-black`}
          >
            {data.imdbRating}
            <span className="material-symbols-rounded text-base pl-2">
              {Number(data.imdbRating) > 7 ? "trending_up" : "trending_down"}
            </span>
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold pr-4 inline lg:hidden">{data.Title}</h3>
      <div className="opacity-0 inset-0 absolute lg:group-hover:opacity-100 select-none transition-all flex justify-center text-center items-center before:content-[''] before:bg-black before:block before:absolute before:inset-0 before:opacity-70 ">
        <div className="relative px-3">
          <h3 className="text-lg font-bold">{data.Title}</h3>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
}
