import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-4 justify-center dark:bg-slate-700 bg-amber-200 lg:tet-lg p-4">
      {/* <NavbarItem title="All Movies" param="fetchTrending" /> */}
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
