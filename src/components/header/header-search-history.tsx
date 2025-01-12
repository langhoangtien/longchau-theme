import Link from "next/link";
import { useEffect, useState } from "react";
import { topSearch } from "./search";
import { useRouter } from "next/navigation";

export default function HeaderSearchHistory({ hideSearchWrapper }: any) {
  const [searchHistories, setSearchHistories] = useState([]);
  useEffect(() => {
    const searchHistories = localStorage.getItem("searchHistory");
    if (searchHistories) {
      setSearchHistories(JSON.parse(searchHistories));
    }
  }, []);
  const router = useRouter();
  const handleSearch = (history: string) => {
    router.push(`/tim-kiem?s=${encodeURIComponent(history)}`);
    hideSearchWrapper();
  };
  const removeSearchHistoryItem = (e: React.MouseEvent, history: string) => {
    e.preventDefault();
    const newSearchHistories = searchHistories.filter(
      (item) => item !== history
    );
    setSearchHistories(newSearchHistories);
    localStorage.setItem("searchHistory", JSON.stringify(newSearchHistories));
  };
  const removeSearchHistory = () => {
    setSearchHistories([]);
    localStorage.removeItem("searchHistory");
  };
  return (
    <div className="bg-white py-2 md:pt-3 md:pb-4">
      {!!searchHistories.length && (
        <div className="mb-1 flex justify-between px-4 md:mb-0">
          <p className="text-base text-gray-1000 font-semibold">
            Lịch sử tìm kiếm
          </p>
          <span onClick={removeSearchHistory} className="cursor-pointer">
            <p className="text-sm text-primary font-medium">Xóa tất cả</p>
          </span>
        </div>
      )}
      {searchHistories.map((history: string) => (
        <Link
          href={`/tim-kiem/?s=${encodeURIComponent(history)}`}
          key={history}
          className="box-history group flex w-full cursor-pointer items-center justify-between py-2 px-4 hover:bg-gray-100"
        >
          <div className="box-history-link flex w-full items-center gap-2">
            <svg
              width={24}
              height={24}
              className="transition duration-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.63316 9C4.64345 9.00021 4.65373 9.00021 4.66399 9H8.24962C8.66383 9 8.99962 8.66421 8.99962 8.25C8.99962 7.83579 8.66383 7.5 8.24962 7.5H5.99893C7.36789 5.67743 9.54671 4.5 11.9996 4.5C16.1418 4.5 19.4996 7.85786 19.4996 12C19.4996 16.1421 16.1418 19.5 11.9996 19.5C8.08773 19.5 4.87463 16.5045 4.53022 12.6827C4.49305 12.2701 4.12848 11.9659 3.71594 12.003C3.3034 12.0402 2.9991 12.4048 3.03628 12.8173C3.44972 17.4052 7.30445 21 11.9996 21C16.9702 21 20.9996 16.9706 20.9996 12C20.9996 7.02944 16.9702 3 11.9996 3C9.31082 3 6.8982 4.17919 5.24962 6.04707V4.5C5.24962 4.08579 4.91383 3.75 4.49962 3.75C4.0854 3.75 3.74962 4.08579 3.74962 4.5V8.25C3.74962 8.66421 4.0854 9 4.49962 9H4.63316ZM11.2496 7.5C11.6638 7.5 11.9996 7.83579 11.9996 8.25V12H14.2496C14.6638 12 14.9996 12.3358 14.9996 12.75C14.9996 13.1642 14.6638 13.5 14.2496 13.5H11.2496C10.8354 13.5 10.4996 13.1642 10.4996 12.75V8.25C10.4996 7.83579 10.8354 7.5 11.2496 7.5Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-base text-primary ">{history}</p>
          </div>
          <svg
            onClick={(e) => removeSearchHistoryItem(e, history)}
            width={20}
            height={20}
            className="text-icon-secondary shrink-0"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21263 4.3871L4.29582 4.29289C4.65631 3.93241 5.22354 3.90468 5.61583 4.2097L5.71004 4.29289L12.0029 10.585L18.2958 4.29289C18.6863 3.90237 19.3195 3.90237 19.71 4.29289C20.1006 4.68342 20.1006 5.31658 19.71 5.70711L13.4179 12L19.71 18.2929C20.0705 18.6534 20.0982 19.2206 19.7932 19.6129L19.71 19.7071C19.3496 20.0676 18.7823 20.0953 18.39 19.7903L18.2958 19.7071L12.0029 13.415L5.71004 19.7071C5.31951 20.0976 4.68635 20.0976 4.29582 19.7071C3.9053 19.3166 3.9053 18.6834 4.29582 18.2929L10.5879 12L4.29582 5.70711C3.93534 5.34662 3.90761 4.77939 4.21263 4.3871L4.29582 4.29289L4.21263 4.3871Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      ))}

      <div className="mt-2 px-4 first:mt-0 md:mt-4">
        <p className="text-base  mb-2 font-medium md:mb-3">Tra cứu hàng đầu</p>
        <div className="flex gap-2 flex-wrap">
          {topSearch.map((item) => (
            <span onClick={() => handleSearch(item)} key={item}>
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border  relative font-medium  overflow-hidden cursor-pointer bg-white h-8 text-sm hover:bg-gray-200 duration-200 ease-in">
                {item}
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
