"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import SearchResults from "./SearchResults";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 400);
  const [resultLoading, setResultsLoading] = useState(false);
  const searchRef = useRef(null);
  useOutsideAlerter(searchRef, setResults);
  const OMDB_API = "98d002bf";

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setResults([]);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const fetchResults = useCallback(async (searchQuery) => {
    if (searchQuery) {
      try {
        setResultsLoading(true);
        setResults([]);
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchQuery}&apikey=${OMDB_API}`
        );
        const searchData = await response.json();
        if (!searchData.Response !== "False") {
          console.log(searchData.Search);
          setResultsLoading(false);
          setResults(searchData.Search);
        }
      } catch (error) {
        setResultsLoading(false);
        console.error("Error fetching search results", error);
      }
    } else {
      setResults([]);
      setResultsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery, fetchResults]);

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
      <div className="relative ml-4 sm:ml-52 lg:ml-96 flex-1">
        <div className="flex">
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={query}
            className="bg-slate-600 hover:bg-slate-700 transition-all w-full px-3 py-2 rounded-l-md"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            // type="submit"
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
        </div>
        {resultLoading && (
          <div className="w-full absolute bg-slate-700 z-10 rounded-b-md p-2">
            <h1>Loading...</h1>
          </div>
        )}
        {results?.length ? (
          <div
            ref={searchRef}
            className="w-full absolute bg-slate-700 z-10 rounded-b-md p-2"
          >
            {results?.map((item) => {
              return (
                <SearchResults
                  key={item.imdbID}
                  data={item}
                  resetResults={setResults}
                />
              );
            })}
            {/* {JSON.stringify(results)} */}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
