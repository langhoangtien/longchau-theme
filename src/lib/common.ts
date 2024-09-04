import { HOST_API } from "@/config-global";
import { ProductType, ProductVariantType } from "@/types";

export const encodeData = (data: any) =>
  encodeURIComponent(JSON.stringify(data));
export const convertImagePathToUrl = (
  filePath: string,
  dimension: string | number
) => {
  if (!filePath) return undefined;
  return `${HOST_API}/files${
    dimension ? `/${dimension}x${dimension}` : ""
  }/${filePath}`;
};

export const convertImageUrlToPath = (url = "") =>
  url ? url.split("/").pop() : undefined;

type Arr = { name: string; value: string };
export const stringifyArray = (arrs: Arr[]) =>
  arrs
    .map((obj) => JSON.stringify(obj))
    .sort()
    .join();

export const mappedProduct = (product: ProductType) => {
  const varitants: ProductVariantType[] = product.variants.map(
    (variant: ProductVariantType) => {
      const image = variant.image
        ? convertImagePathToUrl(variant.image, 250)
        : undefined;
      return {
        ...variant,
        image: image,
      };
    }
  );
  return {
    ...product,
    image: convertImagePathToUrl(product.image, 250),
    variants: varitants,
  };
};
