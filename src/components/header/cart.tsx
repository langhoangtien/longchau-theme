import { useCartContext } from "../cart";
import Image from "next/image";

export default function Cart() {
  const { totalProduct, products, cartRef, removeFromCart }: any =
    useCartContext();

  return (
    <div className="cart-mini relative shrink-0 md:ml-auto cart-button">
      <a
        className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full md:w-[134px] md:h-[48px] md:rounded-[42px]"
        href="/gio-hang"
      >
        <div className="relative">
          <span className="estore-icon align-middle text-xl  cart-icon">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.857143C0 0.383756 0.383756 0 0.857143 0H1.49516C2.58141 0 3.2318 0.730277 3.60371 1.40914C3.85162 1.86165 4.03095 2.38649 4.17123 2.86166C4.20922 2.85867 4.2477 2.85714 4.28663 2.85714H18.5692C19.518 2.85714 20.2032 3.76505 19.943 4.67748L17.8542 12.0022C17.4692 13.3522 16.2357 14.2832 14.8319 14.2832H8.03402C6.61861 14.2832 5.37783 13.337 5.00323 11.9721L4.1341 8.8052L2.6957 3.94946L2.69337 3.94096C2.51542 3.29201 2.34842 2.68577 2.10026 2.2328C1.85927 1.79292 1.66716 1.71429 1.49516 1.71429H0.857143C0.383756 1.71429 0 1.33053 0 0.857143ZM7.42857 20C8.69094 20 9.71429 18.9767 9.71429 17.7143C9.71429 16.4519 8.69094 15.4286 7.42857 15.4286C6.16621 15.4286 5.14286 16.4519 5.14286 17.7143C5.14286 18.9767 6.16621 20 7.42857 20ZM15.4286 20C16.6909 20 17.7143 18.9767 17.7143 17.7143C17.7143 16.4519 16.6909 15.4286 15.4286 15.4286C14.1662 15.4286 13.1429 16.4519 13.1429 17.7143C13.1429 18.9767 14.1662 20 15.4286 20Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

          {totalProduct ? (
            <span className="inline-flex items-center bg-orange-400 text-white cart-badge">
              {totalProduct}
            </span>
          ) : null}
        </div>
        <span className="css-14c0258 text-white">Giỏ hàng</span>
      </a>
      <div ref={cartRef} className="list-product cart-list-item">
        <div className="wrapper bg-white">
          <div className="head mb-[8px]">
            <div className="font-semibold">Giỏ hàng</div>
          </div>
          <div className="relative md:max-h-[420px] overflow-y-auto">
            {products.map((product: any) => (
              <CartItem
                product={product}
                removeFromCart={removeFromCart}
                key={product._id}
              ></CartItem>
            ))}
          </div>
          <div className="bottom pt-[16px]">
            <div className="flex items-center justify-between">
              <span className="total-count text-text-tertiary text-[12px] font-bold ">
                {totalProduct} sản phẩm
              </span>
              <a href="/gio-hang">
                <button
                  type="button"
                  className="py-[8px] px-[12px] h-[36px] rounded-[50px] css-10ed4xt bg-blue-500 text-white  estore-btn text-sm  css-1xl6jyi"
                >
                  <span>Xem giỏ hàng</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartItem = ({ product, removeFromCart }: any) => {
  const handRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  return (
    <div style={{ opacity: 1 }}>
      <div className="card-item mb-[8px] flex py-[8px]">
        <div className="img h-[56px] w-[56px]">
          <a href={`/product/${product.productId}`}>
            <div className="h-[44px] w-[46px] rounded-sm overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                width={46}
                height={44}
                alt={product.name}
                src={product.image}
              />
            </div>
          </a>
        </div>
        <div className="info ml-[12px] flex-1 cursor-pointer">
          <a href={`/san-pham/${product.productId}`} className="cursor-pointer">
            <div className=" line-clamp-2 mb-1 font-medium">{product.name}</div>
          </a>
          <div className="bottom flex justify-between">
            <div className="prices flex items-center">
              <span className="new text-blue-500 text-[14px] font-semibold">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.salePrice * product.quantity)}
              </span>
              {product.discount ? (
                <span className=" text-sm ml-[8px] text-[12px] line-through">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price * product.quantity)}
                </span>
              ) : null}
            </div>
            <span className="unit text-[13px] font-medium">
              x{product.quantity} Hộp
            </span>
          </div>
        </div>
        <div
          onClick={handRemoveFromCart}
          className="trash column ml-[16px] inline-flex cursor-pointer items-center"
        >
          <span className="estore-icon text-[18px]  svg-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z" />
              <path d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
