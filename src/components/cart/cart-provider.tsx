"use client";

import { useMemo, useEffect, useReducer, useCallback, useRef } from "react";

import { CartContext } from "./cart-context";

import { ProductVariantType } from "@/types";

export const SHIPPING_THRESHOLD = 500000;
export const SHIPPING_FEE = 30000;
const INITIAL_STATE = {
  products: [],
  totalPrice: 0,
  subTotal: 0,
  totalItems: 0,
  totalProduct: 0,
  shippingFee: SHIPPING_FEE,
  normalPrice: 0,
  variant: null,
  open: false,
};

const getInitialStateFromLocalStorage = () => {
  const storedState = localStorage.getItem("cartState");

  if (!storedState) return INITIAL_STATE;
  return JSON.parse(storedState);
};
const saveStateToLocalStorage = (state: any) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};
const caculateTotal = (products: any) => {
  const totalProduct = products.length;
  const totalItems = products.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  const subTotal = products
    .filter((product: any) => product.selected)
    .reduce((acc: any, item: any) => acc + item.salePrice * item.quantity, 0);
  const normalPrice = products
    .filter((product: any) => product.selected)
    .reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
  const shippingFee = subTotal > SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const totalPrice = subTotal + shippingFee;
  return {
    totalItems,
    totalPrice,
    totalProduct,
    subTotal,
    shippingFee,
    normalPrice,
  };
};

const reducer = (state: any, action: any) => {
  let newState;
  switch (action.type) {
    case "ADD_TO_CART":
      newState = {
        ...state,
        ...caculateTotal(action.payload.products),
        products: action.payload.products,
      };
      saveStateToLocalStorage(newState);
      return { ...newState, open: action.payload.open };
    case "REMOVE_FROM_CART":
      newState = {
        ...state,
        ...caculateTotal(action.payload.products),
        products: action.payload.products,
      };
      saveStateToLocalStorage(newState);
      return newState;

    case "SET_VARIANT":
      newState = {
        ...state,
        variant: action.payload.variant,
      };

      return newState;

    case "SET_DIALOG":
      newState = {
        ...state,
        open: action.payload.open,
      };

      return newState;
    case "ORDER_COMPLETED":
      const products = state.products.filter(
        (product: any) => !product.selected
      );
      newState = { ...INITIAL_STATE, products };
      saveStateToLocalStorage(newState);
      return newState;
    case "INITIALIZE_FROM_LOCAL_STORAGE":
      return { ...action.payload };

    default:
      return state;
  }
};
export function CartProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const initialState = getInitialStateFromLocalStorage();

    dispatch({ type: "INITIALIZE_FROM_LOCAL_STORAGE", payload: initialState });
  }, []);
  const addToCart = useCallback(
    (product: any, quantity: number) => {
      const productInCart = state.products.find(
        (item: any) => item._id === product._id
      );

      const products = productInCart
        ? state.products.map((item: any) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : state.products.concat({ ...product, quantity, selected: true });

      dispatch({
        type: "ADD_TO_CART",
        payload: { products, open: true },
      });
    },

    [state.products]
  );

  const changeQuantity = useCallback(
    (id: string, quantity: number) => {
      const productInCart = state.products.map((item: any) =>
        item._id === id ? { ...item, quantity } : item
      );
      dispatch({
        type: "ADD_TO_CART",
        payload: { products: productInCart, open: false },
      });
    },
    [state.products]
  );
  const removeFromCart = useCallback(
    (id: string) => {
      const productInCart = state.products.filter(
        (item: any) => item._id !== id
      );
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { products: productInCart },
      });
    },
    [state.products]
  );

  const orderCompleted = (products: any[]) => {
    dispatch({
      type: "ORDER_COMPLETED",
      payload: { products },
    });
  };

  const setSelected = useCallback(
    (id: string, select: boolean) => {
      const productsSelected = state.products.map((product: any) =>
        product._id === id ? { ...product, selected: select } : product
      );
      dispatch({
        type: "ADD_TO_CART",
        payload: { products: productsSelected, open: false },
      });
    },
    [state.products]
  );
  const setAllSelected = useCallback(
    (select: boolean) => {
      const productsSelected = state.products.map((product: any) => ({
        ...product,
        selected: select,
      }));
      dispatch({
        type: "ADD_TO_CART",
        payload: { products: productsSelected, open: false },
      });
    },
    [state.products]
  );

  const setVariant = useCallback(
    (variant: ProductVariantType) => {
      dispatch({
        type: "SET_VARIANT",
        payload: { variant: variant },
      });
    },
    [dispatch]
  );

  const setOpen = useCallback(
    (open: boolean) => {
      dispatch({
        type: "SET_DIALOG",
        payload: { open: open },
      });
    },
    [dispatch]
  );
  const contextValue = useMemo(
    () => ({
      ...state,
      addToCart,
      removeFromCart,
      orderCompleted,
      changeQuantity,
      setSelected,
      setAllSelected,
      setVariant,
      setOpen,
    }),
    [
      state,
      addToCart,
      removeFromCart,
      changeQuantity,
      setSelected,
      setAllSelected,
      setVariant,
      setOpen,
    ]
  );
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
