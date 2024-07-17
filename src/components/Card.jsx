import Image from "next/image";

export default function Card({ data }) {
  return (
    <div>
      <Image
        src={data.Poster}
        alt="poster"
        className="w-full h-full object-cover"
        width={500}
        height={675}
      />
    </div>
  );
}
