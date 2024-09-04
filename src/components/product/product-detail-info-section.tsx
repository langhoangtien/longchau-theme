"use client";

import { Fragment, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useCartContext } from "../cart";
import {
  AttributeType,
  ProductAttributeType,
  VariantInCartType,
} from "@/types";
import { useRouter } from "next/navigation";
import { stringifyArray } from "@/lib/common";

export function ProductDetailInfoPrice() {
  const { variant }: any = useCartContext();
  console.log("varian _PRIVCE", variant);

  return (
    <div>
      <div className="text-blue-600 inline-flex items-baseline">
        <span
          data-test="price"
          className="md:text-4xl sm:text-2xl text-xl md:font-semibold font-bold animate-in fade-in-0"
        >
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(variant?.salePrice || 0)}
        </span>
        <span className="relative bottom-[1px] ml-2 md:text-2xl sm:text-xl omd:font-normal font-medium">
          {" "}
          / <span>Hộp</span>
        </span>
      </div>
      {!!variant?.discount && (
        <div className="text-gray-700 text-xl md:text-xl font-normal line-through animate-in slide-in-from-top-8 fade-in-0 duration-500">
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(variant?.price || 0)}
        </div>
      )}
    </div>
  );
}
export function ProductDetailInfoAttribute({ variants, attributes, id }: any) {
  const { variant, setVariant }: any = useCartContext();

  useEffect(() => {
    if (!variant || variant.productId !== id) {
      setVariant(variants[0]);
    }
  }, [id, variant, variants, setVariant]);
  const handleSelectVariant = (name: string, value: string) => {
    const newAtts = variant?.attributes.map((item: any) => {
      if (item.name === name) return { ...item, value };
      return item;
    });
    const newAttsString = stringifyArray(newAtts);
    const newVariant = variants.find(
      (item: any) => stringifyArray(item.attributes) === newAttsString
    );

    setVariant(newVariant);
  };
  return (
    <Fragment>
      {attributes?.map((attr: ProductAttributeType) => {
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
    </Fragment>
  );
}
type Attribute = {
  name: string;
  values: string[];
};
const Attribute = ({ attribute, valueSelect, selectVariant }: any) => {
  return (
    <tr className="content-container flex !mb-4">
      <td className="flex !items-center">
        <p className="text-base text-gray-700 mb-0.5 font-medium">
          {attribute.name}
        </p>
      </td>
      <td className="text-base text-gray-700 space-x-3">
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
              className="inline-flex justify-center items-center pl-3 pr-3 rounded-full border  relative font-medium  overflow-hidden cursor-pointer bg-white h-9  transition-all duration-300"
            >
              {value}
            </div>
          );
        })}
      </td>
    </tr>
  );
};

export function ProductDetailInfoActions({ id, name, image }: any) {
  const { addToCart, variant, headerRef, cartRef }: any = useCartContext();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!variant) {
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || image || "",
      name,
    };
    addToCart(variantMapped, quantity);
    headerRef.current.scrollIntoView({ behavior: "smooth" });
    cartRef.current.classList.toggle("list-product-show", true);
    setTimeout(() => {
      cartRef.current.classList.toggle("list-product-show", false);
    }, 2000);
  };

  const handleBuyNow = () => {
    if (!variant) {
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || image || "",
      name,
    };
    addToCart(variantMapped, quantity);
    router.push("/gio-hang");
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
    <div className="z-[12] hidden sm:block">
      <div className="mt-4 flex items-center">
        <span className="text-base text-gray-700 font-medium  mr-4 inline-block h-full w-full max-w-[115px]">
          Chọn số lượng
        </span>
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
      <div className="mt-4 flex gap-4">
        <Button
          onClick={handleBuyNow}
          className=" py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
        >
          Chọn mua
        </Button>
        <Button
          onClick={handleAddToCart}
          variant={"ghost"}
          className=" bg-gray-200 hover:bg-gray-200 text-primary hover:text-primary   py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
}
