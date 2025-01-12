"use client";
import { ProductType, ProductVariantType, VariantInCartType } from "@/types";
import React, {
  createContext,
  use,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const SheetContext = createContext({});

export const useSheetContext = () => useContext(SheetContext);

export const SheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [variant, setVariant] = useState<ProductVariantType | null>(null);
  const [product, setProduct] = useState<ProductType | null>(null);

  const contextValue = {
    open,
    setOpen,
    variant,
    setVariant,
    product,
    setProduct,
    openDialog,
    setOpenDialog,
  };

  return (
    <SheetContext.Provider value={contextValue}>
      {children}
    </SheetContext.Provider>
  );
};
