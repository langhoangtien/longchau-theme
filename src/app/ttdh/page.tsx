import Image from "next/image";

export default function OrderComplete() {
  return (
    <div className="container md:container css-1zrptk">
      <div className="css-1wn7moc">
        <div className="pt-0 md:pt-9" />
        <div className="lc-row relative flex flex-wrap gap-5 css-nnuuop">
          <div className="lc-col lc-col-12  md:!max-w-[100%] md:!flex-1 css-8xf2v8">
            <div className="lc-row relative flex flex-wrap  css-nnuuop">
              <div className="lc-col lc-col-12   css-gq202r">
                <div className="bg-white pb-4 md:rounded-xl">
                  <div className="shadow-divider-1pt flex px-4 py-3 shadow-[0_1px_0_0]">
                    <div className="flex max-w-[248px] flex-wrap leading-[1] flex-col md:flex-row md:flex md:max-w-[585px] md:flex-nowrap md:items-center mr-auto ">
                      <div className="flex items-center">
                        <p className="text-label2 md:text-label1 font-semibold text-text-primary line-clamp-1 !mr-1 ">
                          Đơn hàng 28/08/2024
                        </p>
                      </div>
                      <div className="mt-1 inline-flex md:mt-0 md:leading-none flex-1 md:flex-none">
                        <div className="flex items-center">
                          <span className="bg-divider-1pt !mx-[6px] inline-flex h-1 w-1 rounded-full md:!mx-2" />
                          <span className="css-4tpsp9 text-text-secondary">
                            Giao hàng tận nơi
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-divider-1pt !mx-[6px] inline-flex h-1 w-1 rounded-full md:!mx-2" />
                          <span className="css-4tpsp9 text-text-secondary">
                            #9807215
                          </span>
                        </div>
                        <span className="estore-icon text-text-secondary ml-1 inline-block cursor-pointer md:!hidden css-wi4pw5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.4978 1.5C8.84095 1.5 7.4978 2.84315 7.4978 4.5V16.5C7.4978 18.1569 8.84095 19.5 10.4978 19.5L18 19.5C19.6569 19.5 21 18.1569 21 16.5V8.25H20.9978V6.62132C20.9978 6.02458 20.7607 5.45229 20.3388 5.03033L17.4675 2.15901C17.0455 1.73705 16.4732 1.5 15.8765 1.5H10.4978ZM18 18L10.4978 18C9.66938 18 8.9978 17.3284 8.9978 16.5V4.5C8.9978 3.67157 9.66938 3 10.4978 3H14.9978V5.25C14.9978 6.49264 16.0052 7.5 17.2478 7.5H19.4978V9.09203L19.5 9.09153V16.5C19.5 17.3284 18.8284 18 18 18ZM19.1871 6H17.2478C16.8336 6 16.4978 5.66421 16.4978 5.25V3.31066L19.1871 6ZM4.5 6C4.5 5.17157 5.17157 4.5 6 4.5V16.5C6 18.9853 8.01472 21 10.5 21L18 21C18 21.8284 17.3284 22.5 16.5 22.5H10.1842C7.04491 22.5 4.5 19.9551 4.5 16.8158V6Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <p className="css-15sc8tc text-text-focus ml-1 hidden cursor-pointer md:inline-block">
                          Sao chép
                        </p>
                      </div>
                    </div>
                    <div className="ml-[10px] flex items-center justify-center self-start">
                      <div className="bg-semantic-error tab-item-header-dot h-2 w-2 rounded-full" />
                      <div className="css-5gg2ui text-semantic-error ml-[6px]">
                        Đã hủy
                      </div>
                    </div>
                  </div>
                  <div className="lc-row relative flex flex-wrap border-divider-1pt border-b px-4 py-4 md:border-b-2 css-nnuuop">
                    <div className="lc-col lc-col-12  order-2 md:order-1 css-1tafiz8">
                      <p className="css-e30d1v text-text-primary">
                        Đơn hàng đã hủy lúc 11:48 ngày 28/08/2024
                      </p>
                      <p className="css-1oqd6bl text-text-primary mt-2">
                        Rất mong được phục vụ bạn trong lần tới.
                      </p>
                    </div>
                  </div>
                  <div className="lc-row relative flex flex-wrap border-divider-1pt !gap-3 border-b px-4 py-4 md:border-b-2 css-nnuuop">
                    <div className="lc-col lc-col-12  md:!basic-[200px] !flex items-start md:!w-full md:!max-w-[200px] md:!py-2 css-8xf2v8">
                      <span className="estore-icon mr-[10px] css-wi4pw5">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_7602_243860)">
                            <path
                              d="M16.4875 13.4375L15.5906 10.3125H13.4375V13.125C13.4375 13.5394 13.2729 13.9368 12.9799 14.2299C12.6868 14.5229 12.2894 14.6875 11.875 14.6875H10.3125C10.2625 14.375 10.5406 13.2938 9.58125 12.4344C9.79439 12.3595 9.97912 12.2205 10.1101 12.0364C10.241 11.8523 10.3117 11.6322 10.3125 11.4063C10.3118 11.2438 10.2744 11.0835 10.2031 10.9375H10.6844L11.3531 14.0625H11.875C12.1236 14.0625 12.3621 13.9637 12.5379 13.7879C12.7137 13.6121 12.8125 13.3736 12.8125 13.125V11.9188L12.3594 9.80313C12.3144 9.59363 12.199 9.40586 12.0324 9.2711C11.8658 9.13634 11.658 9.06272 11.4437 9.0625H10.5656C10.8219 8.59063 11.2094 7.925 11.4594 7.525L11.9656 8.03438C12.0093 8.07755 12.0647 8.1069 12.125 8.11875L13.4375 8.38125V9.6875H15.9375C16.1861 9.6875 16.4246 9.58873 16.6004 9.41291C16.7762 9.2371 16.875 8.99864 16.875 8.75V6.875C16.875 6.62636 16.7762 6.3879 16.6004 6.21209C16.4246 6.03627 16.1861 5.9375 15.9375 5.9375H13.75C13.6671 5.9375 13.5876 5.97043 13.529 6.02903C13.4704 6.08764 13.4375 6.16712 13.4375 6.25V6.4375L12.9062 6.31875C12.4377 5.81128 11.9422 5.32933 11.4219 4.875C11.2305 4.76521 11.0162 4.70155 10.796 4.68907C10.5758 4.67659 10.3556 4.71565 10.1531 4.80313C9.33518 5.15629 8.59817 5.67315 7.9875 6.32188C7.32857 7.05779 6.83046 7.92311 6.525 8.8625C6.44284 9.09711 6.41785 9.34794 6.45209 9.59414C6.48633 9.84035 6.57882 10.0748 6.72188 10.2781L6.75313 10.3125H3.59375C3.35079 10.3118 3.11454 10.3922 2.9225 10.5411C2.73045 10.6899 2.5936 10.8986 2.53366 11.1341C2.47372 11.3695 2.49412 11.6182 2.59162 11.8408C2.68913 12.0633 2.85815 12.2469 3.07188 12.3625C2.42668 12.7104 1.88763 13.2264 1.51187 13.8558C1.13611 14.4852 0.937642 15.2045 0.9375 15.9375C0.9375 16.0204 0.970424 16.0999 1.02903 16.1585C1.08763 16.2171 1.16712 16.25 1.25 16.25H1.875C1.875 16.9959 2.17132 17.7113 2.69876 18.2387C3.22621 18.7662 3.94158 19.0625 4.6875 19.0625C5.43342 19.0625 6.14879 18.7662 6.67624 18.2387C7.20368 17.7113 7.5 16.9959 7.5 16.25H13.4375C13.4394 16.7957 13.6001 17.3291 13.8999 17.785C14.1997 18.241 14.6257 18.6 15.1259 18.8181C15.6261 19.0362 16.179 19.104 16.7171 19.0134C17.2553 18.9227 17.7554 18.6775 18.1566 18.3076C18.5578 17.9376 18.8427 17.459 18.9765 16.9299C19.1104 16.4009 19.0875 15.8443 18.9106 15.3281C18.7336 14.8119 18.4104 14.3583 17.9801 14.0226C17.5499 13.6869 17.0313 13.4836 16.4875 13.4375ZM4.6875 18.4375C4.25485 18.4375 3.83192 18.3092 3.47219 18.0688C3.11246 17.8285 2.83208 17.4868 2.66651 17.0871C2.50095 16.6874 2.45763 16.2476 2.54203 15.8232C2.62644 15.3989 2.83478 15.0091 3.1407 14.7032C3.44663 14.3973 3.83641 14.1889 4.26074 14.1045C4.68507 14.0201 5.12491 14.0634 5.52462 14.229C5.92433 14.3946 6.26597 14.675 6.50634 15.0347C6.74671 15.3944 6.875 15.8174 6.875 16.25C6.875 16.5373 6.81842 16.8217 6.70849 17.0871C6.59855 17.3525 6.43742 17.5937 6.2343 17.7968C6.03117 17.9999 5.79002 18.1611 5.52462 18.271C5.25922 18.3809 4.97477 18.4375 4.6875 18.4375ZM16.25 18.4375C15.8174 18.4375 15.3944 18.3092 15.0347 18.0688C14.675 17.8285 14.3946 17.4868 14.229 17.0871C14.0634 16.6874 14.0201 16.2476 14.1045 15.8232C14.1889 15.3989 14.3973 15.0091 14.7032 14.7032C15.0091 14.3973 15.3989 14.1889 15.8232 14.1045C16.2476 14.0201 16.6874 14.0634 17.0871 14.229C17.4868 14.3946 17.8285 14.675 18.0688 15.0347C18.3092 15.3944 18.4375 15.8174 18.4375 16.25C18.4375 16.5373 18.3809 16.8217 18.271 17.0871C18.1611 17.3525 17.9999 17.5937 17.7968 17.7968C17.5937 17.9999 17.3525 18.1611 17.0871 18.271C16.8217 18.3809 16.5373 18.4375 16.25 18.4375Z"
                              fill="url(#paint0_linear_7602_243860)"
                            />
                            <path
                              d="M16.25 17.5C16.9404 17.5 17.5 16.9404 17.5 16.25C17.5 15.5596 16.9404 15 16.25 15C15.5596 15 15 15.5596 15 16.25C15 16.9404 15.5596 17.5 16.25 17.5Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M4.6875 17.5C5.37786 17.5 5.9375 16.9404 5.9375 16.25C5.9375 15.5596 5.37786 15 4.6875 15C3.99714 15 3.4375 15.5596 3.4375 16.25C3.4375 16.9404 3.99714 17.5 4.6875 17.5Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M5.9375 6.25C5.9375 6.16712 5.90458 6.08763 5.84597 6.02903C5.78737 5.97042 5.70788 5.9375 5.625 5.9375H1.25C1.16712 5.9375 1.08763 5.97042 1.02903 6.02903C0.970424 6.08763 0.9375 6.16712 0.9375 6.25V9.6875H5.9375V6.25Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M15.625 2.65625C15.6242 2.20066 15.4428 1.76397 15.1207 1.44182C14.7985 1.11967 14.3618 0.938326 13.9062 0.9375H12.9688C12.5159 0.938295 12.0815 1.11749 11.7598 1.43628C11.4381 1.75506 11.2549 2.18775 11.25 2.64062V3.4C11.2506 3.92558 11.4404 4.43336 11.7847 4.83046C12.129 5.22756 12.6048 5.48742 13.125 5.5625V3.125C13.125 3.04212 13.1579 2.96263 13.2165 2.90403C13.2751 2.84542 13.3546 2.8125 13.4375 2.8125H15.625V2.65625Z"
                              fill="url(#paint1_linear_7602_243860)"
                            />
                            <path
                              d="M13.75 5.37812C13.986 5.36272 14.2164 5.29956 14.4272 5.19249C14.638 5.08541 14.8249 4.93664 14.9766 4.75519C15.1282 4.57374 15.2415 4.3634 15.3094 4.1369C15.3774 3.9104 15.3986 3.67246 15.3719 3.4375H13.75V5.37812Z"
                              fill="url(#paint2_linear_7602_243860)"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_7602_243860"
                              x1="19.0625"
                              y1="19.0625"
                              x2="5.06437"
                              y2="1.4136"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_7602_243860"
                              x1="15.625"
                              y1="5.5625"
                              x2="11.0071"
                              y2="1.19425"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_7602_243860"
                              x1="15.3831"
                              y1="5.37812"
                              x2="13.471"
                              y2="3.76907"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                            <clipPath id="clip0_7602_243860">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="css-tc11gt text-text-secondary">
                        Tài xế giao hàng
                      </span>
                    </div>
                    <div className="lc-col lc-col-12  h-12 md:!flex md:h-9 md:!max-w-full md:!flex-1 md:justify-end css-icmukv">
                      <div className="inline-flex h-12 md:h-9">
                        <div className="h-12 w-12 md:!h-9 md:!w-9">
                          <picture className="h-12 w-12 md:!h-9 md:!w-9">
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://s3-sgn09.fptcloud.com/lc-public/Shipment/IconTranfer/Grab.png"
                              type="image/webp"
                              width={48}
                              height={48}
                            />
                            <source
                              srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                              type="image/webp"
                              width={48}
                              height={48}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="delivery-partner"
                              className="h-12 w-12 md:!h-9 md:!w-9"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                            />
                          </picture>
                        </div>
                        <div className="ml-3 md:flex md:items-center">
                          <p className="css-1ydly1u text-text-primary line-clamp-1">
                            Dương Văn Mỹ Cóp
                          </p>
                          <span className="bg-divider-1pt mx-2 hidden h-1 w-1 rounded-full md:inline-block" />
                          <div className="inline-flex items-center justify-start">
                            <p className="css-15sc8tc text-text-tertiary line-clamp-1 mt-1 md:mt-0">
                              0706 824 245
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lc-row relative flex flex-wrap !items-stretch divide-y divide-[var(--gray-200)] px-[16px] md:!mx-[-12px] md:mt-[16px] md:divide-y-0 md:divide-x md:divide-[var(--gray-400)] css-1tnnxqh">
                    <div className="lc-col lc-col-12  py-[16px] md:!max-w-none md:!flex-1 md:py-0 md:!px-[12px] css-yefnbq">
                      <div className="flex items-center">
                        <span className="estore-icon  css-wi4pw5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 12C14.7614 12 17 9.76141 17 6.99998C17 4.23856 14.7614 1.99998 12 1.99998C9.23858 1.99998 7 4.23856 7 6.99998C7 9.76141 9.23858 12 12 12Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                              fill="url(#paint0_linear_3708_96166)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3708_96166"
                                x1="21.0902"
                                y1="22.5"
                                x2="15.1916"
                                y2="9.09562"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#1250DC" />
                                <stop offset={1} stopColor="#306DE4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <p className="text-body2 font-semibold text-text-secondary ml-1 md:ml-[10px]">
                          Thông tin người nhận
                        </p>
                      </div>
                      <div className="mt-3 flex items-center md:flex-col md:items-start">
                        <span
                          className="css-1v577ri text-text-primary line-clamp-1"
                          title="Hoàng Văn Tuấn"
                        >
                          Hoàng Văn Tuấn
                        </span>
                        <span className="bg-divider-1pt mx-2 block h-1 w-1 rounded-full md:hidden" />
                        <span className="css-1e35xzr text-text-secondary md:mt-1">
                          09xx xxx 547
                        </span>
                      </div>
                    </div>
                    <div className="lc-col lc-col-12  py-[16px] md:!max-w-none md:!flex-1 md:py-0 md:!px-[12px] css-yefnbq">
                      <div className="flex items-center">
                        <span className="estore-icon  css-wi4pw5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.52714 19.642C9.18736 19.5903 9.82806 19.8874 10.2011 20.4346C10.4905 20.8591 10.7647 21.2937 11.0235 21.7371C11.0931 21.8568 11.1932 21.9561 11.3172 22.0257C11.3732 22.0576 11.4326 22.0826 11.4954 22.1C11.5701 22.1208 11.6465 22.1314 11.7246 22.131C11.8672 22.131 12.0081 22.0941 12.1321 22.0245C12.2543 21.9549 12.3545 21.8551 12.4224 21.7359L12.4886 21.62C12.7276 21.2183 12.9792 20.8241 13.2432 20.4381C13.6173 19.891 14.259 19.5943 14.9197 19.6472C18.1232 19.9034 20.3847 20.5297 20.3847 21.2618C20.3847 22.2218 16.4935 23.0002 11.6924 23.0002C6.89119 23.0002 3 22.2218 3 21.2618C3 20.5252 5.29111 19.8951 8.52714 19.642Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M16.9616 3.04077C16.1919 2.33939 15.29 1.79873 14.3086 1.45047C13.3273 1.10222 12.2863 0.953388 11.2467 1.0127C10.207 1.07202 9.18972 1.33828 8.25435 1.79589C7.31898 2.2535 6.48438 2.89324 5.79948 3.67761C5.11458 4.46198 4.59316 5.37519 4.26579 6.3637C3.93843 7.35222 3.8117 8.39614 3.89305 9.43426C3.97439 10.4724 4.26217 11.4838 4.73951 12.4093C5.21686 13.3347 5.87415 14.1556 6.67287 14.8237C8.4989 16.3418 10.0246 18.1884 11.1712 20.268C11.2272 20.3715 11.3103 20.458 11.4115 20.5181C11.5128 20.5783 11.6284 20.6099 11.7462 20.6096C11.8638 20.6095 11.9793 20.5776 12.0803 20.5172C12.1813 20.4568 12.2641 20.3703 12.3199 20.2666L12.3733 20.1662C13.5281 18.1119 15.0507 16.2872 16.8651 14.7833C17.7059 14.0566 18.3821 13.159 18.8486 12.1504C19.3151 11.1417 19.5611 10.0451 19.5702 8.93386C19.5793 7.82258 19.3514 6.72214 18.9016 5.70593C18.4517 4.68973 17.7904 3.78114 16.9616 3.04077ZM11.7462 12.1345C11.1015 12.1345 10.4713 11.9433 9.93521 11.5852C9.39916 11.227 8.98137 10.7179 8.73465 10.1223C8.48794 9.52666 8.42339 8.87125 8.54916 8.23895C8.67493 7.60664 8.98539 7.02583 9.44125 6.56996C9.89712 6.11409 10.4779 5.80364 11.1102 5.67787C11.7425 5.55209 12.398 5.61664 12.9936 5.86336C13.5892 6.11007 14.0983 6.52787 14.4565 7.06391C14.8146 7.59996 15.0058 8.23017 15.0058 8.87487C15.0048 9.73906 14.661 10.5676 14.0499 11.1786C13.4389 11.7897 12.6104 12.1335 11.7462 12.1345Z"
                              fill="url(#paint0_linear_3708_96171)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3708_96171"
                                x1="19.5705"
                                y1="20.6096"
                                x2="0.435545"
                                y2="5.28825"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#1250DC" />
                                <stop offset={1} stopColor="#306DE4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="css-tc11gt text-text-secondary ml-1 md:ml-[10px]">
                          Nhận hàng tại
                        </span>
                      </div>
                      <p
                        className="css-1v577ri text-text-primary line-clamp-3 mt-3"
                        title="xxx, Phường An Khánh, Quận Ninh Kiều, Cần Thơ"
                      >
                        xxx, Phường An Khánh, Quận Ninh Kiều, Cần Thơ
                      </p>
                    </div>
                    <div className="lc-col lc-col-12  pt-[16px] md:!max-w-none md:!flex-1 md:!px-[12px] md:pt-0 css-yefnbq">
                      <div className="flex items-center">
                        <span className="estore-icon  css-wi4pw5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9803 8.47375L20.849 3.94625C20.7103 3.39 20.2103 3 19.6365 3H4.36277C3.78902 3 3.28902 3.39 3.14902 3.94625L2.01777 8.47375C2.00527 8.5225 1.99902 8.57375 1.99902 8.625C1.99902 10.3475 3.33027 11.75 4.96777 11.75C5.91902 11.75 6.76777 11.2762 7.31152 10.5413C7.85527 11.2762 8.70402 11.75 9.65527 11.75C10.6065 11.75 11.4553 11.2762 11.999 10.5413C12.5428 11.2762 13.3903 11.75 14.3428 11.75C15.2953 11.75 16.1428 11.2762 16.6865 10.5413C17.2303 11.2762 18.0778 11.75 19.0303 11.75C20.6678 11.75 21.999 10.3475 21.999 8.625C21.999 8.57375 21.9928 8.5225 21.9803 8.47375Z"
                              fill="#ACC0F3"
                            />
                            <path
                              d="M19.0322 13.0445C18.181 13.0445 17.3722 12.7687 16.6885 12.2648C15.321 13.2739 13.3685 13.2739 12.001 12.2648C10.6335 13.2739 8.68098 13.2739 7.31348 12.2648C6.62973 12.7687 5.82098 13.0445 4.96973 13.0445C4.35598 13.0445 3.77723 12.892 3.25098 12.6321V19.674C3.25098 20.4058 3.81098 20.9998 4.50098 20.9998H9.50098V15.6963H14.501V20.9998H19.501C20.191 20.9998 20.751 20.4058 20.751 19.674V12.6321C20.2247 12.892 19.646 13.0445 19.0322 13.0445Z"
                              fill="url(#paint0_linear_3708_96163)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3708_96163"
                                x1="20.751"
                                y1="20.9998"
                                x2="13.7702"
                                y2="7.01426"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#1250DC" />
                                <stop offset={1} stopColor="#306DE4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <p className="text-body2 font-semibold text-text-secondary ml-[10px]">
                          Nhà thuốc xử lý đơn
                        </p>
                      </div>
                      <p
                        className="css-1v577ri text-text-primary line-clamp-3 mt-3"
                        title="Nhà thuốc Long Châu 24 Nguyễn Hiền, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ"
                      >
                        Nhà thuốc Long Châu 24 Nguyễn Hiền, P. An Khánh, Q. Ninh
                        Kiều, TP. Cần Thơ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lc-col lc-col-12  md:!w-[372px] md:!max-w-[372px] md:!basis-[372px] css-icmukv">
            <p className="text-text-primary text-body2 mx-4 mb-2 font-medium md:hidden">
              Thông tin thanh toán
            </p>
            <div>
              <div className="rounded-none bg-white py-4 px-4 md:rounded-t-xl md:py-3">
                <p className="text-text-primary text-body1 mb-3 hidden font-medium md:block">
                  Thông tin thanh toán
                </p>
                <div className="mb-2">
                  <div className="flex pb-1 md:pb-0">
                    <span className="text-text-secondary md:text-body1 text-body2 font-normal">
                      Tổng tiền
                    </span>
                    <span className="text-text-primary text-body2 md:text-body1 ml-auto font-medium">
                      699.000đ
                    </span>
                  </div>
                  <div className="mt-2 flex pb-1 md:pb-0">
                    <span className="text-text-secondary text-body2 md:text-body1 font-normal">
                      Giảm giá trực tiếp
                    </span>
                    <span className="text-semantic-warning text-body2 md:text-body1 ml-auto font-medium">
                      -132.810đ
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-center pb-1 md:pb-0">
                    <span className="text-text-secondary md:text-body1 text-body2 mr-[6px] font-normal">
                      Giảm giá voucher
                    </span>
                    <svg
                      className="text-text-tertiary m-[2px] h-4 w-4"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24.25 32C23.4216 32 22.75 32.6716 22.75 33.5C22.75 34.3284 23.4216 35 24.25 35C25.0784 35 25.75 34.3284 25.75 33.5C25.75 32.6716 25.0784 32 24.25 32ZM24.25 13C20.8864 13 18 15.8846 18 19.25C18 19.9404 18.5596 20.5 19.25 20.5C19.8541 20.5 20.358 20.0715 20.4746 19.5019L20.4935 19.3778L20.5055 19.0587C20.6142 17.1536 22.3307 15.5 24.25 15.5C26.2346 15.5 28 17.2634 28 19.25C28.0011 20.437 27.5794 21.29 26.3804 22.6455L26.1734 22.8762L25.1461 23.9739C23.5147 25.7467 22.8251 26.9703 22.8379 28.7589C22.8428 29.4493 23.4065 30.0049 24.0968 30.0001C24.6577 29.996 25.1297 29.6231 25.2843 29.1132L25.3143 28.9932L25.3323 28.8689L25.3379 28.7411L25.3409 28.5793C25.377 27.7786 25.7351 27.0936 26.6221 26.0726L26.8066 25.8638L27.8216 24.7772C29.7314 22.7192 30.502 21.3691 30.5 19.2488C30.5 15.8821 27.6147 13 24.25 13Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-semantic-warning text-body2 md:text-body1 ml-auto font-medium">
                      0đ
                    </span>
                  </div>
                  <div className="mt-2 flex pb-1 md:mt-3 md:pb-0">
                    <span className="text-text-secondary md:text-body1 text-body2 font-normal">
                      Phí vận chuyển
                    </span>
                    <span className="text-body2 md:text-body1 ml-auto font-medium text-text-focus">
                      Miễn phí
                    </span>
                  </div>
                </div>
                <div className="border-divider-1pt flex items-center justify-center border-y py-3">
                  <span className="text-text-secondary md:text-body1 text-body2 font-medium">
                    Thành tiền
                  </span>
                  <span className="text-text-focus text-heading2 md:text-heading3 ml-auto font-semibold">
                    566.190đ
                  </span>
                </div>
                <div className="mt-[10px] mb-3">
                  <div className="mb-3 flex justify-between">
                    <p className="text-text-primary text-body2 font-medium">
                      Phương thức thanh toán
                    </p>
                  </div>
                  <div className="flex items-center justify-start mt-0">
                    <div className="shrink-0">
                      <Image
                        alt="payment-method"
                        loading="lazy"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                        src="/icons/png/cod.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <span className="text-text-primary line-clamp-2 text-label2 ml-3 font-normal">
                      Thanh toán tiền mặt khi nhận hàng
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-[-1px] hidden w-full md:block">
                <svg
                  width="auto"
                  height={24}
                  viewBox="0 0 384 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H384V15.25C384 17.8112 384 19.0917 383.615 20.1135C383.007 21.7306 381.731 23.0068 380.113 23.6154C379.092 24 377.811 24 375.25 24C373.55 24 372.7 24 372.131 23.8888C370.435 23.5578 371.033 23.8255 369.656 22.7819C369.194 22.4314 367.279 20.2894 363.449 16.0053C361.252 13.5472 358.057 12 354.5 12C349.957 12 346.004 14.524 343.967 18.2462C342.376 21.1529 339.814 24 336.5 24C333.186 24 330.624 21.1529 329.033 18.2462C326.996 14.524 323.043 12 318.5 12C313.957 12 310.004 14.524 307.967 18.2462C306.376 21.1529 303.814 24 300.5 24C297.186 24 294.624 21.1529 293.033 18.2462C290.996 14.524 287.043 12 282.5 12C277.957 12 274.004 14.524 271.967 18.2462C270.376 21.1529 267.814 24 264.5 24C261.186 24 258.624 21.1529 257.033 18.2462C254.996 14.524 251.043 12 246.5 12C241.957 12 238.004 14.524 235.967 18.2462C234.376 21.1529 231.814 24 228.5 24C225.186 24 222.624 21.1529 221.033 18.2462C218.996 14.524 215.043 12 210.5 12C205.957 12 202.004 14.524 199.967 18.2462C198.376 21.1529 195.814 24 192.5 24C189.186 24 186.624 21.1529 185.033 18.2462C182.996 14.524 179.043 12 174.5 12C169.957 12 166.004 14.524 163.967 18.2462C162.376 21.1529 159.814 24 156.5 24C153.186 24 150.624 21.1529 149.033 18.2462C146.996 14.524 143.043 12 138.5 12C133.957 12 130.004 14.524 127.967 18.2462C126.376 21.1529 123.814 24 120.5 24C117.186 24 114.624 21.1529 113.033 18.2462C110.996 14.524 107.043 12 102.5 12C97.9574 12 94.0044 14.524 91.9668 18.2462C90.3757 21.1529 87.8137 24 84.5 24C81.1863 24 78.6243 21.1529 77.0332 18.2462C74.9956 14.524 71.0426 12 66.5 12C61.9574 12 58.0044 14.524 55.9668 18.2462C54.3757 21.1529 51.8137 24 48.5 24C45.1863 24 42.6243 21.1529 41.0332 18.2462C38.9956 14.524 35.0426 12 30.5 12C27.1233 12 24.0723 13.3947 21.8918 15.6395C17.3526 20.3123 15.083 22.6487 14.5384 23.008C13.3234 23.8097 13.9452 23.5469 12.5236 23.8598C11.8864 24 11.0076 24 9.25 24C6.21942 24 4.70412 24 3.52376 23.4652C2.19786 22.8644 1.13557 21.8021 0.534817 20.4762C0 19.2959 0 17.7806 0 14.75V0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-2 fixed bottom-0 left-0 right-0 z-20 w-full rounded-t-3xl px-4 py-4 md:hidden flex flex-col gap-4">
          <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[12px] px-[24px] h-[48px] rounded-[42px] text-label1 w-full">
            Hỗ trợ
          </button>
        </div>
      </div>
    </div>
  );
}
