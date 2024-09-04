import Link from "next/link";
import ProductDetailCarousel from "./product-detail-carousel";
import { TypographyH3 } from "../ui/typography";

import {
  ProductDetailInfoActions,
  ProductDetailInfoAttribute,
  ProductDetailInfoPrice,
} from "./product-detail-info-section";

export default function ProductDetailInfo({ product }: any) {
  return (
    <div
      id="prr-id-product-detail-product-information"
      className="p-4 flex gap-4 sm:flex-col flex-col md:flex-row md:flex-nowrap md:rounded-xl bg-white"
    >
      <ProductDetailCarousel slides={product.images} />
      <div>
        <div className="flex flex-col gap-2">
          <div className="font-medium">
            <span className="text-base font-medium text-gray-700">
              Thương hiệu:{" "}
            </span>
            <span className="text-base text-gray-1000 font-normal">
              <Link
                className="text-blue-500"
                href={"/thuong-hieu/" + product.brand.code}
              >
                {product.brand.name}
              </Link>
            </span>
          </div>
          <div>
            <TypographyH3 className="font-medium">{product.name}</TypographyH3>
          </div>
          <div className="flex items-center">
            <span
              data-test-id="sku"
              className="text-base font-normal text-gray-7 cursor-pointer transition-all duration-300 hover:opacity-70"
            >
              00021309
            </span>
            <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
            <span className="text-base text-gray-7 inline-flex items-center">
              4.7
              <svg
                width={16}
                height={16}
                className="ml-2 shrink-0"
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
            </span>
            <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
            <span className="text-sm text-blue-500 cursor-pointer">
              40 đánh giá
            </span>
            <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
            <span className="text-sm text-blue-500 cursor-pointer">
              <a href="#product-detail-preview">489 bình luận</a>
            </span>
          </div>
          <ProductDetailInfoPrice />
          <div className="css-bqk1es mt-2 mb-0.5">
            <table className="content-list">
              <tbody>
                <ProductDetailInfoAttribute
                  variants={product.variants}
                  attributes={product.attributes}
                  name={product.name}
                  image={product.image}
                  id={product._id}
                />
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">Danh mục</p>
                  </td>
                  <td className="flex-1">
                    <Link
                      className="text-blue-500"
                      href={"/danh-muc/" + product.category.code}
                    >
                      <p>{product.category.name}</p>
                    </Link>
                  </td>
                </tr>
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">Quy cách</p>
                  </td>
                  <td className="flex-1">
                    <div className="text-gray-1000 font-normal">Hộp</div>
                  </td>
                </tr>
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">
                      Xuất xứ thương hiệu
                    </p>
                  </td>
                  <td className="flex-1">
                    <div className="text-gray-1000 font-normal">
                      {product.country.name}
                    </div>
                  </td>
                </tr>
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">Mô tả ngắn</p>
                  </td>
                  <td className="flex-1">
                    <div className="text-gray-1000 font-normal">
                      <p>{product.introduction}</p>
                    </div>
                  </td>
                </tr>
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">Nhà sản xuất</p>
                  </td>
                  <td className="flex-1">
                    <div className="text-gray-1000 font-normal">
                      {product.brand?.name.toUpperCase()}
                    </div>
                  </td>
                </tr>
                <tr className="content-container">
                  <td>
                    <p className="text-gray-700 font-medium">Nước sản xuất</p>
                  </td>
                  <td className="flex-1">
                    <div className="text-gray-1000 font-normal">
                      {product.country.name}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-[8px] " />
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-[11] w-full bg-white">
            <div>
              <div className="shadow-3xl w-full rounded-t-3xl px-4 pt-4 pb-[30px]">
                <div className="flex gap-x-2">
                  <button className="inline-flex items-center justify-center   [&>*]:shrink-0 bg-blue-500  p-[12px] h-[48px] w-[48px] rounded-[50px]">
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      className="shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.1297 6.00772C18.2871 5.91306 15.4151 6.68861 12.9355 8.34372C10.1506 10.2046 8.20441 12.9526 7.30796 16.0246C7.06041 15.9944 6.76396 16.0077 6.41196 16.1073C5.09774 16.4802 4.1093 17.5571 3.66485 18.5055C3.08841 19.7415 2.8453 21.3762 3.10174 23.0637C3.35641 24.7459 4.06707 26.1326 4.95596 26.9935C5.84752 27.8548 6.85419 28.1348 7.85419 27.9246C9.34307 27.6068 10.0813 27.3691 9.87285 25.9819L8.86352 19.2579C9.06707 15.6188 10.9511 12.1931 14.1022 10.0864C18.32 7.26906 23.8497 7.4495 27.8729 10.5379C30.6715 12.6837 32.2964 15.8988 32.484 19.2739L31.7782 23.9775C30.204 28.2855 26.3013 31.2695 21.7853 31.6931H18.7782C18.0022 31.6931 17.3773 32.3179 17.3773 33.0931V33.8317C17.3773 34.6073 18.0022 35.2322 18.7782 35.2322H22.5697C23.3453 35.2322 23.9675 34.6073 23.9675 33.8317V33.4455C27.3729 32.6144 30.3453 30.5215 32.2809 27.6028L33.4955 27.9251C34.484 28.1815 35.5026 27.8548 36.3937 26.9939C37.2826 26.1326 37.9929 24.7464 38.248 23.0642C38.5053 21.3766 38.2551 19.7446 37.6853 18.5059C37.1133 17.2673 36.2613 16.4806 35.2777 16.1984C34.8657 16.0797 34.4186 16.0362 34.0351 16.0246C33.2244 13.2468 31.5555 10.7206 29.1502 8.87617C26.7853 7.0615 23.9724 6.10106 21.1297 6.00772Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.083 18.3034C26.0208 18.3034 26.781 19.0636 26.7831 20.0039C26.781 20.9417 26.0208 21.704 25.083 21.704C24.1427 21.704 23.3805 20.9417 23.3805 20.0039C23.3805 19.0641 24.1432 18.3034 25.083 18.3034ZM20.5043 18.3034C21.4442 18.3034 22.2044 19.0636 22.2044 20.0039C22.2044 20.9417 21.4442 21.704 20.5043 21.704C19.5636 21.704 18.8034 20.9417 18.8034 20.0039C18.8034 19.0641 19.5636 18.3034 20.5043 18.3034ZM15.9273 18.3034C16.8651 18.3034 17.6274 19.0636 17.6274 20.0039C17.6274 20.9417 16.8651 21.704 15.9273 21.704C14.9874 21.704 14.2268 20.9417 14.2268 20.0039C14.2268 19.0641 14.9874 18.3034 15.9273 18.3034ZM20.5043 11C15.5181 11 11.5 14.8858 11.5 20.0039C11.5 22.4621 12.4295 24.6346 13.9436 26.2286L13.4063 28.6373C13.2292 29.4299 13.7789 29.9631 14.4913 29.5663L16.8435 28.2543C17.9613 28.7396 19.1977 29.0078 20.5043 29.0078C25.4922 29.0078 29.5078 25.1245 29.5078 20.0039C29.5078 14.8858 25.4922 11 20.5043 11Z"
                        fill="white"
                      />
                      <ellipse
                        cx="20.8517"
                        cy="19.6089"
                        rx="7.01774"
                        ry="3.27494"
                        fill="#FCFCFC"
                      />
                      <circle
                        cx="15.9035"
                        cy="20.6086"
                        r="1.40355"
                        fill="url(#paint0_linear_4823_6723)"
                      />
                      <circle
                        cx="20.5813"
                        cy="20.6086"
                        r="1.40355"
                        fill="url(#paint1_linear_4823_6723)"
                      />
                      <circle
                        cx="25.261"
                        cy="20.6086"
                        r="1.40355"
                        fill="url(#paint2_linear_4823_6723)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4823_6723"
                          x1="16.896"
                          y1="21.6011"
                          x2="14.9111"
                          y2="19.6162"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1250DC" />
                          <stop offset={1} stopColor="#306DE4" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4823_6723"
                          x1="21.5737"
                          y1="21.6011"
                          x2="19.5888"
                          y2="19.6162"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1250DC" />
                          <stop offset={1} stopColor="#306DE4" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_4823_6723"
                          x1="26.2534"
                          y1="21.6011"
                          x2="24.2685"
                          y2="19.6162"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1250DC" />
                          <stop offset={1} stopColor="#306DE4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center font-medium  bg-gray-100 py-[12px] h-[48px] rounded-[42px]  flex-auto px-6 usm:px-0">
                    Tìm nhà thuốc
                  </button>
                  <button className="inline-flex items-center justify-center font-medium bg-blue-500  text-white  py-[12px] h-[48px] rounded-[42px] text-label1 flex-auto px-6 usm:px-0">
                    Chọn mua
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailInfoActions
            name={product.name}
            image={product.image}
            id={product._id}
          />
          <div className="flex">
            <svg
              width={16}
              height={16}
              className="mr-1.5 mt-1.5 text-yellow-500"
              viewBox="0 0 12 12"
              fill="current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.60297 1.22212C3.6882 1.00212 3.89988 0.857117 4.13581 0.857117H7.7852C8.18239 0.857117 8.45843 1.25234 8.3217 1.62526L7.42478 4.0714H9.49792C10.0029 4.0714 10.2597 4.67838 9.90801 5.04077L4.19353 10.9299C3.70488 11.4335 2.86242 10.98 3.01367 10.2948L3.72516 7.0714H2.53607C1.95876 7.0714 1.56156 6.49156 1.77011 5.95324L3.60297 1.22212Z"
                fill="currentColor"
              />
            </svg>
            <div>
              <span className="text-sm font-semibold text-yellow-600">
                Sản phẩm đang được chú ý,{" "}
              </span>
              <span className="text-sm">
                có 3 người thêm vào giỏ hàng &amp; 8 người đang xem
              </span>
            </div>
          </div>
          <div className="css-1ri80ux">
            <div className="item-container">
              <span className="estore-icon mr-2 css-1z1316r">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6698 13.9732H20.5481C20.3 13.9732 20.0995 13.7727 20.0995 13.5246V11.7043L15.0391 15.3192L20.0995 18.934V17.1138C20.0995 16.8657 20.3 16.6652 20.5481 16.6652H20.7725C24.1123 16.6652 26.8294 19.3822 26.8294 22.7221C26.8294 24.3906 26.1515 25.9035 25.0563 27C27.1834 25.8093 28.624 23.5337 28.624 20.9274C28.624 17.0927 25.5045 13.9732 21.6698 13.9732Z"
                    fill="#7EB5FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3463 7.90195C13.0745 8.17369 12.9218 8.54226 12.9218 8.92656V10.3839C12.9218 10.8795 13.3236 11.2812 13.8192 11.2812C14.3147 11.2812 14.7165 10.8795 14.7165 10.3839V8.8864C14.7165 8.52563 14.8488 8.17738 15.0884 7.90766L17.6713 5H16.2482L13.3463 7.90195ZM24.1383 18.8142C23.2872 18.0802 22.1947 17.619 20.9977 17.5674V19.8058C20.9977 19.974 20.9039 20.1279 20.7545 20.2051C20.6042 20.2809 20.4248 20.2688 20.2884 20.171L14.0071 15.6844C13.8892 15.6 13.8192 15.4641 13.8192 15.3192C13.8192 15.1742 13.8892 15.0383 14.0071 14.9544L20.2884 10.4678C20.4248 10.3696 20.6042 10.3565 20.7545 10.4337C20.9039 10.5104 20.9977 10.6643 20.9977 10.8326V13.0759H21.6707C22.5335 13.0759 23.3612 13.2208 24.1383 13.4792V8.58927H16.6138C16.0615 8.58927 15.6138 9.03699 15.6138 9.58927V11.7299C15.6138 11.978 15.4132 12.1785 15.1651 12.1785H12.4732C12.2251 12.1785 12.0245 11.978 12.0245 11.7299V9.58927C12.0245 9.03699 11.5768 8.58927 11.0245 8.58927H3.5V22.741C3.5 23.8456 4.39543 24.741 5.5 24.741H22.1383C23.2429 24.741 24.1383 23.8456 24.1383 22.741V18.8142ZM10.6785 22.4977C10.6785 22.7455 10.4777 22.9464 10.2299 22.9464H5.7433C5.49551 22.9464 5.29464 22.7455 5.29464 22.4977C5.29464 22.2499 5.49551 22.049 5.7433 22.049H10.2299C10.4777 22.049 10.6785 22.2499 10.6785 22.4977ZM10.6785 20.7031C10.6785 20.9509 10.4777 21.1517 10.2299 21.1517H5.7433C5.49551 21.1517 5.29464 20.9509 5.29464 20.7031C5.29464 20.4553 5.49551 20.2544 5.7433 20.2544H10.2299C10.4777 20.2544 10.6785 20.4553 10.6785 20.7031ZM5.36225 6.46447C6.29994 5.52678 7.57171 5 8.89779 5H14.9798L12.2878 7.69196H4.13477L5.36225 6.46447ZM16.2482 7.69196H24.4013L27.0932 5H18.9402L16.2482 7.69196ZM27.7271 5.6344V14.6462L25.0352 13.3002V8.32635L27.7271 5.6344Z"
                    fill="url(#paint0_linear_4723_154886)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4723_154886"
                      x1="15.8371"
                      y1="26.1511"
                      x2="7.14707"
                      y2="8.52384"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1B5EEB" />
                      <stop offset={1} stopColor="#4987FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div className="item-container--content">
                <p className="css-vrxl18 text-gray-10">Đổi trả trong 7 ngày</p>
                <p className="css-1bu4btk text-gray-7">kể từ ngày mua hàng</p>
              </div>
            </div>
            <div className="item-container">
              <span className="estore-icon mr-2 css-1z1316r">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 14.7622H5.16079V25.1344H1.5V14.7622Z"
                    fill="#7EB5FF"
                  />
                  <path
                    d="M29.3645 18.8073C29.143 18.3815 28.763 18.0598 28.3065 17.9114C27.85 17.7631 27.3535 17.8 26.924 18.0142L20.0478 21.5163C19.1753 22.8769 17.7537 23.7555 16.3199 23.0661L11.506 20.8025C11.3719 20.7262 11.2716 20.6019 11.2255 20.4547C11.1793 20.3075 11.1906 20.1483 11.2571 20.0091C11.3236 19.8699 11.4404 19.7611 11.5839 19.7045C11.7275 19.6479 11.8871 19.6478 12.0307 19.7042C17.2717 22.1448 16.9544 22.0715 17.3632 22.0837C18.8092 22.1509 19.7244 19.9056 18.1442 19.2039C9.52914 15.1587 10.7494 15.2869 6.38086 15.8299V23.9141C7.04486 23.8626 7.71132 23.9757 8.32108 24.2436C17.2046 28.2766 14.7031 28.362 28.5713 21.2723C28.7853 21.1626 28.9756 21.0118 29.1313 20.8285C29.287 20.6452 29.405 20.4331 29.4787 20.2041C29.5523 19.9752 29.5802 19.7341 29.5606 19.4944C29.541 19.2547 29.4744 19.0212 29.3645 18.8073Z"
                    fill="url(#paint0_linear_4723_154899)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.6878 18.8835C19.4058 18.552 19.0561 18.2847 18.6622 18.0995C17.2036 17.4142 16.0447 16.8626 15.1079 16.4169C11.7499 14.8188 11.248 14.58 10.041 14.4082V5H15.5322V8.66079C15.5325 8.7648 15.5594 8.86699 15.6103 8.95768C15.6613 9.04837 15.7345 9.12453 15.8232 9.17894C15.9118 9.23334 16.0129 9.26419 16.1168 9.26854C16.2207 9.27289 16.324 9.25061 16.4169 9.20381L18.5829 8.12387C19.0587 8.35989 19.4394 8.55355 19.7474 8.71021C20.9363 9.31491 21.0415 9.36839 21.3468 9.1794C21.6535 8.98954 21.6533 8.96282 21.6407 6.94829C21.6375 6.43803 21.6335 5.80025 21.6335 5H27.1247V16.6596C27.0631 16.6708 27.0143 16.6786 26.9659 16.6887C26.593 16.7667 26.2496 16.9859 20.2973 20.0214C20.1776 19.603 19.9698 19.215 19.6878 18.8835ZM24.6842 14.7621H22.2436C22.0818 14.7621 21.9266 14.8264 21.8122 14.9408C21.6978 15.0552 21.6335 15.2104 21.6335 15.3722C21.6335 15.5341 21.6978 15.6892 21.8122 15.8037C21.9266 15.9181 22.0818 15.9824 22.2436 15.9824H24.6842C24.846 15.9824 25.0012 15.9181 25.1156 15.8037C25.23 15.6892 25.2943 15.5341 25.2943 15.3722C25.2943 15.2104 25.23 15.0552 25.1156 14.9408C25.0012 14.8264 24.846 14.7621 24.6842 14.7621ZM19.3993 7.16896C18.722 6.83039 18.722 6.83039 18.5823 6.83039C18.446 6.83039 18.446 6.83039 17.8142 7.14588C17.5696 7.26801 17.2304 7.4374 16.752 7.67238V5H20.4127V7.67238C19.9653 7.45186 19.6397 7.28909 19.3993 7.16896Z"
                    fill="url(#paint1_linear_4723_154899)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4723_154899"
                      x1="18.1877"
                      y1="27.8176"
                      x2="14.7038"
                      y2="16.1535"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1B5EEB" />
                      <stop offset={1} stopColor="#4987FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_4723_154899"
                      x1="18.7405"
                      y1="21.0944"
                      x2="11.8273"
                      y2="8.09924"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1B5EEB" />
                      <stop offset={1} stopColor="#4987FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div className="item-container--content">
                <p className="css-vrxl18 text-gray-1000">Miễn phí 100%</p>
                <p className="css-1bu4btk text-gray-700">đổi hàng</p>
              </div>
            </div>
            <div className="item-container">
              <span className="estore-icon mr-2 css-1z1316r">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4723_154911)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.6544 22.1987C22.0338 20.3237 23.805 18.8337 25.7087 18.8337C27.5419 18.8337 28.8631 20.2156 28.8269 21.9925C30.8094 22.0444 31.3612 19.4338 31.3612 19.4338C31.5281 18.7038 31.7775 17.2806 31.9863 15.8837C32.0547 15.4525 32.0021 15.0107 31.8344 14.6075C31.3161 13.3978 30.6899 12.2372 29.9631 11.14C29.2756 10.1144 28.1225 9.50688 26.8062 9.485C26.0212 9.4725 25.2506 9.465 24.6687 9.465L24.6637 9.46C24.5887 8.205 23.6737 7.24375 22.3894 7.12875C21.5537 7.05437 18.2437 7 16.655 7C16.0237 7 15.1181 7.00875 14.2019 7.02375V7.02H14.1944H3.17813C3.03792 7.01992 2.89907 7.04747 2.76951 7.10109C2.63996 7.15471 2.52225 7.23334 2.42311 7.33248C2.32396 7.43162 2.24533 7.54934 2.19172 7.67889C2.1381 7.80844 2.11054 7.94729 2.11063 8.0875V8.0925C2.11063 8.37429 2.22257 8.64454 2.42182 8.8438C2.62108 9.04306 2.89133 9.155 3.17313 9.155H5.39375C5.66114 9.17471 5.91119 9.29479 6.09376 9.49115C6.27633 9.68751 6.3779 9.94563 6.37812 10.2137V10.2194C6.37854 10.3597 6.35127 10.4988 6.29788 10.6286C6.2445 10.7584 6.16605 10.8763 6.06701 10.9758C5.96797 11.0752 5.8503 11.1542 5.72073 11.2081C5.59115 11.262 5.45222 11.2898 5.31187 11.29H4.17312C3.89017 11.29 3.61881 11.4024 3.41873 11.6025C3.21865 11.8026 3.10625 12.0739 3.10625 12.3569C3.10617 12.497 3.1337 12.6358 3.18728 12.7653C3.24086 12.8949 3.31943 13.0125 3.41851 13.1117C3.51759 13.2108 3.63523 13.2894 3.76471 13.3431C3.89419 13.3968 4.03297 13.4244 4.17312 13.4244H5.31187C5.59499 13.4244 5.86652 13.5368 6.06671 13.737C6.26691 13.9372 6.37937 14.2088 6.37937 14.4919C6.37937 14.775 6.26691 15.0465 6.06671 15.2467C5.86652 15.4469 5.59499 15.5594 5.31187 15.5594H1.05187C0.768865 15.5594 0.497437 15.6718 0.297259 15.8718C0.0970823 16.0719 -0.0154593 16.3432 -0.015625 16.6262C-0.015625 16.9094 0.0968434 17.1809 0.297038 17.3811C0.497234 17.5813 0.768756 17.6937 1.05187 17.6937H5.31187C5.59499 17.6937 5.86652 17.8062 6.06671 18.0064C6.26691 18.2066 6.37937 18.4781 6.37937 18.7612C6.37904 19.0442 6.26643 19.3154 6.06627 19.5153C5.86611 19.7152 5.59478 19.8275 5.31187 19.8275H3.99437C3.71142 19.8275 3.44006 19.9399 3.23998 20.14C3.0399 20.3401 2.9275 20.6114 2.9275 20.8944C2.9275 21.1774 3.03988 21.4488 3.23994 21.649C3.44 21.8492 3.71136 21.9617 3.99437 21.9619L8.19812 21.9587L8.5475 21.0881C9.26313 19.7681 10.6869 18.8331 12.1944 18.8331C14.0988 18.8331 15.4513 20.3244 15.3025 22.2006H21.6537L21.6544 22.1987ZM24.5706 10.945C25.1287 10.945 25.8512 10.9525 26.5763 10.9644C27.455 10.9787 28.2237 11.3825 28.685 12.0712C29.1777 12.814 29.6205 13.5886 30.0106 14.39C30.2169 14.81 29.8375 15.3569 29.3406 15.3569H24.0125L24.5706 10.945ZM1.40508 11.3086C1.99447 11.3086 2.47227 11.7864 2.47227 12.3758C2.47227 12.9652 1.99447 13.443 1.40508 13.443C0.815687 13.443 0.337891 12.9652 0.337891 12.3758C0.337891 11.7864 0.815687 11.3086 1.40508 11.3086Z"
                      fill="url(#paint0_linear_4723_154911)"
                    />
                    <path
                      d="M13.189 24.0291C14.2103 23.0771 14.3676 21.5858 13.5402 20.6983C12.7129 19.8108 11.2143 19.8632 10.193 20.8152C9.17169 21.7673 9.01442 23.2585 9.84173 24.146C10.669 25.0335 12.1677 24.9812 13.189 24.0291Z"
                      fill="#7EB5FF"
                    />
                    <path
                      d="M26.7026 24.0291C27.724 23.0771 27.8812 21.5858 27.0539 20.6983C26.2266 19.8108 24.728 19.8631 23.7067 20.8152C22.6854 21.7673 22.5281 23.2585 23.3554 24.146C24.1827 25.0335 25.6813 24.9812 26.7026 24.0291Z"
                      fill="#7EB5FF"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4723_154911"
                      x1="16.2954"
                      y1="23.2864"
                      x2="11.8202"
                      y2="7.69953"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1B5EEB" />
                      <stop offset={1} stopColor="#4987FF" />
                    </linearGradient>
                    <clipPath id="clip0_4723_154911">
                      <rect width={32} height={32} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="item-container--content">
                <p className="css-vrxl18 text-gray-1000">Miễn phí vận chuyển</p>
                <p className="css-1bu4btk text-gray-700">
                  theo chính sách giao hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
