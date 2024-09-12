"use client";

import Product from "@/components/home/product";
import SplashScreen from "@/components/loading/splash-screen";
import Filter from "@/components/search/filter";
import { ButtonSelect } from "@/components/ui/button-select";
import { HOST_API } from "@/config-global";
import { useBoolean } from "@/hooks/use-boolean";
import { encodeData, mappedProduct } from "@/lib/common";

import { useCallback, useEffect, useState } from "react";
import ProductSkeleton from "../home/product/product-skeleton";
import { PaginationDemo } from "../ui/pagination";

const INIT_FILTERS = {
  brand: [],
  category: [],
  country: [],
  price: [],
  rating: null,
};
const SORT_OPTIONS = [
  { value: "latest", label: "Mới nhất", orderBy: "createdAt", order: -1 },
  { value: "oldest", label: "Cũ nhất", orderBy: "createdAt", order: 1 },
  { value: "popular", label: "Bán chạy", orderBy: "sold", order: -1 },
];

export default function ProductsPage({ search, filterData }: any) {
  const mobileOpen = useBoolean();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(["price"]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState(INIT_FILTERS);
  const [sort, setSort] = useState({
    value: "latest",
    label: "Mới nhất",
    orderBy: "createdAt",
    order: -1,
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const sortValue = encodeData({
        orderBy: sort.orderBy,
        order: sort.order,
      });
      const limit = 10;
      const skip = (page - 1) * limit;
      const filterRaw = {
        ...filter,
        search,
      };
      const url = `${HOST_API}/products/?limit=${limit}&skip=${skip}&sort=${sortValue}&filterRaw=${encodeData(
        filterRaw
      )}`;
      const resJson = await fetch(url);
      const res = await resJson.json();
      const productsMapped = res.items.map(mappedProduct);
      setProducts(productsMapped);
      setCount(res.count);
      setLoading(false);
    };
    getData();
  }, [page, filter, search, sort]);

  const handleChangeViewMode = useCallback(
    (event: React.ChangeEvent<any>, newAlignment: string) => {
      if (newAlignment !== null) {
        setViewMode(newAlignment);
      }
    },
    []
  );

  const handleClearAll = useCallback(() => {
    setFilter(INIT_FILTERS);
  }, []);

  const handleChangeSort = useCallback((event: React.ChangeEvent<any>) => {
    const sortValue: any = SORT_OPTIONS.find(
      (option) => option.value === event.target.value
    );
    setSort(sortValue);
  }, []);

  return (
    <div data-custom-container="true">
      <div className="pb-6 md:pb-9">
        <div className="md:mt-6 container-lite md:mb-4">
          <div className="mx-4 md:grid md:grid-cols-[289px_907fr] md:gap-5">
            <Filter
              filterData={filterData}
              filter={filter}
              setFilter={setFilter}
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
            />
            <section id="category-page__products-section">
              <div className="relative z-[1]">
                <div className="mb-0 bg-white md:mb-3 md:flex md:bg-transparent">
                  <div className="border-stroke-disable items-center border-b px-4 py-3 md:flex md:border-b-0 md:px-0 md:py-0 hidden">
                    <h2 className="text-lg font-semibold text-gray-1000">
                      Danh sách sản phẩm
                    </h2>
                    <button className="border-stroke-default h-[32px] w-[64px] rounded-2xl border p-[1px] ml-auto md:hidden">
                      <span className="relative isolate flex items-center justify-between">
                        <span className="bg-gray-3 absolute inline-block h-7 w-7 rounded-full transition-all" />
                        <span className=" z-10 p-1">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 11C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11H7.5ZM16.5 11C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11H16.5ZM7.5 2C8.32843 2 9 2.67157 9 3.5V7.5C9 8.32843 8.32843 9 7.5 9H3.5C2.67157 9 2 8.32843 2 7.5V3.5C2 2.67157 2.67157 2 3.5 2H7.5ZM16.5 2C17.3284 2 18 2.67157 18 3.5V7.5C18 8.32843 17.3284 9 16.5 9H12.5C11.6716 9 11 8.32843 11 7.5V3.5C11 2.67157 11.6716 2 12.5 2H16.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="estore-icon text-text-secondary z-10 p-1 css-wi4pw5">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.14286 6.85714C7.14286 7.33053 6.7591 7.71429 6.28571 7.71429C5.81233 7.71429 5.42857 7.33053 5.42857 6.85714C5.42857 6.38376 5.81233 6 6.28571 6C6.7591 6 7.14286 6.38376 7.14286 6.85714ZM6.28571 11.1429C6.7591 11.1429 7.14286 10.7591 7.14286 10.2857C7.14286 9.81233 6.7591 9.42857 6.28571 9.42857C5.81233 9.42857 5.42857 9.81233 5.42857 10.2857C5.42857 10.7591 5.81233 11.1429 6.28571 11.1429ZM7.14286 13.7143C7.14286 14.1877 6.7591 14.5714 6.28571 14.5714C5.81233 14.5714 5.42857 14.1877 5.42857 13.7143C5.42857 13.2409 5.81233 12.8571 6.28571 12.8571C6.7591 12.8571 7.14286 13.2409 7.14286 13.7143ZM9.42857 6.57143C9.11298 6.57143 8.85714 6.82727 8.85714 7.14286C8.85714 7.45845 9.11298 7.71429 9.42857 7.71429H14C14.3156 7.71429 14.5714 7.45845 14.5714 7.14286C14.5714 6.82727 14.3156 6.57143 14 6.57143H9.42857ZM8.85714 10.5714C8.85714 10.2558 9.11298 10 9.42857 10H14C14.3156 10 14.5714 10.2558 14.5714 10.5714C14.5714 10.887 14.3156 11.1429 14 11.1429H9.42857C9.11298 11.1429 8.85714 10.887 8.85714 10.5714ZM9.42857 13.4286C9.11298 13.4286 8.85714 13.6844 8.85714 14C8.85714 14.3156 9.11298 14.5714 9.42857 14.5714H14C14.3156 14.5714 14.5714 14.3156 14.5714 14C14.5714 13.6844 14.3156 13.4286 14 13.4286H9.42857ZM2 4.28571C2 3.02335 3.02335 2 4.28571 2H15.7143C16.9767 2 18 3.02335 18 4.28571V15.7143C18 16.9767 16.9767 18 15.7143 18H4.28571C3.02335 18 2 16.9767 2 15.7143V4.28571ZM4.28571 3.14286C3.65453 3.14286 3.14286 3.65453 3.14286 4.28571V15.7143C3.14286 16.3455 3.65453 16.8571 4.28571 16.8571H15.7143C16.3455 16.8571 16.8571 16.3455 16.8571 15.7143V4.28571C16.8571 3.65453 16.3455 3.14286 15.7143 3.14286H4.28571Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center px-4 py-3 md:ml-auto md:px-0 md:py-0">
                    <div className="flex items-center overflow-y-hidden mr-[6px]">
                      <span className="css-1oqd6bl text-text-primary hidden md:mr-2 md:inline">
                        Sắp xếp theo
                      </span>
                      <div className="flex items-center gap-1 md:gap-2">
                        <ButtonSelect className="h-8" selected>
                          {" "}
                          Mới nhất
                        </ButtonSelect>
                        <ButtonSelect className="h-8"> Giá thấp</ButtonSelect>

                        <ButtonSelect className="h-8"> Giá cao</ButtonSelect>
                      </div>
                    </div>
                    <div className="border-stroke-disable ml-auto border-l md:hidden">
                      <button className="relative flex items-center py-1 px-[6px] ">
                        <span>
                          <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 16H14C14.5523 16 15 16.4477 15 17C15 17.5128 14.614 17.9355 14.1166 17.9933L14 18H10C9.44772 18 9 17.5523 9 17C9 16.4872 9.38604 16.0645 9.88338 16.0067L10 16H14H10ZM8 11H16C16.5523 11 17 11.4477 17 12C17 12.5128 16.614 12.9355 16.1166 12.9933L16 13H8C7.44772 13 7 12.5523 7 12C7 11.4872 7.38604 11.0645 7.88338 11.0067L8 11H16H8ZM5 6H19C19.5523 6 20 6.44772 20 7C20 7.51284 19.614 7.93551 19.1166 7.99327L19 8H5C4.44772 8 4 7.55228 4 7C4 6.48716 4.38604 6.06449 4.88338 6.00673L5 6H19H5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span>Lọc</span>
                      </button>
                    </div>
                    <button className="border-stroke-default h-[32px] w-[64px] rounded-2xl border p-[1px] hidden md:ml-4 md:block">
                      <span className="relative isolate flex items-center justify-between">
                        <span className="bg-gray-3 absolute inline-block h-7 w-7 rounded-full transition-all" />
                        <span className="estore-icon text-text-secondary z-10 p-1 css-wi4pw5">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 11C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11H7.5ZM16.5 11C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11H16.5ZM7.5 2C8.32843 2 9 2.67157 9 3.5V7.5C9 8.32843 8.32843 9 7.5 9H3.5C2.67157 9 2 8.32843 2 7.5V3.5C2 2.67157 2.67157 2 3.5 2H7.5ZM16.5 2C17.3284 2 18 2.67157 18 3.5V7.5C18 8.32843 17.3284 9 16.5 9H12.5C11.6716 9 11 8.32843 11 7.5V3.5C11 2.67157 11.6716 2 12.5 2H16.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="estore-icon text-text-secondary z-10 p-1 css-wi4pw5">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.14286 6.85714C7.14286 7.33053 6.7591 7.71429 6.28571 7.71429C5.81233 7.71429 5.42857 7.33053 5.42857 6.85714C5.42857 6.38376 5.81233 6 6.28571 6C6.7591 6 7.14286 6.38376 7.14286 6.85714ZM6.28571 11.1429C6.7591 11.1429 7.14286 10.7591 7.14286 10.2857C7.14286 9.81233 6.7591 9.42857 6.28571 9.42857C5.81233 9.42857 5.42857 9.81233 5.42857 10.2857C5.42857 10.7591 5.81233 11.1429 6.28571 11.1429ZM7.14286 13.7143C7.14286 14.1877 6.7591 14.5714 6.28571 14.5714C5.81233 14.5714 5.42857 14.1877 5.42857 13.7143C5.42857 13.2409 5.81233 12.8571 6.28571 12.8571C6.7591 12.8571 7.14286 13.2409 7.14286 13.7143ZM9.42857 6.57143C9.11298 6.57143 8.85714 6.82727 8.85714 7.14286C8.85714 7.45845 9.11298 7.71429 9.42857 7.71429H14C14.3156 7.71429 14.5714 7.45845 14.5714 7.14286C14.5714 6.82727 14.3156 6.57143 14 6.57143H9.42857ZM8.85714 10.5714C8.85714 10.2558 9.11298 10 9.42857 10H14C14.3156 10 14.5714 10.2558 14.5714 10.5714C14.5714 10.887 14.3156 11.1429 14 11.1429H9.42857C9.11298 11.1429 8.85714 10.887 8.85714 10.5714ZM9.42857 13.4286C9.11298 13.4286 8.85714 13.6844 8.85714 14C8.85714 14.3156 9.11298 14.5714 9.42857 14.5714H14C14.3156 14.5714 14.5714 14.3156 14.5714 14C14.5714 13.6844 14.3156 13.4286 14 13.4286H9.42857ZM2 4.28571C2 3.02335 3.02335 2 4.28571 2H15.7143C16.9767 2 18 3.02335 18 4.28571V15.7143C18 16.9767 16.9767 18 15.7143 18H4.28571C3.02335 18 2 16.9767 2 15.7143V4.28571ZM4.28571 3.14286C3.65453 3.14286 3.14286 3.65453 3.14286 4.28571V15.7143C3.14286 16.3455 3.65453 16.8571 4.28571 16.8571H15.7143C16.3455 16.8571 16.8571 16.3455 16.8571 15.7143V4.28571C16.8571 3.65453 16.3455 3.14286 15.7143 3.14286H4.28571Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-3 md:px-0 md:pt-0">
                <div className="grid  grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">
                  {loading
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                      ))
                    : products.map((product: any) => (
                        <Product key={product._id} product={product} />
                      ))}
                </div>
                <div className="mt-3 flex w-full items-center justify-center p-[10px]">
                  <PaginationDemo
                    count={count}
                    page={page}
                    perPage={10}
                    onChangePage={setPage}
                  />
                </div>
                <button className="mt-3 flex w-full items-center justify-center p-[10px]">
                  <svg
                    width={20}
                    height={20}
                    className="mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-label2 font-medium">
                    Xem thêm 219 sản phẩm
                  </span>
                </button>
              </div>
              <div className="mt-2 omd:mt-3 grid grid-cols-2 gap-2 px-4 omd:grid-cols-4 omd:gap-5 omd:px-0">
                <div className="flex w-full gap-2 rounded-xl bg-white px-3 py-2 omd:gap-3 omd:px-4 omd:py-4 col-span-2 col-start-1 omd:col-start-2">
                  <div className="h-9 w-9 shrink-0 omd:h-11 omd:w-11">
                    <img
                      alt="search-feedback-icon"
                      loading="lazy"
                      width={36}
                      height={36}
                      decoding="async"
                      data-nimg={1}
                      className="h-full w-full"
                      src="https://nhathuoclongchau.com.vn/estore-images/search/feedback.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex-auto">
                    <p className="omd:text-body1 text-label2 text-text-primary mb-1.5 font-medium omd:mb-2">
                      Bạn có hài lòng với kết quả tìm kiếm này không?
                    </p>
                    <div className="flex gap-2 omd:gap-4">
                      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bg-button-secondary-active text-text-focus active:bg-button-secondary-pressed py-[10px] px-[16px] h-[40px] rounded-[50px] text-label2 flex-auto">
                        Có
                      </button>
                      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bg-button-secondary-active text-text-focus active:bg-button-secondary-pressed py-[10px] px-[16px] h-[40px] rounded-[50px] text-label2 flex-auto">
                        Không
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container-lite pt-4 omd:pt-5" />
      </div>
    </div>
  );
}
