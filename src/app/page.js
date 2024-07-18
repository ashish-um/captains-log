import Card from "@/components/Card";
import WatchToOmdb from "@/utils/watch_to_omdb";

export default async function page() {
  const data = await WatchToOmdb();
  console.log(data);
  return (
    <div className="max-w-screen-2xl mx-auto pb-4 px-3">
      <h2 className="text-xl sm:text-2xl mb-3 font-bold flex items-center">
        Trending
        <span className="material-symbols-rounded text-xl pl-2">
          trending_up
        </span>
      </h2>
      <div className="gap-3 grid-cols-2 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item) => {
          return <Card key={item.imdbID} data={item} />;
        })}
      </div>
    </div>
  );
}
