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
    </div>
  );
}
