"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 my-6"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here..."
        className="w-full h-14 px-4 text-slate-700 rounded-l-md placeholder-gray-500 bg-gray-300 dark:bg-transpa outline-none bg-traparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-white h-14 px-4 rounded-r-md  bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:text-gray-300"
      > 
        Search
      </button>
    </form>
  );
}
