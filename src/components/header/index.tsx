"use client";
import { useEffect, useRef, useState } from "react";
import Dialog from "./dialog";
import Info from "./info";
import Cart from "./cart";
import Link from "next/link";
import Image from "next/image";
import Search from "./search";

export default function Header() {
  const logoRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      if (moving >= 110 && logoRef.current && searchRef.current) {
        logoRef.current.style.opacity = "0";
        searchRef.current.classList.add("header-mobile-custom");
      }
      if (moving < 90 && logoRef.current && searchRef.current) {
        logoRef.current.style.opacity = "1";
        searchRef.current.classList.remove("header-mobile-custom");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      id="header"
      className="sticky top-0 z-[49] bg-[#317dff] transition-[height] md:relative"
    >
      <div className="relative">
        <div className="relative md:static">
          <Info />

          <div className="h-full md:relative md:h-auto">
            <div className="container-lite grid grid-cols-[40px_1fr_40px] grid-rows-[40px] content-center pt-1.5 pb-2 md:grid-cols-[200px_1fr_270px] md:grid-rows-[56px] md:pt-4 md:pb-[44px]">
              <div className="grid place-content-start content-center md:hidden">
                <button onClick={() => setOpen(true)}>
                  <svg
                    width={24}
                    height={24}
                    className="text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17H21C21.5523 17 22 17.4477 22 18C22 18.5128 21.614 18.9355 21.1166 18.9933L21 19H3C2.44772 19 2 18.5523 2 18C2 17.4872 2.38604 17.0645 2.88338 17.0067L3 17H21H3ZM2.99988 11L20.9999 10.9978C21.5522 10.9978 22 11.4454 22 11.9977C22 12.5105 21.6141 12.9333 21.1167 12.9911L21.0001 12.9978L3.00012 13C2.44784 13.0001 2 12.5524 2 12.0001C2 11.4873 2.38594 11.0646 2.88326 11.0067L2.99988 11L20.9999 10.9978L2.99988 11ZM3 5H21C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5H21H3Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <Dialog open={open} setOpen={setOpen} />
              <div
                ref={logoRef}
                className="grid place-content-center content-center transition-[opacity] duration-300 md:place-content-start"
              >
                <Link href="/">
                  <Image
                    src="/logo/logo-5.svg"
                    alt="Long Châu"
                    width={100}
                    height={28}
                    className="h-[28px] w-[100px] !bg-transparent !bg-none object-contain md:h-[56px] md:w-[183px]"
                  />
                </Link>
              </div>
              <div className="grid place-content-end content-center md:col-start-3 md:col-end-4 md:place-content-stretch">
                <div className="flex h-full items-center justify-between">
                  <div className="hidden md:flex items-center">
                    <div className="flex items-center cursor-pointer">
                      <svg
                        width={24}
                        height={24}
                        className="text-white"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4ZM12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="ml-2 text-body1 font-medium text-white">
                        Đăng nhập
                      </div>
                    </div>
                  </div>

                  <Cart></Cart>
                </div>
              </div>
              <div
                ref={searchRef}
                className="search-section col-span-full mt-1.5 grid h-[36px] content-center transition-[margin] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mx-auto md:mt-0 md:h-auto md:w-[680px]"
              >
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
