"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SeasonDropdown({ seasons, imdbID, current_season }) {
  const router = useRouter();
  const [selectedSeason, setSelectedSeason] = useState(current_season);

  function handleSelect(event) {
    const selectedSeason = event.target.value;
    console.log(selectedSeason);

    router.push(`/series/${imdbID}/${selectedSeason}/1`);
    setSelectedSeason(selectedSeason);
  }

  return (
    <select
      onChange={handleSelect}
      className="text-black w-full p-1 rounded-md"
      name="seasons"
      value={selectedSeason}
    >
      {Array.from({ length: seasons }, (_, index) => (
        <option key={index} value={index + 1}>
          Season {index + 1}
        </option>
      ))}
    </select>
  );
}
