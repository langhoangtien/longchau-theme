"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function OrderComplete(props: any) {
  const slug = props?.params?.slug ?? null;
  const orders = localStorage.getItem("orders");
  const router = useRouter();
  const orderJson = orders ? JSON.parse(orders) : [];
  const order = orderJson.find((item: any) => item._id === slug);
  if (!order) {
    return notFound();
  }
  const date = new Date(order.createdAt);
  date.setDate(date.getDate() + 2);
  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="container md:container css-1zrptk">
      <div className="mt-5 mb-4 flex justify-center">
        <div className="w-full max-w-[448px]">
          <div className="flex justify-center">
            <picture>
              <img
                className="w-full"
                src="/icons/png/dat-hang-thanh-cong.svg"
                width={327}
                alt=""
              />
            </picture>
          </div>
          <div className="-mt-4 w-full rounded-xl bg-white p-4">
            <span className="text-blue-5 text-heading3 md:text-heading2 mb-2 block text-center font-semibold">
              Đặt hàng thành công
            </span>
            <span className="text-gray-10 text-body2 md:text-body1 m-auto block w-[80%] text-center font-normal">
              Đơn hàng đang được xử lý tại Ludmila.
            </span>
            <div
              className="ant-divider css-10ed4xt ant-divider-horizontal ant-divider-dashed my-3"
              role="separator"
            />
            <div className="flex justify-between">
              <span className="text-sm text-start font-medium">
                Thời gian nhận hàng dự kiến
              </span>
              <span className="text-sm text-text-primary text-end font-normal">
                Từ 13:00 - 14:00 ngày{" "}
                {Intl.DateTimeFormat("vi-VN").format(date)}
              </span>
            </div>
            <div
              className="ant-divider css-10ed4xt ant-divider-horizontal ant-divider-dashed my-3"
              role="separator"
            />
            <div className="flex items-center justify-between md:mb-3">
              <div className="text-sm font-medium">Phương thức thanh toán</div>
            </div>
            <div className="my-3 flex items-center">
              <div className="h-[40px] w-[40px]">
                <Image
                  alt="payment-method"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  src="/icons/png/cod.webp"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="text-label2 text-text-primary ml-3 flex-1 text-left font-normal">
                Thanh toán tiền mặt khi nhận hàng
              </div>
            </div>
            <div className="flex gap-4 pt-1">
              <Button className="w-full">Chi tiết đơn hàng</Button>

              <Button
                onClick={backToHome}
                className="w-full"
                variant="secondary"
              >
                Về trang chủ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
