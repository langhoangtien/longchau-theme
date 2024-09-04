"use client";

import { useEffect } from "react";

export default function ProductRecentlyViewed({ product }: any) {
  useEffect(() => {
    if (!product) return;
    // Clone product to remove description
    const productClone = {
      ...product,
      description: "",
    };
    const recentlyViewed = localStorage.getItem("recentlyViewed");
    if (recentlyViewed) {
      const products = JSON.parse(recentlyViewed);
      if (products.some((p: any) => p._id === product._id)) {
        return;
      }
      if (products.length > 10) {
        products.pop();
      }

      products.unshift(productClone);
      localStorage.setItem("recentlyViewed", JSON.stringify(products));
    } else {
      localStorage.setItem("recentlyViewed", JSON.stringify([productClone]));
    }
  }, []);
  return null;
}
