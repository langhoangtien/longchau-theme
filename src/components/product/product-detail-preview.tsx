import ProductDetailComment from "./product-detail-comment";
import ProductReviewStar from "./product-review-star";

export default function ProductDetailPreview() {
  return (
    <div
      data-lcpr="prr-id-product-detail-preview"
      id="product-detail-preview"
      className="bg-white p-4 md:rounded-xl"
    >
      <div className="lc-preview">
        <div className="mb-4 border-b pb-4">
          <div className="title">
            <h2 className="mr-1 inline-block font-bold">
              Đánh giá sản phẩm{" "}
              <span className="font-normal">(40 đánh giá)</span>
            </h2>
          </div>
        </div>
        <div className="mb-4 border-b pb-4 md:flex">
          <div className="md:mr-8">
            <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
              <div>
                <p className="text-text-secondary te font-semibold">
                  Trung bình
                </p>
                <p className="md:text-3xl text-2xl  flex items-center font-semibold">
                  4.7
                  <svg
                    width={24}
                    height={24}
                    className="ml-2"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                      fill="url(#paint0_linear_4531_177138)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4531_177138"
                        x1="43.9999"
                        y1="43.0023"
                        x2="5.75441"
                        y2="3.04089"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F79009" />
                        <stop offset={1} stopColor="#FDB022" />
                      </linearGradient>
                    </defs>
                  </svg>
                </p>
              </div>
              <button className="inline-flex items-center bg-blue-600 justify-center font-medium  py-[12px] px-[24px] h-[48px] rounded-[42px] text-white text-base">
                Gửi đánh giá
              </button>
            </div>
          </div>
          <ProductReviewStar />
        </div>
        <div className="my-[12px] md:my-[16px]">
          <div className="flex flex-col justify-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
            <p className="md:te text-base ">Lọc theo:</p>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                <span className="text-base  font-medium">5 sao</span>
              </div>
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                <span className="text-base  font-medium">4 sao</span>
              </div>
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                <span className="text-base font-medium">3 sao</span>
              </div>
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                <span className="text-base font-medium">2 sao</span>
              </div>
              <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                <span className="text-base font-medium">1 sao</span>
              </div>
            </div>
          </div>
        </div>
        <ProductDetailComment />
        <div className="py-4 text-center">
          <div className="inline-flex cursor-pointer items-center justify-center">
            <svg
              width={20}
              height={20}
              className="text-text-primary mr-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-label2 text-text-primary font-medium">
              Xem thêm 5 bình luận
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
