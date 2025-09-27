"use client";

import React from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "All Bags", img: "/assests/Frame13.svg" },
  { id: 2, name: "Vanity Pouch", img: "/assests/Frame20.svg" },
  { id: 3, name: "Tote Bag", img: "/assests/Frame22.svg" },
  { id: 4, name: "Duffle Bag", img: "/assests/Frame49.svg" },
  { id: 5, name: "Laptop Sleeve", img: "/assests/Frame461.svg" },
  { id: 6, name: "Messenger Bags", img: "/assests/LogoSvg.svg" },
  { id: 7, name: "Slings Bags", img: "/assests/Frame50.svg" },
  { id: 8, name: "Handbags", img: "/assests/Frame49.svg" },
  { id: 9, name: "Bucket Bag", img: "/assests/Frame13.svg" },
  { id: 10, name: "Vanity Pouch", img: "/assests/Frame20.svg" },
];

export default function ProductList() {
  return (
    <div
      className="flex overflow-x-auto gap-14 p-6 pb-8"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center flex-shrink-0 w-24"
        >
          <Image
            src={product.img}
            alt={product.name}
            width={80}
            height={80}
            className="mb-2"
          />
          <p className="text-center text-xs text-beige">{product.name}</p>
        </div>
      ))}
    </div>
  );
}
