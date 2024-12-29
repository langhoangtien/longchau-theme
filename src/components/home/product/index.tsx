"use client";

import { useCartContext } from "@/components/cart";
import { ProductType, ProductVariantType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSheetContext } from "@/components/sheet-product";

import CartPlusIcon from "@/components/icons/cart-plus-icon";
import StarIcon from "@/components/icons/star-icon";
import { SHIPPING_THRESHOLD } from "@/components/cart/cart-provider";
import ShippingFreeIcon from "@/components/icons/shipping-free-icon";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  const { addToCart }: any = useCartContext();
  const { setOpen, setProduct, setOpenDialog }: any = useSheetContext();
  const [variant, setVariant] = useState<ProductVariantType | null>(null);

  useEffect(() => {
    if (!variant) setVariant(product.variants[0]);
  }, [product.variants, setVariant, variant]);

  const handleClickBuyMobile = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpen(true);
    setVariant(product.variants[0]);
    setProduct(product);
  };
  const handleClickBuy = () => {
    setOpenDialog(true);
    setVariant(product.variants[0]);
    setProduct(product);
  };
  const handleAddToCart = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (!product.variants || product.variants.length === 0) {
      return;
    }
    if (product.variants.length !== 1) {
      handleClickBuy();
      return;
    }

    const variantData: any = {
      ...variant,
      name: product.name,
      image: variant?.image || product.image,
    };
    addToCart(variantData, 1);
  };
  const isMobile = useIsMobile();

  return (
    <Card className="h-full relative flex border border-solid transition-all duration-300 ease-out hover:border-primary flex-col">
      <Link
        className="px-3 block pt-3"
        href={"/san-pham/" + product.slug + "-" + product._id}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            className="h-full w-full object-cover object-center"
          />
          {isMobile ? (
            <span
              onClick={handleClickBuyMobile}
              className="rounded-full absolute bottom-1 right-1 border-primary border bg-white  text-white w-9 h-9  p-1 cursor-pointer flex items-center justify-center"
            >
              {" "}
              <CartPlusIcon className="w-6 h-6 text-primary" />
            </span>
          ) : (
            <span
              onClick={handleAddToCart}
              className="rounded-full absolute bottom-1 right-1 border-primary border bg-white text-white w-9 h-9 p-1 cursor-pointer flex items-center justify-center"
            >
              {" "}
              <CartPlusIcon className="w-6 h-6 text-primary" />
            </span>
          )}
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
        <div>
          <Link
            className="block px-3"
            href={"/san-pham/" + product.slug + "-" + product._id}
          >
            <div className="mb-1 flex min-h-[12px] items-end md:mt-0 md:min-h-[16px]" />
            <h3 className="overflow-hidden text-gray-600 text-sm font-semibold line-clamp-2 mb-1 md:mb-2">
              {product.name}
            </h3>
          </Link>
          <div className="px-3">
            <div className="mb-1 flex justify-start items-center">
              <div className="text-primary font-semibold">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.salePrice)}
              </div>
              {!!product.discount && (
                <div className="text-xs font-normal text-gray-600 line-through md:text-sm ml-1 ">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </div>
              )}
            </div>
            <div className="mb-1 flex items-center ">
              {!!(product.salePrice > SHIPPING_THRESHOLD) && (
                <ShippingFreeIcon className="w-7 h-7 text-teal-400 mr-1" />
              )}
              {!!product.discount && (
                <span className="bg-primary/75 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Giảm {product.discount}%
                </span>
              )}
              <span className="text-xs font-semibold border border-primary/80 rounded-sm text-primary px-0.5">
                COD
              </span>
            </div>
            {!!product.ratingAverage && (
              <div className="text-sm flex items-center text-gray-700/80">
                {product.ratingAverage.toFixed(1)}
                <StarIcon className="text-yellow-500 h-3 w-3 ml-[1px]"></StarIcon>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
