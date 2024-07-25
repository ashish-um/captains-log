export default function Layout({ children, series_info }) {
  return (
    <div className="flex">
      <div className="flex-1">{children}</div>
      <div>{series_info}</div>
    </div>
  );
}
