"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItems";
import DarkMode from "./DarkMode";
import { HiHome } from "react-icons/hi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  const [activeItem, setActiveItem] = useState("/");

  const handleItemClick = (address) => {
    setActiveItem(address);
  };

  return (
    <div className="flex items-center justify-between px-2 py-3 sm:p-4 max-w-6xl sm:mx-auto">
      <div className="flex gap-2 ">
        <MenuItem
          title="HOME"
          address="/"
          Icon={HiHome}
          isActive={activeItem === "/"}
          onItemClick={handleItemClick}
        />
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={BsFillInfoSquareFill}
          isActive={activeItem === "/about"}
          onItemClick={handleItemClick}
        />
      </div>

      <div className="flex items-center">
        <DarkMode />
        <Link href="/">
          <h2 className="text-lg sm:text-2xl">
            <span className="font-bold bg-amber-500 my-1 py-1 px-2 rounded-[4px] ">
              IMDb
            </span>
            <span className="hidden text-xl pl-1 sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
