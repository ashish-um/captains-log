const OMDB_API = process.env.OMDB_API;
import getIframe from "@/utils/iframe_url";

export default async function page(movieID) {
  const id = movieID.params.id;
  const embedURL = await getIframe(id);

  return (
    <div>
      <iframe
        src={embedURL}
        allowFullScreen
        width={"100%"}
        style={{ height: "80svh" }}
      ></iframe>
      <center className="mt-2">
        <a
          className="text-emerald-400 underline"
          href={embedURL}
          target="_blank"
        >
          if it doesn't work click here
        </a>
      </center>
    </div>
  );
}
