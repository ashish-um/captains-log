import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-4 my-4 max-w-5xl mx-auto">
      <Link
        className="flex gap-2 bg-emerald-500 px-2 py-1 rounded-md font-bold hover:bg-emerald-600"
        href={"/"}
      >
        <span className="material-symbols-rounded">home</span>
        <p className="hidden sm:inline">Home</p>
      </Link>
      <form className="flex flex-1 ml-4 sm:ml-52">
        <input
          type="text"
          name="search"
          className="bg-slate-600 hover:bg-slate-700 transition-all w-full px-2 py-1 rounded-l-md"
        />
        <button
          type="submit"
          className="flex gap-2 bg-emerald-500 font-bold px-2 py-1 rounded-r-md hover:cursor-pointer hover:bg-emerald-600"
        >
          <span className="material-symbols-rounded">search</span>
          <p className="hidden sm:inline">Search</p>
        </button>
      </form>
    </div>
  );
}
