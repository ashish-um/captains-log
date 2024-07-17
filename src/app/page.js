import Card from "@/components/Card";
import WatchToOmdb from "@/utils/watch_to_omdb";

export default async function page() {
  const dat = await WatchToOmdb();
  console.log(data);
  return (
    <div className="grid-cols-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4">
      {data.map((item) => {
        return <Card key={item.imdbID} data={item} />;
      })}
    </div>
  );
}
