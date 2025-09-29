"use client";

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="w-full p-6 flex items-center justify-between text-beige">
        <h3 className="font-comme tracking-[0.55em]">TANN TRIM</h3>

        <div className="flex items-center gap-5 text-beige">
          {/* Hamburger (shows below lg) */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={26} />}
          </button>

          {/* Desktop icons (only show on lg and up) */}
          <IoMdSearch size={26} className="hidden lg:block" />
          <MdOutlinePersonOutline size={28} className="hidden lg:block" />
          <FaRegBookmark size={22} className="hidden lg:block" />
          <MdOutlineShoppingBag size={26} className="hidden lg:block" />
        </div>
      </header>

      {/* Desktop Nav */}
      <div className="hidden lg:flex justify-center gap-14 text-sm text-beige pb-10">
        <p>Bags</p>
        <p>Travel</p>
        <p>Accessories</p>
        <p>Gifting</p>
        <p>Jewelery</p>
      </div>

      {/* Mobile Menu Drawer (shows only below lg) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 text-base text-beige pb-6 bg-black/90 absolute top-16 left-0 w-full z-50">
          <p>Bags</p>
          <p>Travel</p>
          <p>Accessories</p>
          <p>Gifting</p>
          <p>Jewelery</p>
        </div>
      )}
    </>
  );
}
