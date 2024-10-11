"use client";
import Image from "next/image";
import Product from "./product";
import { useEffect, useState } from "react";
import { useCartContext } from "@/components/cart";

import {
  AttributeType,
  ProductAttributeType,
  VariantInCartType,
} from "@/types";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { stringifyArray } from "@/lib/common";

import { toast } from "sonner";
import { useSheetContext } from "../sheet-product";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ButtonSelect } from "../ui/button-select";
import CartPlusIcon from "../icons/cart-plus-icon";
import { Label } from "../ui/label";
import CartCheckedIcon from "../icons/cart-checked-icon";

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

export function TopDiscountSection({
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
            <h2 className="pb-2 text-base md:text-lg text-white font-semibold absolute inline-block w-full text-center -top-1 left-1/2 -translate-x-1/2">
              Sản phẩm bán chạy
            </h2>
          </div>

          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export const ProductList = ({ products }: any) => {
  return (
    <div>
      <div className="grid md:grid-cols-5 md:gap-3 grid-cols-2 gap-2">
        {products.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export function SheetProduct() {
  const { open, setOpen, variant, setVariant, product }: any =
    useSheetContext();

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart }: any = useCartContext();

  useEffect(() => {
    if (!product) return;
    setVariant(product.variants[0]);
    setQuantity(1);
  }, [product, setVariant]);

  if (!product) return null;
  const handleAddToCart = () => {
    if (!variant) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || product.image || "",
      name: product.name,
    };
    addToCart(variantMapped, quantity);
    toast.info("Sản phẩm đã được thêm vào giỏ hàng");
    setOpen(false);
  };

  const handleBuyNow = () => {
    if (!variant) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || product.image || "",
      name: product.name,
    };
    addToCart(variantMapped, quantity);
    setOpen(false);
    router.push("/gio-hang");
  };
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
    <Sheet onOpenChange={(value) => setOpen(value)} open={open}>
      <SheetContent
        className="p-4 rounded-t-3xl md:rounded-t-none"
        onOpenAutoFocus={(e) => e.preventDefault()}
        side={"bottom"}
      >
        <SheetHeader className="border-b border-divider-1pt p-1">
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
              <p className="text-sm text-gray-700 font-semibold">Tạm tính</p>
              <p className="text-xl text-gray-1000 font-medium">
                {" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(variant?.salePrice * quantity)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-700 font-medium">
                Tiết kiệm được
              </p>
              <p className="font-medium text-gray-1000">
                {" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format((variant?.price - variant?.salePrice) * quantity)}
              </p>
            </div>
          </div>
        </div>
        <SheetFooter className="p-4 flex [&>*]:flex-auto gap-2 md:gap-3 rounded-t-3xl md:rounded-t-none shadow-sm md:shadow-none border-t border-transparent md:border-divider-1pt">
          <Button
            onClick={handleBuyNow}
            className="py-[12px] h-[48px]  px-6 flex-auto"
          >
            Mua ngay
          </Button>
          <Button
            onClick={handleAddToCart}
            variant={"outline"}
            className=" border-primary  text-primary hover:text-primary py-[12px] h-[48px]  px-6 flex-auto "
          >
            <CartPlusIcon className="w-9 h-9 text-primary" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export function DialogProduct() {
  const { openDialog, setOpenDialog, variant, setVariant, product }: any =
    useSheetContext();

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart, headerRef, cartRef }: any = useCartContext();

  useEffect(() => {
    if (!product) return;
    setVariant(product.variants[0]);
    setQuantity(1);
  }, [product, setVariant]);

  if (!product) return null;
  const handleAddToCart = () => {
    if (!variant) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }

    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || product.image || "",
      name: product.name,
    };
    addToCart(variantMapped, quantity);
    setOpenDialog(false);
    headerRef.current.scrollIntoView({ behavior: "smooth" });
    cartRef.current.classList.toggle("list-product-show", true);
    setTimeout(() => {
      cartRef.current.classList.toggle("list-product-show", false);
    }, 2000);
  };

  const handleBuyNow = () => {
    if (!variant) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    const variantMapped: VariantInCartType = {
      ...variant,
      image: variant.image || product.image || "",
      name: product.name,
    };
    addToCart(variantMapped, quantity);
    setOpenDialog(false);
    router.push("/gio-hang");
  };
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
    <Dialog onOpenChange={(value) => setOpenDialog(value)} open={openDialog}>
      <DialogContent
        className="p-4 rounded-3xl  w-[625px]  md:max-w-[625px] "
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="border-b border-divider-1pt p-1">
          <SheetTitle>Chọn số lượng, thuộc tính</SheetTitle>
        </DialogHeader>
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
              <p className="text-sm text-gray-700 font-semibold">Tạm tính</p>
              <p className="text-xl text-gray-1000 font-medium">
                {" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(variant?.salePrice * quantity)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-700 font-medium">
                Tiết kiệm được
              </p>
              <p className="font-medium text-gray-1000">
                {" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format((variant?.price - variant?.salePrice) * quantity)}
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="p-4 flex [&>*]:flex-auto gap-2 md:gap-3 rounded-t-3xl md:rounded-t-none shadow-sm md:shadow-none border-t border-transparent md:border-divider-1pt">
          <Button
            onClick={handleAddToCart}
            variant={"outline"}
            className=" border-primary  text-primary hover:text-primary py-[12px] h-[48px] px-6 flex-auto"
          >
            <CartPlusIcon className="w-9 h-9 text-primary" />
          </Button>
          <Button
            onClick={handleBuyNow}
            className="py-[12px] h-[48px] px-6 flex-auto "
          >
            Mua ngay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const Attribute = ({ attribute, valueSelect, selectVariant }: any) => {
  return (
    <div>
      <p className="text-gray-700 mb-1 font-medium">{attribute.name}</p>
      <div className="quantity-tag-wrapper flex flex-wrap gap-2">
        {attribute.values.map((value: string, index: number) => {
          return (
            <ButtonSelect
              key={index}
              selected={valueSelect == value}
              onClick={() => selectVariant(attribute.name, value)}
            >
              {" "}
              {value}
            </ButtonSelect>
          );
        })}
      </div>
    </div>
  );
};

export function AddToCartDialog() {
  const { open, setOpen }: any = useCartContext();
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="sm:max-w-[425px] bg-[#090d14cc] border-none">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription className="text-white text-lg text-center">
            Sản phẩm đã được thêm vào giỏ hàng
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center flex-col gap-2 ">
          <CartCheckedIcon className="w-16 h-16 text-green-500/80" />
          <Button variant={"outline"}>Xem giỏ hàng</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
