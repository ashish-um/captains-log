import getIframe from "@/utils/iframe_url";

export default async function page(routes) {
  const id = routes.params.id;
  const episode = routes.params.episode;
  const season = routes.params.season;
  const embedURL = await getIframe(id, season, episode);

  return (
    <div>
      <iframe
        src={embedURL}
        allowFullScreen
        width={"100%"}
        className="h-[40svh] lg:h-[80vh]"
      ></iframe>
    </div>
  );
}
