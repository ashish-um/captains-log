import Link from "next/link";
import Image from "next/image";

export default function SearchResults({ data, resetResults }) {
  return (
    <Link
      onClick={() => resetResults([])}
      href={`/${data.Type}/${data.imdbID}`}
      className="flex p-2 [&:not(:last-child)]:border-b-2 border-white border-opacity-10 hover:bg-slate-600"
    >
      <Image
        src={data.Poster === "N/A" ? "" : data.Poster}
        alt="poster"
        width={20}
        height={20}
      />
      <h2
        style={{ scrollbarWidth: "thin" }}
        className="overflow-x-scroll sm:overflow-hidden flex gap-1 text-nowrap mx-3 w-full text-sm sm:text-xl content-center"
      >
        {data.Title}
        <p className="opacity-50">({data.Year})</p>
      </h2>
      <span
        className={`uppercase ${
          data.Type === "movie" ? "bg-blue-800" : "bg-purple-700"
        } px-2 py-1 rounded-md shadow-sm shadow-black text-xs sm:text-lg font-semibold border-2`}
      >
        {data.Type}
      </span>
    </Link>
  );
}
