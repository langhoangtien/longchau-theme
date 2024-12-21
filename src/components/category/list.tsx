"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ListCategory({ childs }: any) {
  const [show, setShow] = useState(false);
  const list = show ? childs : childs?.slice(0, 10);
  return (
    <div className="my-2 py-4 !px-4 pb-4 md:!px-0 grid grid-cols-2 md:grid-cols-5 gap-5 ">
      {list?.map((item: any, index: number) => {
        return index === 9 && !show ? (
          <div onClick={() => setShow(true)}>
            {" "}
            <div className="flex items-center w-full h-[64px] cursor-pointer rounded-xl p-3 md:h-[80px] md:py-[10px] md:px-4 shadow-gray-200 shadow-[0_0_0_1px] md:bg-white">
              <div className="items-center flex justify-center w-full ">
                <h3 className="price mb-0 text-sm font-medium line-clamp-2 text-gray-700/80 ">
                  Xem thêm ...
                </h3>
                {/* <p className="text-sm text-gray-700 font-normal">16 sản phẩm</p> */}
              </div>
            </div>
          </div>
        ) : (
          <Link href={`/danh-muc/${item.code}-${item._id}`} key={item._id}>
            <div className="flex items-center h-[64px] cursor-pointer rounded-xl p-3 md:h-[80px] md:py-[10px] md:px-4 shadow-gray-200 shadow-[0_0_0_1px] md:bg-white">
              <div className="w-8 h-8 md:w-10 md:h-10">
                <Image
                  alt={item.name}
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-full object-cover"
                  src={item.image}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="ml-3 flex flex-1 flex-col justify-center">
                <h3 className="price mb-0 text-sm font-medium line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700 font-normal">16 sản phẩm</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
