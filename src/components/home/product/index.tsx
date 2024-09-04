"use client";

import { useCartContext } from "@/components/cart";
import { paths } from "@/routes/paths";
import {
  AttributeType,
  ProductAttributeType,
  ProductType,
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
import { useRef, useState } from "react";
import { toast } from "sonner";

type ProductProps = { product: ProductType; handleClickBuy: Function };
export default function Product({ product, handleClickBuy }: ProductProps) {
  const [variant, setVariant] = useState<any>(null);
  const { addToCart, headerRef, cartRef }: any = useCartContext();

  const sheetRef = useRef<HTMLDivElement>(null);
  const sheetCloseRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  if (!variant) setVariant(product.variants[0]);
  const handleAddToCart = () => {
    if (!product.variants || product.variants.length === 0) {
      return;
    }
    if (product.variants.length !== 1) {
      router.push(`${paths.product}/${product.slug}-${product.id}`);
      return;
    }

    const variantData: VariantInCartType = {
      ...variant,
      name: product.name,
      image: variant.image || product.image,
    };
    addToCart(variantData, 1);
    headerRef.current.scrollIntoView({ behavior: "smooth" });
    cartRef.current.classList.add("list-product-show");
    setTimeout(() => {
      cartRef.current.classList.remove("list-product-show");
    }, 2000);
  };
  const handleOpenSheet = () => {
    sheetRef.current?.click();
  };
  const handleAddToCartMobile = () => {
    if (!product.variants || product.variants.length === 0) {
      toast.error("Sản phẩm không có thông tin chi tiết");
      return;
    }
    const variantData: VariantInCartType = {
      ...variant,
      name: product.name,
      image: variant.image || product.image,
    };
    addToCart(variantData, 1);
    sheetCloseRef.current?.click();
    toast.success("Sản phẩm đã được thêm vào giỏ hàng");
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
            onClick={handleOpenSheet}
            className="py-[8px] px-[12px] h-[36px] w-full md:hidden"
          >
            Chọn mua M
          </Button>
        </div>
      </div>
      <SheetDemo
        product={product}
        sheetRef={sheetRef}
        sheetCloseRef={sheetCloseRef}
        addToCart={handleAddToCartMobile}
      />
    </div>
  );
}

export function SheetDemo({
  product,
  addToCart,
  sheetCloseRef,
  sheetRef,
}: any) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState<any>(null);

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
    <Sheet>
      <SheetTrigger>
        <span ref={sheetRef} className="hidden">
          Chọn mua
        </span>
      </SheetTrigger>

      <SheetContent onOpenAutoFocus={(e) => e.preventDefault()} side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Chọn số lượng, thuộc tính</SheetTitle>
        </SheetHeader>
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
            <p className="text-sm text-gray-700 mb-1 font-medium">
              Chọn số lượng
            </p>
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
              <p className="text-sm text-gray-700 font-medium">
                Tiết kiệm được
              </p>
              <p className="font-medium">132.810đ</p>
            </div>
          </div>
        </div>

        <SheetFooter>
          <Button ref={sheetCloseRef} onClick={addToCart} type="submit">
            Mua hàng
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const Attribute = ({ attribute, valueSelect, selectVariant }: any) => {
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
