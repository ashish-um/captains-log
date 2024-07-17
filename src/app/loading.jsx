import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <Image
      width={100}
      height={100}
      src="spinner.svg"
      className="mx-auto mt-20"
      alt="loading..."
    />
  );
}
