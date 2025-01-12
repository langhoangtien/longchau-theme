import { useCartContext } from "../cart";
import Image from "next/image";
import CartIcon from "../icons/cart-icon";

export default function Cart() {
  const { totalProduct, products, cartRef, removeFromCart }: any =
    useCartContext();

  return (
    <div className="cart-mini relative cart-button">
      <a
        className="inline-flex items-center justify-center w-10 h-10 bg-gray-700/80 rounded-full md:w-11 md:h-11 md:rounded-full"
        href="/gio-hang"
      >
        <div className="relative">
          <span className="align-middle text-xl cart-icon">
            <CartIcon className="h-5 w-5 text-white" />
          </span>

          {totalProduct ? (
            <span className="inline-flex items-center bg-orange-400 text-white cart-badge">
              {totalProduct}
            </span>
          ) : null}
        </div>
      </a>
    </div>
  );
}
