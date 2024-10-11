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
import { ButtonSelect } from "../ui/button-select";
import Phone from "../icons/phone";
import CartPlusIcon from "../icons/cart-plus-icon";

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
          return (
            <ButtonSelect
              key={value}
              onClick={() => selectVariant(attribute.name, value)}
              selected={valueSelect === value}
            >
              {value}
            </ButtonSelect>
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
            variant={"outline"}
            className="border-primary text-primary hover:text-primary py-[14px] h-[48px] text-xl flex-auto px-6"
          >
            <CartPlusIcon className="h-9 w-9" />
          </Button>
          <Button
            onClick={handleBuyNow}
            className="py-[14px] h-[48px] rounded-md text-lg flex-auto px-6"
          >
            Mua ngay
          </Button>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[11] w-full bg-white shadow-2xl">
        <div>
          <div className="shadow-2xl w-full rounded-t-3xl p-4">
            <div className="flex gap-x-2">
              <a
                href="tel:0832667711"
                className="inline-flex items-center justify-center border border-primary  [&>*]:shrink-0 bg-white  p-[12px] h-[44px] w-[44px] rounded-[50px]"
              >
                <Phone className="h-7 w-7 text-primary animate-pulse" />
              </a>
              <Button
                onClick={handleAddToCartMobile}
                variant={"outline"}
                className="border-primary text-primary hover:text-primary py-[12px] h-[44px] px-6 flex-auto"
              >
                <CartPlusIcon className="w-8 h-8 text-primary" />
              </Button>
              <Button
                onClick={handleBuyNow}
                className="py-[12px] h-[44px]  px-6 flex-auto"
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
