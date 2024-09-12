"use client";
import { useCartContext } from "@/components/cart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentMethods from "@/components/payment/payment-methods";
import { PaymentAddressForm2 } from "@/components/payment/payment-address";
import { useRef, useState } from "react";
import PaymentSummery from "@/components/payment/payment-summery";
import { HOST_API } from "@/config-global";

import { useRouter } from "next/navigation";

export enum PAYMENT_METHOD {
  COD = "cod",
  QR = "qr",
  VNPAY_ATM = "vnpay_atm",
  CARD = "card",
  ZALOPAY = "zalopay",
  MOMO = "momo",
  VNPAY = "vnpay",
}
const paymentMethods = [
  {
    method: PAYMENT_METHOD.COD,
    label: " Thanh toán tiền mặt khi nhận hàng",
    image: "/icons/png/cod.webp",
    disabled: false,
  },
  {
    method: PAYMENT_METHOD.QR,
    label: "Thanh toán bằng chuyển khoản (QR Code)",
    image: "/icons/png/qr.webp",
    disabled: false,
  },
  {
    method: PAYMENT_METHOD.VNPAY_ATM,
    label: "Thanh toán bằng thẻ ATM nội địa và tài khoản ngân hàng",
    image: "/icons/png/vnpay_atm.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.CARD,
    label:
      "Thanh toán bằng thẻ quốc tế Visa, Master, JCB, AMEX (GooglePay, ApplePay)",
    image: "/icons/png/card.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.ZALOPAY,
    label: "Thanh toán bằng ZaloPay",
    image: "/icons/png/zalopay.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.MOMO,
    label: "Thanh toán bằng MoMo",
    image: "/icons/png/momo.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.VNPAY,
    label: "Thanh toán bằng VNPAY",
    image: "/icons/png/vnpay.webp",
    disabled: true,
  },
];

export default function Checkout() {
  const { products, orderCompleted }: any = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const productSelected = products.filter((item: any) => item.selected);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const handleSubmit = () => {
    buttonRef2.current?.click();
  };
  const router = useRouter();
  const handlePost = async (data: any) => {
    const productMappped = productSelected.map((product: any) => ({
      productVariantId: product._id,
      quantity: product.quantity,
    }));
    const body = {
      ...data,
      paymentMethod,
      products: productMappped,
    };
    try {
      const orderJson = await fetch(`${HOST_API}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const order = await orderJson.json();
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem("orders", JSON.stringify(orders.concat(order)));
      orderCompleted();
      router.push("/hoan-thanh/" + order._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="md:container-lite relative">
        <div>
          <Button
            variant="link"
            className="my-1 md:my-2 inline-flex items-center py-2 font-medium ml-4 md:ml-0 px-0"
          >
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5"
            >
              <path
                d="M16.668 4.29289C17.0586 4.68342 17.0586 5.31658 16.668 5.70711L10.3752 12L16.668 18.2929C17.0586 18.6834 17.0586 19.3166 16.668 19.7071C16.2775 20.0976 15.6444 20.0976 15.2538 19.7071L8.25383 12.7071C7.86331 12.3166 7.86331 11.6834 8.25383 11.2929L15.2538 4.29289C15.6444 3.90237 16.2775 3.90237 16.668 4.29289Z"
                fill="currentColor"
              />
            </svg>
            <Link href="/gio-hang">Quay lại giỏ hàng</Link>
          </Button>
          <div className="relative z-0 flex flex-col md:flex-row items-start gap-5">
            <div className="md:basis-[804px] basis-full md:shrink-0">
              <div className="text-base mb-2 ml-4 md:ml-0 font-medium">
                Danh sách sản phẩm
              </div>
              <div className="md:rounded-xl overflow-hidden">
                <div className="px-0 md:mt-0.5 divide-divider-1pt [&>*]:px-4 divide-y bg-white p-4 [&>*]:py-4 [&>:first-child]:pt-0 [&>:last-child]:pb-0">
                  {products.map((product: any) => (
                    <ProductItem product={product} key={product._id} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div dir="ltr" data-orientation="horizontal">
                  <div className="flex flex-wrap gap-3 items-center px-4 md:px-0">
                    <span className="flex-auto text-label2 text-text-primary font-medium basis-full md:basis-auto">
                      Chọn hình thức nhận hàng
                    </span>
                    <div className="basis-full md:basis-auto">
                      <Tabs defaultValue="account">
                        <TabsList className="grid p-0 w-full bg-white grid-cols-2">
                          <TabsTrigger className="h-full" value="account">
                            Giao hàng tận nơi
                          </TabsTrigger>
                          <TabsTrigger className="h-full" value="password">
                            Nhận tại cửa hàng
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                  <div className="mt-2 px-4 py-4 bg-white">
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:rt:-trigger-home"
                      id="radix-:rt:-content-home"
                      tabIndex={-1}
                      style={{}}
                    >
                      <div>
                        <div className="flex flex-col gap-4 md:gap-6">
                          {/* <PaymentAddressForm buttonRef={buttonRef} /> */}

                          <PaymentAddressForm2
                            callback={handlePost}
                            buttonRef={buttonRef2}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="inactive"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:rt:-trigger-store"
                      id="radix-:rt:-content-store"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="mt-1 px-4 py-3 bg-white md:rounded-b-xl">
                    <div className="flex gap-3 items-center">
                      <p className="text-sm  md:text-base">
                        Yêu cầu xuất hóa đơn điện tử
                      </p>
                      <button
                        type="button"
                        role="switch"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        className="w-11 h-6 bg-gray-300 rounded-full data-[state=checked]:bg-primary transition-[background-color] ease-in-out duration-300 ml-auto"
                      >
                        <span
                          data-state="unchecked"
                          className="block w-5 h-5 rounded-full ml-0.5 bg-white data-[state=checked]:ml-[22px] transition-[margin-left] ease-in-out duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <PaymentMethods
                payment={paymentMethod}
                payments={paymentMethods}
                setPayment={setPaymentMethod}
              />
            </div>
            <PaymentSummery handleSubmit={handleSubmit} />
          </div>
        </div>
        <div className="Toastify" id="cart.root.toast-container-id" />
      </div>
    </div>
  );
}

const ProductItem = ({ product }: any) => (
  <div>
    <div className="items-start flex md:items-center">
      <Link
        className="self-start shrink-0 p-1.5 rounded-lg  mr-3"
        href="/cham-soc-ca-nhan/may-tam-nuoc-cam-tay-6-che-do-halio-professional-cordless-oral-irrigator-34110.html"
      >
        <Image
          alt={product.name}
          width={48}
          height={48}
          className="object-cover h-12 w-12 rounded-md"
          src={product.image}
          style={{ color: "transparent" }}
        />
      </Link>
      <div className="flex flex-auto flex-wrap md:flex-nowrap flex-col md:flex-row md:items-center md:justify-between ">
        <div className="shrink-0 md:shink md:basis-[380px] basis-full">
          <a
            className="text-sm md:text-md line-clamp-2 md:line-clamp-3"
            href="/cham-soc-ca-nhan/may-tam-nuoc-cam-tay-6-che-do-halio-professional-cordless-oral-irrigator-34110.html"
          >
            {product.name}
          </a>
        </div>
        <div className="flex items-center justify-between md:justify-end shrink-0 grow">
          <div className="md:text-right md:flex-col flex flex-wrap items-baseline md:items-end">
            <span className="text-base md:block mr-2 md:mr-0 font-semibold text-gray-1000">
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.salePrice * product.quantity)}
            </span>
            <span className="text-gray-500 text-sm line-through font-medium">
              {product.discount
                ? Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price * product.quantity)
                : null}
            </span>
          </div>
          <div className="md:ml-4 md:basis-[100px] whitespace-nowrap text-end shrink-0 text-sm text-gray-500 ">
            x{product.quantity} Hộp
          </div>
        </div>
      </div>
    </div>
    <div className="p-2 bg-gray-200 rounded-lg divide-y [&>*]:py-2 [&>:first-child]:pt-0 [&>:last-child]:pb-0 md:ml-[72px] mt-3">
      <div style={{ opacity: 1 }}>
        <div className="flex items-center gap-2">
          <Image
            alt="Giảm ngay 300,000đ khi mua Online áp dụng đến 18/08"
            width={36}
            height={36}
            className="shrink-0 w-9 h-9 ring-1 ring-inset ring-stroke-disable rounded overflow-hidden object-contain"
            src="https://nhathuoclongchau.com.vn/estore-images/cart/promotion/promotion_available.svg"
            style={{ color: "transparent" }}
          />
          <div className="text-sm flex-auto basis-full font-medium whitespace-pre-line">
            Giảm ngay 300,000đ khi mua Online áp dụng đến 18/08
          </div>
        </div>
      </div>
    </div>
  </div>
);
