"use client";

import { useState } from "react";
import Readmore from "../icons/readmore";

export default function DetailProductContent({ description }: any) {
  const [collapse, setCollapse] = useState(true);
  const handleReadmore = () => {
    setCollapse(!collapse);
  };
  return (
    <div data-lcpr="prr-id-product-detail-product-content">
      <div
        id="content-wrapper"
        className={`bg-white p-4 md:rounded-xl ${
          collapse ? "readmore-collapse" : "readmore-expand"
        }`}
      >
        <div className="lc-detail-content-inner relative">
          <div className="lc-col-2 ">
            <div className="lc-wrap-content lc-view-full-cont abc">
              <div className="inner mb:4 md:mb-8 md:pb-12">
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div
                onClick={handleReadmore}
                className="lc-wrap-link lc-overlay-detail float-bottom mt-auto flex w-full cursor-pointer items-end justify-center"
              >
                <p
                  className={`flex items-center transition-all text-gray-800/80 duration-500 ${
                    collapse ? "" : "hidden"
                  } `}
                >
                  <Readmore className="text-gray-800/80 w-5 h-5 mr-1 " />
                  Xem thêm
                </p>
                <span
                  className={`flex items-center transition-all text-gray-800/80 duration-500  ${
                    !collapse ? "" : "hidden"
                  } `}
                >
                  <Readmore
                    className="text-gray-800/80 w-5 h-5 mr-1  
                      rotate-180"
                  />
                  Thu gọn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
