"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-10 justify-center pb-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative">
            <Image
              src={product.image}
              alt={product.title}
              width={280}
              height={320}
              className="w-full h-80 object-contain p-2 bg-gray-50"
            />

            {/* Bookmark Icon */}
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <FaRegBookmark className="text-gray-700 text-lg" />
            </button>
          </div>

          {/* Info Section */}
          <div className="p-6 bg-darkGray">
            <p className="font-medium text-sm line-clamp-1 text-lightGray">
              {product.title}
            </p>
            <p className="text-gray-500 text-sm line-clamp-1 mb-2">
              {product.description}
            </p>

            {/* <p className="text-gray-800 font-bold mb-3">₹{product.price}</p> */}
            <div className="flex  justify-between">
              <p className="mb-3 font-encode">
                <span className="text-lightGray mr-1 ">
                  ₹&nbsp;{(product.price / 2).toFixed(0)}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  {product.price}
                </span>
                <span className="text-darkGreen text-xs ml-1">(50% Off)</span>
              </p>
              <p>
                <TbShoppingBagPlus size={24} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
