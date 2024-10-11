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
import FreeReturnIcon from "../icons/free-return-icon";
import Freeback from "../icons/free-back";
import FreeShippingIcon from "../icons/free-shipping-icon";
import FlashIcon from "../icons/flash-icon";
import { Star } from "lucide-react";
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
      <Hotline />
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
        {/* <ProductDetailInfoBuyNowMobile /> */}
        <ProductDetailInfoActions
          name={product.name}
          image={product.image}
          id={product._id}
          variant={variant}
        />

        {/* <div className="flex mt-1">
          <FlashIcon className="mr-1.5 mt-1.5 text-yellow-500 h-4 w-4" />
          <div>
            <span className="text-sm font-semibold text-yellow-600">
              Sản phẩm đang được chú ý,{" "}
            </span>
            <span className="text-sm">
              có 3 người thêm vào giỏ hàng &amp; 8 người đang xem
            </span>
          </div>
        </div>
        <div className="css-1ri80ux">
          <div className="item-container">
            <FreeReturnIcon className="w-10 h-10 text-primary mr-2" />

            <div className="item-container--content text-sm">
              <p className="text-gray-1000">Đổi trả trong 7 ngày</p>
              <p className="text-gray-700">kể từ ngày mua hàng</p>
            </div>
          </div>
          <div className="item-container">
            <Freeback className="w-10 h-10 text-primary mr-2" />
            <div className="item-container--content text-sm">
              <p className="text-gray-1000">Miễn phí 100%</p>
              <p className="text-gray-700">đổi hàng</p>
            </div>
          </div>
          <div className="item-container">
            <FreeShippingIcon className="w-10 h-10 text-primary mr-2" />

            <div className="item-container--content text-sm">
              <p className="text-gray-1000">Miễn phí vận chuyển</p>
              <p className="text-gray-700">theo chính sách giao hàng</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const Hotline = () => (
  <div className="mb-2 mt-2">
    <div className="grid">
      <div className="grid gap-y-2 py-1">
        <div className="flex items-center justify-center text-sm md:text-base">
          <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2" />
          <span className="flex items-center gap-1">
            Gọi
            <a className="text-primary font-semibold" href="tel:0832667711">
              0832.667.711
            </a>
            để được tư vấn mua hàng{" "}
            <span className="font-medium">(Miễn phí)</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);
