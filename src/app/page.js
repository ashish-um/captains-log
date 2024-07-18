import Card from "@/components/Card";
import WatchToOmdb from "@/utils/watch_to_omdb";

export default async function page() {
  const data = await WatchToOmdb();
  console.log(data);
  return (
    <div className="gap-3 px-3 grid-cols-2 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-2xl mx-auto py-4">
      {data.map((item) => {
        return <Card key={item.imdbID} data={item} />;
      })}
    </div>
  );
}
