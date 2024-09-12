"use client";

import { Fragment, useState } from "react";
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
import { toast } from "sonner";

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

  const handleAddToCartMobile = () => {
    if (!variant) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || image || "",
      name,
    };
    addToCart(variantMapped, quantity);
    toast.info("Sản phẩm đã được thêm vào giỏ hàng");
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
    <Fragment>
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
            onClick={handleAddToCart}
            className=" py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            onClick={handleBuyNow}
            variant={"ghost"}
            className=" bg-gray-200 hover:bg-gray-200 text-primary hover:text-primary py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
          >
            Mua ngay
          </Button>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[11] w-full bg-white">
        <div>
          <div className="shadow-3xl w-full rounded-t-3xl px-4 pt-4 pb-[30px]">
            <div className="flex gap-x-2">
              <a
                href="tel:0832667711"
                className="inline-flex items-center justify-center   [&>*]:shrink-0 bg-blue-500  p-[12px] h-[48px] w-[48px] rounded-[50px]"
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="curentColor"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                >
                  <path
                    d="M22.0946 6.8943C21.3154 5.33601 19.6859 4.0754 17.6833 4.29774C15.892 4.49664 13.2323 5.16288 11.4203 7.34634C9.55886 9.58932 8.86485 13.0882 10.2943 18.3285C11.8196 23.9201 14.0861 29.4313 16.9028 33.8791C19.6988 38.2941 23.143 41.8273 27.094 43.1824C30.5884 44.3808 33.2596 43.8808 35.2093 42.5645C37.0881 41.2961 38.1215 39.3872 38.6554 38.0646C39.2533 36.5839 38.8592 35.0433 38.0787 33.9082L35.2017 29.7238C33.8969 27.8261 31.5078 27.0003 29.3096 27.6872L25.3345 28.9294C25.047 29.0193 24.769 28.9283 24.6108 28.7429C22.8418 26.6702 20.8583 23.7785 20.3188 20.8526C20.3009 20.7555 20.3204 20.6759 20.3522 20.6224C20.9367 19.6397 21.9435 18.5257 22.9446 17.551C24.642 15.8984 25.2844 13.273 24.1652 11.035L22.0946 6.8943Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <Button
                onClick={handleAddToCartMobile}
                className="py-[12px] h-[48px] rounded-[42px] px-6 flex-auto"
              >
                giỏ hàng
              </Button>
              <Button
                onClick={handleBuyNow}
                variant={"ghost"}
                className=" bg-gray-200 hover:bg-gray-200 text-primary hover:text-primary py-[12px] h-[48px] rounded-[42px]  px-6 flex-auto"
              >
                Mua ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
