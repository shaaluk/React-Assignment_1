"use client";

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Header() {
  return (
    <>
      <header className="w-full p-6 flex items-center justify-between text-beige">
        <h3 className="font-comme tracking-[0.55em]">TANN TRIM </h3>
        <div className="flex items-center gap-5 text-beige">
          <IoMdSearch size={26} />
          <MdOutlinePersonOutline size={28} />
          <FaRegBookmark size={22} />
          <MdOutlineShoppingBag size={26} />
        </div>
      </header>
      <div className="flex justify-center gap-14 text-xs text-biege pb-10">
        <p>Bags</p>
        <p>Travel</p>
        <p>Accessories</p>
        <p>Gifting</p>
        <p>Jewelery</p>
      </div>
    </>
  );
}
