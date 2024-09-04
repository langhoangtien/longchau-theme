"use client";
import Image from "next/image";
import Product from "./product";
import { useRef, useState } from "react";
import { useCartContext } from "@/components/cart";
import { paths } from "@/routes/paths";
import {
  AttributeType,
  ProductAttributeType,
  ProductType,
  VariantInCartType,
} from "@/types";

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

import { toast } from "sonner";
export function SuggestionSection({
  products,
  background = "bg-blue-100",
}: any) {
  return (
    <div>
      <div className={`relative py-4 ${background}`}>
        <div className="container-lite isolate">
          <div className="mb-4 flex items-center ">
            <div>
              <Image
                alt="Gợi ý hôm nay"
                src="/icons/png/icon_goi_y_hom_nay.webp"
                width={28}
                height={28}
              />
            </div>
            <h2 className="ml-2 flex w-full items-center text-lg md:text-xl font-semibold">
              Gợi ý hôm nay
            </h2>
          </div>

          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export function ToopDiscountSection({
  products,
  background = "bg-blue-100",
}: any) {
  return (
    <div>
      <div className={`relative py-4 ${background}`}>
        <div className="isolate container-lite pt-10 pb-4 md:pt-12 md:pb-6">
          <div className="absolute top-0 left-0 w-full">
            <Image
              alt="Sản phẩm bán chạy"
              width={320}
              height={40}
              data-nimg={1}
              className="hidden md:block w-[320px] absolute top-[-11px] left-1/2 -translate-x-1/2"
              style={{ color: "transparent" }}
              src="/icons/png/san_pham_ban_chay_website_320x41.png"
            />
            <Image
              alt="Sản phẩm bán chạy"
              width={282}
              height={36}
              data-nimg={1}
              className="md:hidden absolute -top-2.5 left-1/2 -translate-x-1/2 w-[282px]"
              style={{ color: "transparent" }}
              src="/icons/png/san_pham_ban_chay_reponsive_282x36.png"
            />
            <h2 className="pb-2 text-base md:text-lg text-white font-semibold absolute inline-block w-full text-center -top-1 -top-0.5 left-1/2 -translate-x-1/2">
              Sản phẩm bán chạy
            </h2>
          </div>

          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

const ProductList = ({ products }: any) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { addToCart }: any = useCartContext();
  const sheetRef = useRef<HTMLButtonElement | null>(null);
  const handleClickBuy = (product: any) => {
    setCurrentProduct(product);
    sheetRef.current?.click();
  };
  return (
    <div>
      <div className="grid md:grid-cols-5 md:gap-3 grid-cols-2 gap-2">
        {products.map((product: any) => (
          <Product
            handleClickBuy={handleClickBuy}
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            ref={sheetRef}
            className="py-[8px] px-[12px] h-[36px] w-full hidden"
          >
            Chọn mua
          </Button>
        </SheetTrigger>
        <SheetContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          side={"bottom"}
        >
          <SheetHeader>
            <SheetTitle>Chọn số lượng, thuộc tính</SheetTitle>
          </SheetHeader>
          <SheetProduct product={currentProduct} />

          <SheetFooter>
            <Button onClick={addToCart} type="submit">
              Mua hàng
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export function SheetProduct({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState<any>(null);
  if (!product) return null;
  if (!variant || variant.productId !== product._id) {
    setVariant(product.variants[0]);
  }

  const handleSelectVariant = (name: string, value: string) => {
    const newAtts = variant?.attributes.map((item: any) => {
      if (item.name === name) return { ...item, value };
      return item;
    });
    const newAttsString = stringifyArray(newAtts);
    const newVariant = product.variants.find(
      (item: any) => stringifyArray(item.attributes) === newAttsString
    );

    setVariant(newVariant);
  };
  const handleIncerementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleChangeQuantity = (e: any) => {
    const quantity = e.target.value;
    if (!quantity || quantity <= 0) setQuantity(1);
    else setQuantity(parseInt(quantity));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex min-h-[80px] items-center gap-x-3 py-2 px-0">
        <div className="h-[56px] w-[56px] rounded-xl border-[0.8px] border-gray-200 p-[6px]">
          <Image
            alt={product.name}
            width={46}
            height={44}
            className="h-[44px] w-[44px] object-cover"
            src={product.image}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="e-card--content flex-1">
          <p className="line-clamp-2 text-gray-700 font-medium">
            {product.name}
          </p>
          <div className="price-and-quantity">
            <p className="text-base text-primary font-semibold">
              {" "}
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(variant?.salePrice || 0)}
            </p>
            {!!variant?.discount && (
              <p className="text-gray-600 text-[12px] line-through">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(variant?.price || 0)}
              </p>
            )}
          </div>
        </div>
      </div>
      {product.attributes?.map((attr: ProductAttributeType) => {
        const value = variant?.attributes.find(
          (item: AttributeType) => item.name === attr.name
        )?.value;

        return (
          <Attribute
            selectVariant={handleSelectVariant}
            valueSelect={value}
            key={attr.name}
            attribute={attr}
          />
        );
      })}

      <div>
        <p className="text-sm text-gray-700 mb-1 font-medium">Chọn số lượng</p>
        <div className="inline-block items-center">
          <div className="mx-[-4px] my-[-2px]">
            <div className="product-quantity border border-gray-400">
              <span
                onClick={handleDecrementQuantity}
                className="quantity-decrease "
              >
                <span className="estore-icon  product-quantity-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <input
                type="number"
                min={1}
                max={999}
                className="text-center border border-gray-400 "
                value={quantity}
                onChange={handleChangeQuantity}
              />
              <span
                onClick={handleIncerementQuantity}
                className="quantity-increase"
              >
                <span className="estore-icon  product-quantity-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700 font-medium">Tạm tính</p>
          <p className="text-xl font-medium">566.190đ</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700 font-medium">Tiết kiệm được</p>
          <p className="font-medium">132.810đ</p>
        </div>
      </div>
    </div>
  );
}

const Attribute = ({ attribute, valueSelect, selectVariant }: any) => {
  console.log("ProductList");
  return (
    <div>
      <p className="text-gray-700 mb-1 font-medium">Chọn đơn vị</p>
      <div className="quantity-tag-wrapper flex flex-wrap gap-2">
        {attribute.values.map((value: string, index: number) => {
          return valueSelect === value ? (
            <div
              key={value}
              className="inline-flex justify-center items-center rounded-[50px] relative font-medium  overflow-hidden cursor-pointer h-9  transition-all duration-300 border-blue-600 border border-solid bg-white pl-4 pr-6"
            >
              {value}
              <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-blue-600 -mt-[6px] -mr-[12px] absolute">
                <span className="absolute -top-[22px] right-[3px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    className="text-white"
                  >
                    <path
                      d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ) : (
            <div
              key={value}
              onClick={() => selectVariant(attribute.name, value)}
              className="inline-flex justify-center items-center pl-3 pr-3 rounded-full border  border-gray-500 relative font-medium  overflow-hidden cursor-pointer bg-white h-9  transition-all duration-300"
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
