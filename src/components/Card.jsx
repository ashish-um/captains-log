import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <Link
      href={`/${data.Type}/${data.imdbID}`}
      className="group flex flex-col relative"
    >
      <img
        src={data.Poster}
        alt="poster"
        className="w-full h-full object-cover"
        width={300}
        height={400}
      />

      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <span
          className={`uppercase ${data.Type === "movie" ? "bg-blue-800" : "bg-purple-700"
            } px-2 py-1 rounded-md shadow-sm shadow-black text-xs sm:text-lg font-semibold border-2`}
        >
          {data.Type}
        </span>
        {data.imdbRating !== "N/A" && (
          <span
            className={`${Number(data.imdbRating) > 7 ? "bg-green-700" : "bg-red-700"
              } px-2 py-0.5 rounded-md shadow-sm shadow-black text-sm sm:text-lg flex items-center border-2 font-bold`}
          >
            {data.imdbRating}
            <Image
              width={20}
              height={20}
              className="ml-2"
              alt="trending status"
              src={
                Number(data.imdbRating) > 7
                  ? "/trending_up.svg"
                  : "/trending_down.svg"
              }
            />
          </span>
        )}
      </div>

      <h3
        className="text-lg font-bold inline lg:hidden absolute bottom-0 bg-slate-800 w-full p-1 text-nowrap overflow-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        {data.Title}
      </h3>
      <div className="opacity-0 inset-0 absolute lg:group-hover:opacity-100 transition-all pointer-events-none flex justify-center text-center items-center before:content-[''] before:bg-black before:block before:absolute before:inset-0 before:opacity-70 ">
        <div className="relative px-3">
          <h3 className="text-lg font-bold">{data.Title}</h3>
          <p>{data.Year}</p>
        </div>
      </div>
    </Link>
  );
}
