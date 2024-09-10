import { HOST_API } from "@/config-global";
import useClickOutside from "@/hooks/use-click-out-side";
import { useDebounce } from "@/hooks/use-debounce";
import { convertImagePathToUrl, encodeData } from "@/lib/common";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { LoadingCircle } from "../ui/loading";
import HeaderSearchHistory from "./header-search-history";

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

interface ResultProps {
  products: Product[];
}

export default function Search() {
  const refSearchMobile = useRef<HTMLDivElement>(null);
  const refSearchWrap = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const debounceText = useDebounce(value, 500);
  const router = useRouter();
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
  const handleRedirect = () => {
    refSearchMobile.current?.classList.toggle("!hidden", true);
    router.push(`/tim-kiem?s=${value}`);
  };
  return (
    <div ref={refSearchWrap} className="cs-search-wrapper relative">
      <div>
        <span className="relative inline-flex items-center bg-white md:rounded-[35px] md:pl-4 w-full rounded-[28px] p-1 pl-3">
          <input
            onFocus={handleSearchDesktop}
            placeholder="Tìm tên sản phẩm, thực phẩm chức năng..."
            maxLength={200}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="w-full text-ellipsis bg-transparent outline-none placeholder:text-gray-500 placeholder-shown:text-ellipsis md:h-[40px] h-[28px] md:text-base text-sm placeholder:sm"
          />
          <span
            onClick={handleSearch}
            className="absolute w-full h-full t-0 bg-transparent md:hidden "
          ></span>

          {value && (
            <button
              onClick={() => setValue("")}
              className="ml-2 items-center h-[20px] w-[20px] shrink-0"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
          <button
            onClick={handleRedirect}
            className="shrink-0 rounded-full bg-blue-600 text-white md:w-[40px] md:h-[40px] md:p-[10px] md:ml-3 w-[28px] h-[28px] p-[6px] sm:ml-2"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
                fill="currentColor"
              />
            </svg>
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
          <div className="inner bg-blue-500 px-4 py-2">
            <div className="">
              <div className="lc-row relative flex flex-wrap  css-1b11mx9">
                <span
                  onClick={handleSearchBack}
                  className="text-white mr-4 css-8u32eo"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.668 4.29289C17.0586 4.68342 17.0586 5.31658 16.668 5.70711L10.3752 12L16.668 18.2929C17.0586 18.6834 17.0586 19.3166 16.668 19.7071C16.2775 20.0976 15.6444 20.0976 15.2538 19.7071L8.25383 12.7071C7.86331 12.3166 7.86331 11.6834 8.25383 11.2929L15.2538 4.29289C15.6444 3.90237 16.2775 3.90237 16.668 4.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="relative inline-flex items-center bg-white rounded-[28px] p-1 pl-3 grow">
                  <input
                    ref={refInput}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Tìm tên sản phẩm, mỹ phẩm, thực phẩm chức năng..."
                    maxLength={200}
                    className="w-full text-ellipsis bg-transparent outline-none  placeholder-shown:text-ellipsis h-[28px] text-base placeholder:text-sm"
                  />

                  {value && (
                    <button
                      onClick={() => setValue("")}
                      className="ml-2 items-center h-[20px] w-[20px] shrink-0 inline-flex"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  )}
                  <button className="shrink-0 rounded-full bg-blue-500 w-[28px] h-[28px] p-[6px] ml-2">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
                        fill="#fff"
                      />
                    </svg>
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
        />
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
}: any) => {
  if (loading) return <Loading />;
  if (products.length) return <Result products={products} />;
  if (debounceText) return <NoResult value={value} />;
  return <HeaderSearchHistory hideSearchWrapper={handleSearchBack} />;
};
const Loading = () => (
  <div className="bg-white p-10  md:p-20 flex justify-center content-center">
    <LoadingCircle />
  </div>
);

const Result = ({ products }: any) => (
  <div className="bg-gray [&>*:not(:first-child)]:border-divider-1pt md:[&>*]:border-t">
    <div className="bg-white py-2">
      <a
        className="flex items-center px-4 py-1 md:py-2 text-body2 md:text-body1 hover:bg-gray-200 bg-white"
        href="/tim-kiem?s=tamamino%20t%C3%A2m%20minh%203x10"
      >
        <svg
          width={24}
          height={24}
          className="mr-2 h-5 w-5 shrink-0 self-start md:h-6 md:w-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
            fill="currentColor"
          />
        </svg>
        <span>omega</span>
      </a>
      <a
        id="search_header_line_2"
        className="flex items-center px-4 py-1 md:py-2 text-sm md:text-base hover:bg-gray-2 bg-white"
        href="/tim-kiem?s=s%E1%BB%AFa%20t%E1%BA%AFm"
      >
        <svg
          width={24}
          height={24}
          className="text-icon-tertiary mr-2 h-5 w-5 shrink-0 self-start md:h-6 md:w-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
            fill="currentColor"
          />
        </svg>
        <span>đột quỵ</span>
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
    <a
      href="/tim-kiem?s=tăm &loai=tatca&doituong=tatca"
      className="hover:bg-gray-200 bg-white border-divider-1pt border-t md:border-none text-primary flex flex-row items-center justify-center py-2"
    >
      <span className="text-sm font-medium">Xem tất cả</span>
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
    </a>
  </div>
);
const NoResult = ({ value }: { value?: string }) => (
  <div className="bg-gray [&>*:not(:first-child)]:border-divider-1pt md:[&>*]:border-t">
    <div className="bg-white py-3 md:py-2">
      <div className="flex gap-2 px-4 md:py-2">
        <svg
          className="text-icon-tertiary h-6 w-6 shrink-0"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
            fill="currentColor"
          />
        </svg>
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
