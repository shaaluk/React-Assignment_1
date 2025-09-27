"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaArrowUpFromBracket } from "react-icons/fa6";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setVisibleProducts(products.slice(start, end));
  }, [products, page]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header with count and arrow */}
      <div className="text-beige flex justify-between px-7 py-3">
        <p>Bags . Backpacks</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            // go to next page if there are more products
            if ((page + 1) * ITEMS_PER_PAGE < products.length) {
              setPage(page + 1);
            } else {
              setPage(0);
            }
          }}
        >
          <span>{visibleProducts.length} products</span>
          <FaArrowUpFromBracket />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-12 justify-start p-6 pb-24 mx-2">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="w-60 sm:w-64 md:w-72 lg:w-80 shadow-md rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={280}
                height={320}
                className="w-full h-70 sm:h-80 md:h-80 lg:h-96 object-contain p-2 bg-gray-50"
              />

              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <FaRegBookmark className="text-gray-700 text-lg" />
              </button>
            </div>

            {/* Info Section */}
            <div className="p-4 md:p-6 bg-darkGray">
              <p className="font-medium text-sm line-clamp-1 text-lightGray">
                {product.title}
              </p>
              <p className="text-gray-500 text-sm line-clamp-1 mb-2">
                {product.description}
              </p>

              <div className="flex justify-between">
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
    </div>
  );
}
