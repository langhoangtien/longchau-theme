"use client";
import { useCartContext } from "@/components/cart";
import Cart from "@/components/header/cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { getLastDayOfMonth } from "@/lib/common";
import Image from "next/image";
import Link from "next/link";
export default function CartPage() {
  const {
    products,
    changeQuantity,
    removeFromCart,
    totalProduct,
    setSelected,
    setAllSelected,
    totalPrice,
    subTotal,
  }: any = useCartContext();

  const selectAll = products.every((product: any) => product.selected);
  const handleSelectAll = () => {
    setAllSelected(!selectAll);
  };
  return (
    <div className="pb-9">
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
            <Link href="/"> Tiếp tục mua sắm</Link>
          </Button>
          {totalProduct ? (
            <div className="flex gap-5 flex-col md:flex-row relative items-start">
              <div className="md:rounded-xl md:basis-[804px] basis-full md:shrink-0 overflow-hidden">
                <div className="py-2 px-4 flex items-center text-caption2 font-medium bg-white">
                  <div className="inline-flex items-center mr-auto">
                    <Checkbox
                      onCheckedChange={handleSelectAll}
                      checked={selectAll}
                      id="select-all"
                    />
                    <label htmlFor="select-all" className="ml-2">
                      Chọn tất cả ({totalProduct})
                    </label>
                  </div>
                  <div className="hidden md:block text-center basis-[110px]">
                    Giá thành
                  </div>
                  <div className="hidden md:block text-center basis-[108px] mr-1 ml-4">
                    Số lượng
                  </div>
                  <div className="hidden md:block text-center basis-[100px] ml-1 mr-14">
                    Thuộc tính
                  </div>
                </div>
                <div className="md:p-4 pb-4 px-0 md:mt-0.5 divide-y divide-divider-1pt bg-white [&>*]:px-4 [&>*]:py-4 [&>:first-child]:pt-0 [&>:last-child]:pb-0">
                  {products.map((product: any) => (
                    <ProductItem
                      removeFromCart={removeFromCart}
                      changeQuantity={changeQuantity}
                      key={product._id}
                      product={product}
                      setSelected={setSelected}
                    />
                  ))}
                </div>
              </div>
              <div className="sticky top-2.5 w-full">
                <div className="rounded-t-xl py-3 px-4 bg-white space-y-3">
                  <Button className="py-2.5 px-3 w-full rounded-lg  text-primary items-center text-base  justify-between bg-gray-100 hover:bg-gray-100 font-medium">
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
                        <span className="text-base ">Tổng tiền</span>
                      </div>
                      <div className="text-base font-medium text-text-primary">
                        7.605.000đ
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-base ">Giảm giá trực tiếp</span>
                      </div>
                      <span className="text-sm omd:text-base font-medium">
                        -2.628.300đ
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-base">Giảm giá voucher</span>
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
                      <span className="umd:text-body2 omd:text-base font-medium text-semantic-warning">
                        0đ
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-base ">Tiết kiệm được</span>
                      </div>
                      <span className="umd:text-body2 omd:text-base font-medium text-semantic-warning">
                        2.628.300đ
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-stroke-disable" />
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <div className="text-heading3 font-semibold text-text-primary">
                        Thành tiền
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-lg font-semibold text-primary">
                          {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(totalPrice)}
                        </span>
                        <span className="ml-[6px] text-gray-500 font-medium line-through">
                          4.976.700đ
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link className="my-2" href="/thanh-toan">
                    <Button className="w-full">Mua hàng</Button>
                  </Link>
                  <div className="text-text-primary text-base text-center indent-4">
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
                    <div> của Nhà thuốc FPT Long Châu</div>
                  </div>
                </div>
                <div
                  style={{
                    height: 24,
                    background: "white",
                    mask: "radial-gradient(11.52px at 50% calc(100% - 15.45px), rgb(0, 0, 0) 99%, rgba(0, 0, 0, 0) 101%) calc(50% - 20.6px) 0px / 41.2px 100%, radial-gradient(11.52px at 50% calc(100% + 5.15px), rgba(0, 0, 0, 0) 99%, rgb(0, 0, 0) 101%) 50% calc(100% - 10.3px) / 41.2px 100% repeat-x",
                  }}
                />
              </div>
            </div>
          ) : (
            <CarEmpty />
          )}
        </div>
      </div>
    </div>
  );
}
const CarEmpty = () => (
  <div className="text-center pb-6">
    <picture>
      <img
        src="/icons/png/illustration-cart-empty.png"
        alt=""
        width={300}
        height={200}
        className="inline-block"
      />
    </picture>
    <div className="mt-3">
      <div className="text-sm md:text-base font-semibold ">
        Chưa có sản phẩm nào trong giỏ
      </div>
      <div className="mt-1 text-sm md:text-base font-normal ">
        Cùng khám phá hàng ngàn sản phẩm
        <div>tại Ludmila nhé!</div>
      </div>
    </div>
    <Link href="/">
      <Button className="bg-primary mt-3">Khám phá ngay</Button>
    </Link>
  </div>
);

const ProductItem = ({
  product,
  changeQuantity,
  removeFromCart,
  setSelected,
}: any) => {
  const handleIncerementQuantity = () => {
    const quantity = product.quantity + 1;
    changeQuantity(product._id, quantity);
  };
  const handleDecrementQuantity = () => {
    const quantity = product.quantity - 1;
    if (quantity < 1) return;
    changeQuantity(product._id, quantity);
  };
  const handleChangeQuantity = (e: any) => {
    const quantity = e.target.value;
    if (!quantity || quantity <= 0) changeQuantity(product._id, 1);
    else changeQuantity(product._id, parseInt(quantity));
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };
  const handleSelect = (checked: any) => {
    setSelected(product._id, checked);
  };
  return (
    <div key={product._id} style={{ opacity: 1 }}>
      <div>
        <div className="items-start flex md:items-center">
          <div className="md:mr-3 mr-2 flex items-center justify-center shrink-0 p-0.5 self-start mt-[18px] relative">
            <Checkbox
              onCheckedChange={handleSelect}
              checked={product.selected}
            />
            <div className="cursor-not-allowed absolute inset-0 z-10 hidden" />
          </div>
          <Link
            className="self-start shrink-0 p-1.5 rounded-lg ring-1  mr-3"
            href={`/san-pham/a-${product.productId}`}
          >
            <Image
              alt={product.name}
              width={48}
              height={48}
              className="object-cover w-[48px] h-[48px] rounded-lg"
              src={product.image}
              style={{ color: "transparent" }}
            />
          </Link>
          <div className="flex flex-auto flex-wrap md:flex-nowrap flex-col md:flex-row md:items-center md:justify-between">
            <div className="shrink-0 md:shink md:basis-[260px] basis-full">
              <Link
                className="line-clamp-2 md:line-clamp-3"
                href={`/san-pham/a-${product.productId}`}
              >
                {product.name}
              </Link>
            </div>
            <div className="md:text-right md:flex-col flex flex-wrap items-baseline md:items-end md:ml-4">
              <span className="text-primary md:block umd:mr-2 font-semibold">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.salePrice * product.quantity)}
              </span>
              <span className="text-sm text-gray-500 line-through font-medium">
                {product.discount
                  ? Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price * product.quantity)
                  : null}
              </span>
            </div>
            <div className="flex shrink-0 gap-2 md:mx-4 mt-2 :flex-wrap ml-[-72px] justify-end mr-[-36px] items-center">
              <div className="relative">
                <div
                  className="border-stroke-default inline-flex h-[34px] items-center rounded-[34px] border px-[3px]"
                  style={{ height: 32 }}
                >
                  <button
                    disabled={product.quantity === 1}
                    onClick={handleDecrementQuantity}
                    className="flex h-[28px] w-[28px] shrink-0 items-center justify-center"
                  >
                    <svg
                      width={16}
                      height={16}
                      className="[&>*]:stroke-current"
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
                  </button>
                  <input
                    type="text"
                    onChange={handleChangeQuantity}
                    inputMode="numeric"
                    className="border-stroke-default mx-[3px] h-full w-[38px] shrink-0 border-l border-r bg-inherit px-[3px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none disabled:text-text-hint_text_grey disabled:cursor-not-allowed"
                    value={product.quantity}
                  />
                  <button
                    onClick={handleIncerementQuantity}
                    className="flex h-[28px] w-[28px] shrink-0 items-center justify-center "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                    >
                      <path
                        d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="cursor-not-allowed absolute inset-0 z-10 hidden" />
              </div>

              {product.attributes.length ? (
                <div className="flex flex-col gap-1 w-[100px]">
                  {product.attributes.map((attr: any) => (
                    <Badge key={attr.value} variant="outline">
                      {attr.value}
                    </Badge>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-gray-600 font-semibold w-[100px] flex items-center">
                  Không
                </span>
              )}
            </div>
          </div>
          <Button
            onClick={handleRemoveFromCart}
            className="ml-3 md:ml-4 h-10 p-[3px] text-gray-500 hover:text-gray-400 shrink-0 hover:bg-transparent bg-transparent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px]"
            >
              <path
                d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z"
                fill="currentColor"
              />
              <path
                d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
      {!!product.discount && (
        <div className="p-2 bg-gray-100 rounded-lg divide-y [&>*]:py-2 [&>:first-child]:pt-0 [&>:last-child]:pb-0 md:ml-[108px] ml-8 mt-3">
          <div style={{ opacity: 1 }}>
            <div className="flex items-center gap-2">
              <Image
                alt="Giảm ngay 300,000đ khi mua Online áp dụng đến 18/08"
                loading="lazy"
                width={36}
                height={36}
                className="shrink-0 w-9 h-9 ring-1 ring-inset ring-stroke-disable rounded overflow-hidden object-contain"
                src="https://nhathuoclongchau.com.vn/estore-images/cart/promotion/promotion_available.svg"
                style={{ color: "transparent" }}
              />
              <div className="text-sm flex-auto basis-full font-medium whitespace-pre-line">
                Giảm ngay{" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price - product.salePrice)}{" "}
                khi mua Online áp dụng đến {getLastDayOfMonth()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
