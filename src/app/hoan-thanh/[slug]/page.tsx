"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
export default function OrderComplete(props: any) {
  const [open, setOpen] = React.useState(false);
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
              <Button onClick={() => setOpen(true)} className="w-full">
                Chi tiết đơn hàng
              </Button>

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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
              <DialogTitle>Chi tiết đơn hàng</DialogTitle>
              <DialogDescription>
                <p>
                  Mã đơn hàng:
                  <span className="font-medium ml-1 text-gray-900">
                    {order._id}
                  </span>
                </p>
                <p>
                  Ngày đặt hàng:
                  <span className="font-medium ml-1 text-gray-900">
                    {Intl.DateTimeFormat("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(new Date(order.createdAt))}
                  </span>
                </p>
                <p>
                  Tên khách hàng:
                  <span className="font-medium ml-1 text-gray-900">
                    {order.receiverName}
                  </span>
                </p>
                <p>
                  Số điện thoại:
                  <span className="font-medium ml-1 text-gray-900">
                    {order.phoneNumber}
                  </span>
                </p>
              </DialogDescription>
            </DialogHeader>
            <Table>
              <TableCaption>Danh sách sản phẩm</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] ">Tên sản phẩm</TableHead>
                  <TableHead>Giá</TableHead>
                  <TableHead>Số lượng</TableHead>
                  <TableHead className="text-right">Tổng</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.products.map((product: any) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium ">
                      <p className="line-clamp-2 my-2"> {product.name}</p>
                    </TableCell>
                    <TableCell>
                      {" "}
                      {Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell className="text-right">
                      {Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price * product.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right  font-bold">
                    {Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(order.totalPrice)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
