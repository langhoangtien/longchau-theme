"use client";
import Link from "next/link";
import ProductDetailCarousel from "./product-detail-carousel";
import { TypographyH3 } from "../ui/typography";

import {
  ProductDetailInfoActions,
  ProductDetailInfoAttribute,
  ProductDetailInfoPrice,
} from "./product-detail-info-section";
import { useState } from "react";

import StarIcon from "../icons/star-icon";
import Phone from "../icons/phone";

export default function ProductDetailInfo({ product }: any) {
  return (
    <div
      id="prr-id-product-detail-product-information"
      className="p-4 flex gap-4 sm:flex-col flex-col md:flex-row md:flex-nowrap md:rounded-xl bg-white"
    >
      <ProductDetailCarousel slides={product.images} />
      <ProductDetailInfoRight product={product} />
    </div>
  );
}

export function ProductDetailInfoRight({ product }: any) {
  const [variant, setVariant] = useState(product.variants[0]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="font-medium">
          <span className="text-base font-medium text-gray-700">
            Thương hiệu:{" "}
          </span>
          <span className="text-base text-gray-1000 font-normal">
            <Link
              className="text-primary"
              href={`/thuong-hieu/${product.brand.code}-${product.brand._id}`}
            >
              {product.brand.name}
            </Link>
          </span>
        </div>
        <div>
          <TypographyH3 className="font-medium">{product.name}</TypographyH3>
        </div>
        <div className="flex items-center">
          <span
            data-test-id="sku"
            className="text-base font-normal text-gray-7 cursor-pointer transition-all duration-300 hover:opacity-70"
          >
            {product.code}
          </span>
          <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
          <span className="text-base text-gray-7 inline-flex items-center">
            {product.ratingAverage}
            <StarIcon className="ml-0.5 shrink-0 h-4 w-4 text-yellow-500" />
          </span>
          <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
          <a
            href="#product-detail-preview"
            className="text-sm text-primary cursor-pointer"
          >
            {product.totalRating} đánh giá
          </a>
          <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
          <span className="text-sm text-primary cursor-pointer">
            <a href="#product-detail-preview">
              {product.totalRating} bình luận
            </a>
          </span>
        </div>
        <ProductDetailInfoPrice variant={variant} />
        <ProductDetailInfoAttribute
          variant={variant}
          setVariant={setVariant}
          product={product}
        />
        <div className="mt-[8px] " />
        <ProductDetailInfoActions
          name={product.name}
          image={product.image}
          id={product._id}
          variant={variant}
        />
      </div>
    </div>
  );
}
