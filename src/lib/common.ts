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

export function fDateTime(date: Date) {
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
  });

  return formatter.format(date);
}

function timeAgo(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // Thay đổi đơn vị thời gian
  const oneMinute = 60 * 1000; // 1 phút
  const oneHour = 60 * oneMinute; // 1 giờ
  const oneDay = 24 * oneHour; // 1 ngày
  const oneMonth = 30 * oneDay; // Giả định 1 tháng = 30 ngày
  const oneYear = 365 * oneDay; // Giả định 1 năm = 365 ngày

  if (diff < oneMinute) {
    const seconds = Math.floor(diff / 1000);
    return seconds === 1 ? "1 giây trước" : `${seconds} giây trước`;
  } else if (diff < oneHour) {
    const minutes = Math.floor(diff / oneMinute);
    return minutes === 1 ? "1 phút trước" : `${minutes} phút trước`;
  } else if (diff < oneDay) {
    const hours = Math.floor(diff / oneHour);
    return hours === 1 ? "1 giờ trước" : `${hours} giờ trước`;
  } else if (diff < oneMonth) {
    const days = Math.floor(diff / oneDay);
    return days === 1 ? "1 ngày trước" : `${days} ngày trước`;
  } else if (diff < oneYear) {
    const months = Math.floor(diff / oneMonth);
    return months === 1 ? "1 tháng trước" : `${months} tháng trước`;
  } else {
    const years = Math.floor(diff / oneYear);
    return years === 1 ? "1 năm trước" : `${years} năm trước`;
  }
}

export const timeFormat = (d: string) => {
  const date = new Date(d);
  const raw = fDateTime(date);
  const time = timeAgo(date);
  return { raw, time };
};
