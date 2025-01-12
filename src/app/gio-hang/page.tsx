"use client";
import { useCartContext } from "@/components/cart";
import MinusIcon from "@/components/icons/minus-icon";
import TrashIcon from "@/components/icons/trash-icon";
import LineLoading from "@/components/loading/loading-line";
import SplashScreen from "@/components/loading/splash-screen";
import PaymentSummery from "@/components/payment/payment-summery";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
    loading,
  }: any = useCartContext();

  const selectAll = products.every((product: any) => product.selected);
  const handleSelectAll = () => {
    setAllSelected(!selectAll);
  };
  if (loading)
    return (
      <div className="w-full aspect-video">
        <LineLoading />;
      </div>
    );
  return (
    <div className="pb-9">
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
                    className="rounded-sm h-4 w-4"
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

                <div className="hidden md:block text-center basis-[100px] ml-1 mr-14">
                  Số lượng
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
            <PaymentSummery />
          </div>
        ) : (
          <CarEmpty />
        )}
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
              className="rounded-sm h-4 w-4"
              onCheckedChange={handleSelect}
              checked={product.selected}
            />
            <div className="cursor-not-allowed absolute inset-0 z-10 hidden" />
          </div>
          <Link
            className="self-start shrink-0 p-1 border-gray-200 rounded-lg border mr-3"
            href={`/san-pham/a-${product.productId}`}
          >
            <Image
              alt={product.name}
              width={64}
              height={64}
              className="object-cover w-16 h-16 rounded-lg"
              src={product.image}
              style={{ color: "transparent" }}
            />
          </Link>
          <div className="flex flex-auto flex-wrap md:flex-nowrap flex-col md:flex-row md:items-center md:justify-between">
            <div className="shrink-0 md:shink md:basis-[260px] basis-full">
              <Link
                className="line-clamp-1 md:line-clamp-2 text-sm md:text-base font-medium text-gray-800 "
                href={`/san-pham/a-${product.productId}`}
              >
                {product.name}
              </Link>
              {!!product.attributes.length && (
                <div className="flex gap-0.5 pt-0.5">
                  {product.attributes.map((attr: any) => (
                    <span
                      key={attr.value}
                      className="bg-gray-100 text-gray-800 text-sm font-normal me-2 px-2.5 py-1 rounded-sm border "
                    >
                      {" "}
                      {attr.value}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="md:text-right md:flex-col flex flex-wrap items-baseline md:items-end md:ml-4">
              <span className="text-primary text-sm md:block mr-2 md:mr-0 font-semibold">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.salePrice * product.quantity)}
              </span>
              <span className="text-xs text-gray-500 line-through font-medium">
                {product.discount
                  ? Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price * product.quantity)
                  : null}
              </span>
            </div>
            <div className="flex shrink-0 gap-2 md:mx-4 mt-2 :flex-wrap md:ml-[-72px] justify-start md:justify-center items-center">
              <div className="relative">
                <div
                  className="border-stroke-default inline-flex h-[34px] items-center rounded-md border px-[3px]"
                  style={{ height: 32 }}
                >
                  <button
                    disabled={product.quantity === 1}
                    onClick={handleDecrementQuantity}
                    className="flex h-[28px] w-[28px] shrink-0 items-center justify-center"
                  >
                    <MinusIcon
                      className={`[&>*]:stroke-current h-4 w-4 ${
                        product.quantity === 1 ? "text-gray-700/80" : ""
                      } `}
                    />
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
            </div>
          </div>
          <Button
            onClick={handleRemoveFromCart}
            className="ml-3 md:ml-4 h-10 p-[3px] text-gray-500 hover:text-gray-400 shrink-0 hover:bg-transparent bg-transparent"
          >
            <TrashIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
