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
import Link from "next/link";
import useWindowSize from "@/hooks/use-window-size";

export function ProductDetailInfoPrice({ variant }: any) {
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
export function ProductDetailInfoAttribute({
  variant,
  setVariant,
  product,
}: any) {
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
  return (
    <div className="css-bqk1es mt-2 mb-0.5">
      <table className="content-list">
        <tbody>
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
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Danh mục</p>
            </td>
            <td className="flex-1">
              <Link
                className="text-blue-500"
                href={"/danh-muc/" + product.category.code}
              >
                <p>{product.category.name}</p>
              </Link>
            </td>
          </tr>
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Quy cách</p>
            </td>
            <td className="flex-1">
              <div className="text-gray-1000 font-normal">Hộp</div>
            </td>
          </tr>
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Xuất xứ thương hiệu</p>
            </td>
            <td className="flex-1">
              <div className="text-gray-1000 font-normal">
                {product.country.name}
              </div>
            </td>
          </tr>
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Mô tả ngắn</p>
            </td>
            <td className="flex-1">
              <div className="text-gray-1000 font-normal">
                <p>{product.introduction}</p>
              </div>
            </td>
          </tr>
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Nhà sản xuất</p>
            </td>
            <td className="flex-1">
              <div className="text-gray-1000 font-normal">
                {product.brand?.name.toUpperCase()}
              </div>
            </td>
          </tr>
          <tr className="content-container">
            <td>
              <p className="text-gray-700 font-medium">Nước sản xuất</p>
            </td>
            <td className="flex-1">
              <div className="text-gray-1000 font-normal">
                {product.country.name}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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

export function ProductDetailInfoActions({ name, image, variant }: any) {
  const { addToCart, headerRef, cartRef }: any = useCartContext();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { width } = useWindowSize();
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

  if (width >= 768)
    return (
      <div className="z-[12] hidden md:block">
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
            className=" bg-gray-200 hover:bg-gray-200 text-primary hover:text-primary py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    );
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[11] w-full bg-white">
      <div>
        <div className="shadow-3xl w-full rounded-t-3xl px-4 pt-4 pb-[30px]">
          <div className="flex gap-x-2">
            <button className="inline-flex items-center justify-center   [&>*]:shrink-0 bg-blue-500  p-[12px] h-[48px] w-[48px] rounded-[50px]">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                className="shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.1297 6.00772C18.2871 5.91306 15.4151 6.68861 12.9355 8.34372C10.1506 10.2046 8.20441 12.9526 7.30796 16.0246C7.06041 15.9944 6.76396 16.0077 6.41196 16.1073C5.09774 16.4802 4.1093 17.5571 3.66485 18.5055C3.08841 19.7415 2.8453 21.3762 3.10174 23.0637C3.35641 24.7459 4.06707 26.1326 4.95596 26.9935C5.84752 27.8548 6.85419 28.1348 7.85419 27.9246C9.34307 27.6068 10.0813 27.3691 9.87285 25.9819L8.86352 19.2579C9.06707 15.6188 10.9511 12.1931 14.1022 10.0864C18.32 7.26906 23.8497 7.4495 27.8729 10.5379C30.6715 12.6837 32.2964 15.8988 32.484 19.2739L31.7782 23.9775C30.204 28.2855 26.3013 31.2695 21.7853 31.6931H18.7782C18.0022 31.6931 17.3773 32.3179 17.3773 33.0931V33.8317C17.3773 34.6073 18.0022 35.2322 18.7782 35.2322H22.5697C23.3453 35.2322 23.9675 34.6073 23.9675 33.8317V33.4455C27.3729 32.6144 30.3453 30.5215 32.2809 27.6028L33.4955 27.9251C34.484 28.1815 35.5026 27.8548 36.3937 26.9939C37.2826 26.1326 37.9929 24.7464 38.248 23.0642C38.5053 21.3766 38.2551 19.7446 37.6853 18.5059C37.1133 17.2673 36.2613 16.4806 35.2777 16.1984C34.8657 16.0797 34.4186 16.0362 34.0351 16.0246C33.2244 13.2468 31.5555 10.7206 29.1502 8.87617C26.7853 7.0615 23.9724 6.10106 21.1297 6.00772Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.083 18.3034C26.0208 18.3034 26.781 19.0636 26.7831 20.0039C26.781 20.9417 26.0208 21.704 25.083 21.704C24.1427 21.704 23.3805 20.9417 23.3805 20.0039C23.3805 19.0641 24.1432 18.3034 25.083 18.3034ZM20.5043 18.3034C21.4442 18.3034 22.2044 19.0636 22.2044 20.0039C22.2044 20.9417 21.4442 21.704 20.5043 21.704C19.5636 21.704 18.8034 20.9417 18.8034 20.0039C18.8034 19.0641 19.5636 18.3034 20.5043 18.3034ZM15.9273 18.3034C16.8651 18.3034 17.6274 19.0636 17.6274 20.0039C17.6274 20.9417 16.8651 21.704 15.9273 21.704C14.9874 21.704 14.2268 20.9417 14.2268 20.0039C14.2268 19.0641 14.9874 18.3034 15.9273 18.3034ZM20.5043 11C15.5181 11 11.5 14.8858 11.5 20.0039C11.5 22.4621 12.4295 24.6346 13.9436 26.2286L13.4063 28.6373C13.2292 29.4299 13.7789 29.9631 14.4913 29.5663L16.8435 28.2543C17.9613 28.7396 19.1977 29.0078 20.5043 29.0078C25.4922 29.0078 29.5078 25.1245 29.5078 20.0039C29.5078 14.8858 25.4922 11 20.5043 11Z"
                  fill="white"
                />
                <ellipse
                  cx="20.8517"
                  cy="19.6089"
                  rx="7.01774"
                  ry="3.27494"
                  fill="#FCFCFC"
                />
                <circle
                  cx="15.9035"
                  cy="20.6086"
                  r="1.40355"
                  fill="url(#paint0_linear_4823_6723)"
                />
                <circle
                  cx="20.5813"
                  cy="20.6086"
                  r="1.40355"
                  fill="url(#paint1_linear_4823_6723)"
                />
                <circle
                  cx="25.261"
                  cy="20.6086"
                  r="1.40355"
                  fill="url(#paint2_linear_4823_6723)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4823_6723"
                    x1="16.896"
                    y1="21.6011"
                    x2="14.9111"
                    y2="19.6162"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1250DC" />
                    <stop offset={1} stopColor="#306DE4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4823_6723"
                    x1="21.5737"
                    y1="21.6011"
                    x2="19.5888"
                    y2="19.6162"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1250DC" />
                    <stop offset={1} stopColor="#306DE4" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4823_6723"
                    x1="26.2534"
                    y1="21.6011"
                    x2="24.2685"
                    y2="19.6162"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1250DC" />
                    <stop offset={1} stopColor="#306DE4" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <Button
              onClick={handleAddToCart}
              variant={"ghost"}
              className=" bg-gray-200 hover:bg-gray-200 text-primary hover:text-primary py-[12px] h-[48px] rounded-[42px]  px-6 flex-auto "
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              onClick={handleBuyNow}
              className="py-[12px] h-[48px] rounded-[42px]  px-6 flex-auto"
            >
              Chọn mua
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
