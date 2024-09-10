"use client";

import { useCartContext } from "@/components/cart";
import { paths } from "@/routes/paths";
import {
  AttributeType,
  ProductAttributeType,
  ProductType,
  ProductVariantType,
  VariantInCartType,
} from "@/types";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { stringifyArray } from "@/lib/common";
import { useEffect, useState } from "react";

import { useSheetContext } from "@/components/sheet-product";

type ProductProps = {
  product: ProductType;
  // handleClickBuy: MouseEventHandler<HTMLButtonElement>;
};
export default function Product({ product }: ProductProps) {
  const { addToCart, headerRef, cartRef }: any = useCartContext();
  const { setOpen, setProduct, setOpenDialog }: any = useSheetContext();
  const [variant, setVariant] = useState<ProductVariantType | null>(null);
  console.log("PRODUCT");

  const router = useRouter();
  useEffect(() => {
    if (!variant) setVariant(product.variants[0]);
  }, [product.variants, setVariant, variant]);

  const handleClickBuyMobile = () => {
    setOpen(true);
    setVariant(product.variants[0]);
    setProduct(product);
  };
  const handleClickBuy = () => {
    setOpenDialog(true);
    setVariant(product.variants[0]);
    setProduct(product);
  };
  const handleAddToCart = () => {
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
    headerRef.current.scrollIntoView({ behavior: "smooth" });
    cartRef.current.classList.toggle("list-product-show", true);
    setTimeout(() => {
      cartRef.current.classList.toggle("list-product-show", false);
    }, 2000);
  };

  return (
    <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-500 flex-col">
      <Link
        className="px-3 block pt-3"
        href={"/san-pham/" + product.slug + "-" + product._id}
      >
        {!!product.discount && (
          <div className="px-2 py-0.5 md:py-1 absolute z-10 bg-red-600 -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
            <span
              className="block text-caption font-semibold text-white md:text-sm"
              style={{ textShadow: "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px" }}
            >
              {product.discount}%
            </span>
          </div>
        )}

        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            style={{ objectFit: "cover" }}
            width={250}
            height={250}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full "
          />
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
        <div>
          <Link
            className="block px-3"
            href={"/san-pham/" + product.slug + "-" + product._id}
          >
            <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
            <h3 className="overflow-hidden text-gray-600 text-sm font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
              {product.name}
            </h3>
          </Link>
          <div className="px-3">
            <div className="mb-1">
              <div className="text-blue-500">
                <span className="font-semibold">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.salePrice)}
                </span>
              </div>
              {!!product.discount && (
                <div className="text-md font-normal text-gray-600 line-through md:text-sm ">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </div>
              )}
            </div>
            {/* <p className="w-fit rounded-lg bg-gray-200 px-2 py-1 text-caption font-medium text-gray-600 line-clamp-2 md:text-sm">
                Hộp 3 Vỉ x 20 Viên
              </p> */}
          </div>
        </div>
        <div className="mt-4 px-3">
          <Button
            onClick={handleAddToCart}
            className="py-[8px] px-[12px] h-[36px] w-full hidden md:flex"
          >
            Chọn mua
          </Button>
          <Button
            onClick={handleClickBuyMobile}
            className="py-[8px] px-[12px] h-[36px] w-full md:hidden"
          >
            Chọn mua M
          </Button>
        </div>
      </div>
    </div>
  );
}
