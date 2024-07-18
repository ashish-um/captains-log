import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between my-4 max-w-screen-2xl mx-auto px-3">
      <Link
        className="flex items-center justify-center gap-2 bg-emerald-500 px-3 py-2 rounded-md font-bold hover:bg-emerald-600"
        href={"/"}
      >
        <Image
          className="w-6 h-6"
          width={23}
          height={23}
          alt="trending status"
          src={"/home.svg"}
        />

        <p className="hidden sm:inline pt-0.5">Home</p>
      </Link>
      <form className="flex flex-1 ml-4 sm:ml-52 lg:ml-96">
        <input
          type="text"
          name="search"
          className="bg-slate-600 hover:bg-slate-700 transition-all w-full px-3 py-2 rounded-l-md"
        />
        <button
          type="submit"
          className="flex gap-1 bg-emerald-500 font-bold px-3 py-2 rounded-r-md hover:cursor-pointer hover:bg-emerald-600"
        >
          <span className="w-6 h-6">
            <Image
              width={23}
              height={23}
              alt="trending status"
              src={"/search.svg"}
            />
          </span>
          <p className="hidden sm:inline">Search</p>
        </button>
      </form>
    </div>
  );
}
