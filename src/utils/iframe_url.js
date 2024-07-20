export default async function getIframe(imdb, season = null, episode = null) {
  return new Promise(async (resolve, reject) => {
    if (!season && !episode) {
      const embedRes = await fetch(
        `https://getsuperembed.link/?video_id=${imdb}&player_secondary_color=10b981&player_primary_color=10b981&player_sources_toggle_type=2&player_loader=3&player_bg_color=1e1d28`
      );
      const embedURL = await embedRes.text();
      resolve(embedURL);
    }
  });
}
