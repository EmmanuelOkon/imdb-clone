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
        className={`hoverEffect  pb-2 ${
          genre && genre === param && "border-b-2 border-b-amber-500"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
