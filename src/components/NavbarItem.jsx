"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";
import "../app/globals.css"

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hoveEffect hover:border-b-4 border-b-amber-600 md:text-lg   pb-2 ${
          genre && genre === param && " border-b-4 text-amber-600 border-b-amber-500 md:font-semibold"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
