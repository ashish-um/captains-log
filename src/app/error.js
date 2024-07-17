"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function error({ error, reset }) {
  return (
    <div className="text-center mt-32 mx-10">
      <Image
        className="mx-auto"
        width={100}
        height={100}
        alt="error img"
        src="https://media.tenor.com/a7qa0Uk3F30AAAAi/peach-goma-peach-and-goma.gif"
      />
      <h2 className="text-xl font-bold text-red-400 my-4">
        Something went wrong. Please try again later.
      </h2>
      <button
        onClick={() => reset()}
        className="bg-emerald-500 px-2 py-1 rounded-md font-bold hover:bg-emerald-600 transition-all duration-100"
      >
        Try Again
      </button>
    </div>
  );
}
