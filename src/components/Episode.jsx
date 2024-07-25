export default function Episode({ data, episode_no, selected }) {
  console.log(selected);

  return (
    <div
      className={`flex gap-1 p-2 my-1 rounded-md ${
        selected ? "bg-slate-500" : "bg-slate-700"
      }`}
    >
      <div>[{episode_no}] </div>
      <div>{data.Title}</div>
    </div>
  );
}
