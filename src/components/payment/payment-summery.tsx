import { useRouter } from "next/navigation";
import { useCartContext } from "../cart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
export default function PaymentSummery({ handleSubmit }: any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { totalPrice, normalPrice, subTotal, shippingFee }: any =
    useCartContext();
  const handleRedirect = () => {
    router.push("/thanh-toan");
  };
  return (
    <div className={`sticky top-2.5 w-full ${handleSubmit ? "mt-7" : ""} `}>
      <div className="rounded-t-xl py-3 px-4 bg-white space-y-3">
        <Button
          onClick={() => setOpen(true)}
          className="py-2.5 px-3 w-full rounded-lg  text-primary items-center text-base  justify-between bg-gray-100 hover:bg-gray-100 font-medium"
        >
          Áp dụng ưu đãi để được giảm giá
          <svg
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-1 shrink-0 text-icon-primary"
          >
            <path
              d="M9.25383 4.29289C8.86331 4.68342 8.86331 5.31658 9.25383 5.70711L15.5467 12L9.25383 18.2929C8.86331 18.6834 8.86331 19.3166 9.25383 19.7071C9.64436 20.0976 10.2775 20.0976 10.668 19.7071L17.668 12.7071C18.0586 12.3166 18.0586 11.6834 17.668 11.2929L10.668 4.29289C10.2775 3.90237 9.64435 3.90237 9.25383 4.29289Z"
              fill="currentColor"
            />
          </svg>
        </Button>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-base">Tổng tiền</span>
            </div>
            <div className="text-base line-through font-medium ">
              {Intl.NumberFormat("vi-VN", { currency: "VND" }).format(
                normalPrice
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-base ">Giảm giá trực tiếp</span>
            </div>
            <span className="text-sm md:text-base font-semibold text-orange-500">
              -
              {Intl.NumberFormat("vi-VN", { currency: "VND" }).format(
                normalPrice - subTotal
              )}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-body1 text-text-secondary">
                Giảm giá voucher
              </span>
              <button data-state="closed" className="ml-2">
                <svg
                  className="w-4 h-4 text-icon-tertiary"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24.25 32C23.4216 32 22.75 32.6716 22.75 33.5C22.75 34.3284 23.4216 35 24.25 35C25.0784 35 25.75 34.3284 25.75 33.5C25.75 32.6716 25.0784 32 24.25 32ZM24.25 13C20.8864 13 18 15.8846 18 19.25C18 19.9404 18.5596 20.5 19.25 20.5C19.8541 20.5 20.358 20.0715 20.4746 19.5019L20.4935 19.3778L20.5055 19.0587C20.6142 17.1536 22.3307 15.5 24.25 15.5C26.2346 15.5 28 17.2634 28 19.25C28.0011 20.437 27.5794 21.29 26.3804 22.6455L26.1734 22.8762L25.1461 23.9739C23.5147 25.7467 22.8251 26.9703 22.8379 28.7589C22.8428 29.4493 23.4065 30.0049 24.0968 30.0001C24.6577 29.996 25.1297 29.6231 25.2843 29.1132L25.3143 28.9932L25.3323 28.8689L25.3379 28.7411L25.3409 28.5793C25.377 27.7786 25.7351 27.0936 26.6221 26.0726L26.8066 25.8638L27.8216 24.7772C29.7314 22.7192 30.502 21.3691 30.5 19.2488C30.5 15.8821 27.6147 13 24.25 13Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <span className="text-sm md:text-base font-semibold text-orange-500">
              0đ
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-base">Tiết kiệm được</span>
            </div>
            <span className="text-sm md:text-base font-semibold text-orange-500">
              {Intl.NumberFormat("vi-VN", { currency: "VND" }).format(
                normalPrice - subTotal
              )}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className=" text-text-secondary">Phí vận chuyển</span>
            </div>
            <div className="font-medium text-primary">
              {shippingFee
                ? Intl.NumberFormat("vi-VN", {
                    currency: "VND",
                  }).format(shippingFee)
                : "Miễn phí"}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-stroke-disable" />
        <div>
          <div className="flex items-center justify-between">
            <div className="text-heading3 font-semibold ">Thành tiền</div>
            <div className="flex items-baseline">
              <span className="text-sm line-through strike-low">
                {Intl.NumberFormat("vi-VN", { currency: "VND" }).format(
                  normalPrice
                )}
              </span>
              <span className="ml-[6px] text-xl text-primary font-semibold">
                {Intl.NumberFormat("vi-VN", { currency: "VND" }).format(
                  totalPrice
                )}
              </span>
            </div>
          </div>
        </div>
        {handleSubmit && (
          <Button
            onClick={handleSubmit}
            className="py-[12px] px-[24px] h-[48px]  w-full"
          >
            Hoàn tất
          </Button>
        )}
        {!handleSubmit && (
          <Button
            onClick={handleRedirect}
            className="py-[12px] px-[24px] h-[48px]  w-full"
          >
            Xác nhận đơn hàng
          </Button>
        )}
        <div className=" text-sm text-center indent-4">
          <div>Bằng việc tiến hành đặt mua hàng, bạn đồng ý với </div>
          <a
            className="font-medium underline underline-offset-[3px]"
            href="/tos"
          >
            Điều khoản dịch vụ
          </a>
          <span> và </span>
          <a
            className="font-medium underline underline-offset-[3px]"
            href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
          >
            Chính sách xử lý dữ liệu cá nhân
          </a>
          <div> của Ludmila</div>
        </div>
      </div>
      <div
        style={{
          height: 24,
          background: "white",
          mask: "radial-gradient(11.52px at 50% calc(100% - 15.45px), rgb(0, 0, 0) 99%, rgba(0, 0, 0, 0) 101%) calc(50% - 20.6px) 0px / 41.2px 100%, radial-gradient(11.52px at 50% calc(100% + 5.15px), rgba(0, 0, 0, 0) 99%, rgb(0, 0, 0) 101%) 50% calc(100% - 10.3px) / 41.2px 100% repeat-x",
        }}
      />
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="sm:max-w-[625px] w-full bg-gray-100 border-none rounded-md p-0">
          <DialogHeader className="p-4">
            <DialogTitle className="text-xl font-semibold">
              Ưu đãi dành cho bạn
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-x-hidden h-full pb-9">
            <div className="px-4 py-2 bg-white">
              <form>
                <div className="pl-4 border rounded-lg overflow-hidden inline-flex items-center bg-white w-full">
                  <div className="w-full relative">
                    <input
                      autoComplete="off"
                      placeholder="Nhập mã giảm giá"
                      name="voucherCode"
                      className="pr-14 bg-inherit peer w-full outline-none text-body1 text-text-primary caret-text-focus placeholder-text-hint_text_white disabled:cursor-not-allowed disabled:bg-inherit"
                      defaultValue=""
                    />
                    <svg
                      role="button"
                      width={24}
                      height={24}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-icon-secondary hidden"
                      viewBox="0 0 25 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <Button onClick={(e) => e.preventDefault()}> Xác nhận</Button>
                </div>
              </form>
            </div>
            <div className="mt-[100px] md:mt-[180px] grow flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/icons/svg/empty-voucher.png"
                  alt="long chau"
                  width={200}
                  height={200}
                  className="inline-block"
                />
                <p className="mt-5 text-sm text-gray-600">
                  Nhập mã giảm giá để được áp dụng những ưu đãi
                </p>
              </div>
            </div>
          </div>
          <DialogFooter className="p-4 flex [&>*]:flex-auto gap-2 md:gap-3 md:rounded-t-none shadow-sm md:shadow-none border-t border-transparent md:border-divider-1pt bg-white rounded-t-none isolate">
            <div>
              <p className="text-sm text-gray-600 py-2">Vui lòng chọn ưu đãi</p>
              <Button className="w-full py-6">Áp dụng</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
