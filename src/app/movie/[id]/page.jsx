import getIframe from "@/utils/iframe_url";
import Link from "next/link";
import Image from "next/image";
export default async function page(movieID) {
  const id = movieID.params.id;
  const embedURL = await getIframe(id);

  return (
    <div className="flex items-center justify-center">
      <Link
        className="flex items-center gap-2 mt-20 bg-emerald-500 px-4 py-3 rounded-md font-bold hover:bg-emerald-600"
        href={embedURL}
        target="_blank"
      >
        <p className="pt-0.5 text-2xl">Watch</p>
        <Image
          width={40}
          height={40}
          alt="trending status"
          src={"/link.svg"}
        />
      </Link>
    </div>
  );
}
