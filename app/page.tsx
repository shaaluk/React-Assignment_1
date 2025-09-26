"use client"; // needed for any client-side component

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductList />
      <ProductCard />
    </div>
  );
}
