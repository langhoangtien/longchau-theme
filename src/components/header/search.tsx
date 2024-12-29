"use client";
import { HOST_API } from "@/config-global";
import useClickOutside from "@/hooks/use-click-out-side";
import { useDebounce } from "@/hooks/use-debounce";
import { convertImagePathToUrl, encodeData } from "@/lib/common";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LoadingCircle } from "../ui/loading";
import HeaderSearchHistory from "./header-search-history";

import PreviousArrow from "../icons/previous-arrow";
import CloseIcon from "../icons/close-icon";
import { SearchIcon } from "lucide-react";

export const topSearch = [
  "Bò hầm",
  "Đột quỵ",
  "Heo hầm",
  "Dầu cá",
  "chong tai bien",
  "Omega",
  "E đỏ",
];

interface Product {
  name: string;
  code: string;
  slug: string;
  price: number;
  image: string;
  path: string;
}

export default function Search({
  logoRef,
}: {
  logoRef: React.RefObject<HTMLDivElement>;
}) {
  const refSearchMobile = useRef<HTMLDivElement>(null);
  const refSearchWrap = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const debounceText = useDebounce(value, 500);
  const router = useRouter();
  const searchParams = useSearchParams();
  const valueOfS = searchParams.get("s");

  useEffect(() => {
    if (valueOfS) {
      setValue(valueOfS);
    }
  }, [valueOfS]);

  const handleSearch = () => {
    if (refSearchMobile.current) {
      const searchMobile = refSearchMobile.current;
      searchMobile.classList.toggle("!hidden", false);
      refInput.current?.focus();
    }
  };
  const handleSearchDesktop = () => {
    refSearchMobile.current?.classList.toggle("!hidden", false);
  };
  const handleSearchBack = () => {
    refSearchMobile.current?.classList.toggle("!hidden", true);
  };

  const handleScroll = useCallback(() => {
    const moving = window.pageYOffset;
    const searchElement = searchRef.current;

    if (searchElement) {
      if (moving >= 200) {
        searchElement.classList.add("header-mobile");
        logoRef.current?.classList.add("logo-mobile");
      } else if (moving < 80) {
        searchElement.classList.remove("header-mobile");
        logoRef.current?.classList.remove("logo-mobile");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useClickOutside(refSearchWrap, () => handleSearchBack());
  useEffect(() => {
    const fetchData = async () => {
      if (!debounceText) return;
      setLoading(true);
      setError(null);
      try {
        const filter = encodeData({
          $or: ["name", "code", "slug"].map((item) => ({
            [item]: { $regex: debounceText, $options: "i" },
          })),
        });
        const url = `${HOST_API}/products?limit=3&filter=${filter}`;
        const response = await fetch(url);
        const dataJson = await response.json();
        const { items } = dataJson;
        const dataMapped = items.map((item: any) => ({
          name: item.name,
          code: item.code,
          slug: item.slug,
          price: item.price,
          discount: item.discount,
          image: convertImagePathToUrl(item.image, 250),
          path: `${item.slug}-${item.id}`,
        }));
        setProducts(dataMapped);
      } catch (error) {
        setError("An error occurred while fetching the data.");
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [debounceText]);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.which === 13) {
      handleRedirect();
    }
  };
  const handleRedirect = () => {
    refSearchMobile.current?.classList.toggle("!hidden", true);
    router.push(`/tim-kiem?s=${value}`);
    addHistory(value);
  };

  const addHistory = (search: string) => {
    const searchHistories = localStorage.getItem("searchHistory");
    if (searchHistories) {
      const histories = JSON.parse(searchHistories);
      if (!histories.includes(search)) {
        histories.unshift(search);
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(histories.slice(0, 5))
        );
      }
    } else {
      localStorage.setItem("searchHistory", JSON.stringify([search]));
    }
  };
  return (
    <div
      ref={searchRef}
      className="order-4 md:h-32 h-12 md:order-1 basis-full md:basis-auto col-span-full mt-1.5 grid content-center transition-[width] max-w-[680px]  md:mx-auto md:mt-0  md:grow "
    >
      <div ref={refSearchWrap} className="relative rounded-sm">
        <div>
          <span className="relative inline-flex items-center bg-white md:rounded-sm md:pl-4 w-full pl-3">
            <input
              onFocus={handleSearchDesktop}
              placeholder="Tìm tên sản phẩm, thực phẩm chức năng... m"
              maxLength={200}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onKeyDown={handleKeyPress}
              className="w-full text-ellipsis bg-transparent outline-none placeholder:text-gray-500 placeholder-shown:text-ellipsis md:h-[40px] h-[28px] md:text-base text-sm placeholder:sm"
            />
            <span
              onClick={handleSearch}
              className="absolute w-full h-full t-0 bg-transparent md:hidden "
            ></span>

            {value && (
              <button
                aria-label="clear search"
                onClick={() => setValue("")}
                className="mr-2 items-center h-[20px] w-[20px] shrink-0"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            )}
            <button
              aria-label="search"
              onClick={handleRedirect}
              className="shrink-0 flex justify-center items-center rounded-r-sm bg-primary/50  md:w-10 md:h-10 md:p-[3px] md:ml-3 w-8 h-8 p-[6px] sm:ml-2"
            >
              <SearchIcon className="h-6 w-6 text-white" />
            </button>
          </span>
          <div className="hidden md:block css-1azp7v2">
            <ul className="flex items-center text-white">
              {topSearch.map((item) => (
                <li key={item} className="item">
                  <Link
                    key={item}
                    href={`/tim-kiem?s=${encodeURIComponent(item)}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          ref={refSearchMobile}
          className="!bg-gray-200 md:bg-white shadow md:rounded-2xl !hidden css-1o42jah"
        >
          <div className="h-[52px] min-w-[375px] md:hidden">
            <div className="inner bg-primary px-4 py-2">
              <div>
                <div className="lc-row relative flex flex-wrap  css-1b11mx9">
                  <span
                    onClick={handleSearchBack}
                    className="text-white mr-4 css-8u32eo"
                  >
                    <PreviousArrow className="h-6 w-6" />
                  </span>
                  <span className="relative inline-flex items-center bg-white rounded-md h-[34px] border border-gray-200  pl-3 grow">
                    <input
                      ref={refInput}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Tìm tên sản phẩm, mỹ phẩm, thực phẩm chức năng..."
                      maxLength={200}
                      className="w-full text-ellipsis bg-transparent outline-none placeholder-shown:text-ellipsis h-full text-base placeholder:text-sm"
                    />

                    {value && (
                      <button
                        onClick={() => setValue("")}
                        className="ml-2 items-center h-[24px] w-[24px] shrink-0 inline-flex"
                      >
                        <CloseIcon className="h-6 w-6" />
                      </button>
                    )}
                    <button
                      onClick={handleRedirect}
                      className="shrink-0 rounded-r-sm bg-primary w-8 h-8 flex items-center justify-center ml-2 "
                    >
                      <SearchIcon className="h-5 w-5 text-white" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SearchWrapper
            value={value}
            products={products}
            loading={loading}
            debounceText={debounceText}
            handleSearchBack={handleSearchBack}
            handleRedirect={handleRedirect}
          />
        </div>
      </div>
    </div>
  );
}
const SearchWrapper = ({
  value,
  products,
  loading,
  debounceText,
  handleSearchBack,
  handleRedirect,
}: any) => {
  if (loading) return <Loading />;
  if (products.length)
    return <Result products={products} handleRedirect={handleRedirect} />;
  if (debounceText) return <NoResult value={value} />;
  return <HeaderSearchHistory hideSearchWrapper={handleSearchBack} />;
};
const Loading = () => (
  <div className="bg-white p-10  md:p-20 flex justify-center content-center">
    <LoadingCircle />
  </div>
);

const Result = ({ products, handleRedirect }: any) => (
  <div className="bg-gray [&>*:not(:first-child)]:border-divider-1pt md:[&>*]:border-t">
    <div className="bg-white py-2">
      <a
        className="flex items-center px-4 py-1 md:py-2 text-sm md:text-base hover:bg-gray-200 bg-white"
        href="/tim-kiem?s=omega"
      >
        <SearchIcon className="mr-2 h-5 w-5 shrink-0 self-start md:h-6 md:w-6" />
        <span>omega</span>
      </a>
      <a
        id="search_header_line_2"
        className="flex items-center px-4 py-1 md:py-2 text-sm md:text-base hover:bg-gray-2 bg-white"
        href="/tim-kiem?s=dot-quy"
      >
        <SearchIcon className="mr-2 h-5 w-5 shrink-0 self-start md:h-6 md:w-6" />
        <span>dot quy</span>
      </a>
    </div>

    <div className="md:border-divider-1pt bg-white mt-2 first:mt-0 md:mt-0 md:border">
      {products.map((product: any) => (
        <Link
          key={product._id}
          href={`/san-pham/${product.path}`}
          className="relative py-3 px-4 md:py-4 hover:bg-gray-200 flex items-start justify-start border-divider-1pt border-t first:border-transparent"
        >
          <div className="relative shrink-0 overflow-hidden rounded-lg md:rounded-xl">
            <Image
              alt={product.name}
              loading="lazy"
              width={80}
              height={80}
              className="h-[92px] w-[92px] md:h-[100px] md:w-[100px] object-cover "
              src={product.image}
              style={{ color: "transparent" }}
            />

            {product.discount ? (
              <div className="px-2 py-0.5 md:py-1 absolute z-10 bg-red-500 rounded-br-xl top-0 left-0 rounded-tl-none">
                <span
                  className="block text-xs font-semibold text-white md:text-sm"
                  style={{ textShadow: "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px" }}
                >
                  -{product.discount}%
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-auto flex-col gap-1 pl-2 md:flex-1 md:pl-3">
            <span className="text-sm md:text-base">{product.name}</span>
            <div className="text-text-primary">
              <span className="text-base font-semibold">
                {" "}
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </span>
              <span className="text-body2"> / Hộp</span>
              {product.discount ? (
                <span className="text-sm pl-2 line-through">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </span>
              ) : null}
            </div>
            <div className="mt-0" />
          </div>
        </Link>
      ))}
    </div>
    <span
      onClick={handleRedirect}
      className="hover:bg-gray-200 bg-white border-divider-1pt border-t md:border-none text-primary flex flex-row items-center justify-center py-2"
    >
      <span className="text-sm font-medium">Xem tất cả x</span>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 shrink-0"
        width={20}
        height={20}
      >
        <path
          d="M9.25383 4.29289C8.86331 4.68342 8.86331 5.31658 9.25383 5.70711L15.5467 12L9.25383 18.2929C8.86331 18.6834 8.86331 19.3166 9.25383 19.7071C9.64436 20.0976 10.2775 20.0976 10.668 19.7071L17.668 12.7071C18.0586 12.3166 18.0586 11.6834 17.668 11.2929L10.668 4.29289C10.2775 3.90237 9.64435 3.90237 9.25383 4.29289Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </div>
);
const NoResult = ({ value }: { value?: string }) => (
  <div className="bg-gray [&>*:not(:first-child)]:border-divider-1pt md:[&>*]:border-t">
    <div className="bg-white py-3 md:py-2">
      <div className="flex gap-2 px-4 md:py-2">
        <SearchIcon className="text-icon-tertiary h-6 w-6 shrink-0" />
        <span className="md:text-base text-sm  w-full">
          Không tìm thấy kết quả với từ khóa
          <span className=" font-bold"> {value}</span>
        </span>
      </div>
      <div className="mt-2 flex gap-2 px-4 md:mt-0">
        <div className="h-6 w-6 shrink-0" />
        <span className="text-sm  border-divider-1pt w-full border-t pt-2 md:py-2">
          <ul>
            <li className="text-sm flex items-start gap-2 p-1">
              <div className="grid h-5 w-1 shrink-0 place-items-center">
                <div className=" h-1 w-1 rounded" />
              </div>
              <span>Kiểm tra lỗi chính tả với từ khoá đã nhập</span>
            </li>
            <li className="text-sm flex w-auto items-start gap-2 p-1 md:w-[400px]">
              <div className="grid h-5 w-1 shrink-0 place-items-center">
                <span className="h-1 w-1 rounded" />
              </div>
              <span>
                Trong trường hợp cần hỗ trợ, hãy liên hệ với Ludmila qua Hotline
                <a className="text-primary" href="tel:0832667711">
                  {" "}
                  0832.66.77.11
                </a>
              </span>
            </li>
          </ul>
        </span>
        <div className="hidden h-6 w-6 shrink-0 md:block" />
      </div>
    </div>
  </div>
);
