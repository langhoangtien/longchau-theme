"use client";

import { useState } from "react";

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
              <div className="inner md:pb-12">
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div
                onClick={handleReadmore}
                className="lc-wrap-link lc-overlay-detail float-bottom mt-auto flex w-full cursor-pointer items-end justify-center"
              >
                <span
                  className={`estore-icon mr-1 !mb-0 transition-all duration-500 css-wi4pw5 ${
                    collapse ? "" : "rotate-180"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <p
                  className={`css-15sc8tc transition-all duration-500 ${
                    collapse ? "" : "hidden"
                  } `}
                >
                  Xem thêm
                </p>
                <p
                  className={`css-15sc8tc transition-all duration-500  ${
                    !collapse ? "" : "hidden"
                  } `}
                >
                  Thu gọn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
