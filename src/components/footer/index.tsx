export default function Footer() {
  return (
    <footer>
      <div className="relative top-0 left-0 bg-[#2167dd] py-4 px-0 text-center">
        <div className="container-lite relative">
          <div className="flex justify-center md:justify-between flex-col md:flex-row items-center">
            <a
              className="mb-2 text-body2 omd:text-heading1 omd:mb-0 omd:font-normal flex items-center text-white"
              href="/he-thong-cua-hang"
            >
              <svg
                width={28}
                height={28}
                className="hidden omd:inline-block mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4189 2C16.8372 2 20.4189 5.64568 20.4189 10.1429C20.4189 13.5133 17.8948 17.0459 12.9523 20.819C12.6362 21.0603 12.2017 21.0603 11.8856 20.819C6.94304 17.0459 4.41895 13.5133 4.41895 10.1429C4.41895 5.64568 8.00067 2 12.4189 2ZM12.4189 7.42857C10.9462 7.42857 9.75228 8.6438 9.75228 10.1429C9.75228 11.6419 10.9462 12.8571 12.4189 12.8571C13.8917 12.8571 15.0856 11.6419 15.0856 10.1429C15.0856 8.6438 13.8917 7.42857 12.4189 7.42857Z"
                  fill="currentColor"
                />
              </svg>
              Xem hệ thống nhà thuốc trên toàn quốc
            </a>
            <a href="/he-thong-cua-hang">
              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bg-button-secondary-active text-text-focus active:bg-button-secondary-pressed py-[12px] px-[24px] h-[48px] rounded-[42px] text-label1">
                Xem danh sách nhà thuốc
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom relative bg-white pb-4 mb-0">
        <div className="container-lite relative">
          <div className="relative">
            <div className="md:hidden">
              <div className="umd:bg-layer-gray -mx-4 flex justify-between items-center p-4 gap-3 md:gap-2 md:flex-col md:items-start md:py-0">
                <div className="flex-1">
                  <h4 className="text-body1 md:text-caption md:text-text-tertiary md:font-bold font-semibold text-text-primary">
                    TẢI ỨNG DỤNG LONG CHÂU
                  </h4>
                  <p className="text-caption mt-1 text-text-secondary md:hidden">
                    Mua thuốc trực tuyến, giao hàng tận nơi dễ dàng và nhanh
                    chóng
                  </p>
                  <div className="flex gap-x-2 md:hidden mt-3 gap-3">
                    <a href="https://dl.ntlc.com.vn/app/home">
                      <img
                        alt="icon-download"
                        loading="lazy"
                        width={131}
                        height={43}
                        decoding="async"
                        data-nimg={1}
                        className="w-[100px] md:w-[131px] umd:max-h-[43px] object-cover"
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="umd:p-3 bg-white rounded-lg w-fit h-fit flex-shrink-0">
                  <img
                    alt="icon-download"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="h-[72px] w-[72px] md:h-[100px] md:w-[100px]"
                    srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png 2x"
                    src="https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="border-b py-3">
                <div className="hover:cursor-pointer group" data-state="closed">
                  <div className="flex justify-between items-center">
                    <p className="text-body2 text-text-secondary font-semibold">
                      TỔNG ĐÀI
                    </p>
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="text-icon-secondary duration-0 group-data-[state=open]:scale-y-[-1]"
                    >
                      <path
                        d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="Collapse_collapse-wrapper__FiMUw invisible"
                  data-state="closed"
                >
                  <div className="Collapse_collapse-inner__56IHT">
                    <div className="flex flex-col mt-1 gap-2">
                      <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                        <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                          Tư vấn mua hàng
                        </p>
                        <a className="inline-block" href="tel:18006928">
                          <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                            18006928
                            <span className="font-normal md:text-text-tertiary">
                              {" "}
                              (Nhánh 1)
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                        <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                          Trung tâm Vắc xin
                        </p>
                        <a className="inline-block" href="tel:18006928">
                          <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                            18006928
                            <span className="font-normal md:text-text-tertiary">
                              {" "}
                              (Nhánh 2)
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                        <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                          Góp ý, khiếu nại
                        </p>
                        <a className="inline-block" href="tel:18006928">
                          <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                            18006928
                            <span className="font-normal md:text-text-tertiary">
                              {" "}
                              (Nhánh 3)
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="flex flex-col gap-2">
                  <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                    HỖ TRỢ THANH TOÁN
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg 1x, https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg 1x, https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg 1x, https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg 1x, https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg 1x, https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                      href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width={36}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="flex omd:flex-col umd:justify-between umd:items-center mt-1 gap-2">
                  <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                    KẾT NỐI VỚI CHÚNG TÔI
                  </p>
                  <div className="flex gap-[16px] umd:py-1 mb-1">
                    <a href="https://www.facebook.com/Nhathuocfptlongchau">
                      <img
                        alt="Facebook"
                        loading="lazy"
                        width={28}
                        height={28}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a href="https://zalo.me/3822805105108870889">
                      <img
                        alt="Zalo"
                        loading="lazy"
                        width={28}
                        height={28}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="hover:cursor-pointer group" data-state="closed">
                  <div className="flex justify-between items-center">
                    <p className="text-body2 text-text-secondary font-semibold">
                      VỀ CHÚNG TÔI
                    </p>
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="text-icon-secondary duration-0 group-data-[state=open]:scale-y-[-1]"
                    >
                      <path
                        d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="Collapse_collapse-wrapper__FiMUw invisible"
                  data-state="closed"
                >
                  <div className="Collapse_collapse-inner__56IHT">
                    <div className="flex flex-col mt-1 gap-2">
                      <ul className="gap-2 flex flex-col">
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/gioi-thieu"
                        >
                          Giới thiệu
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/he-thong-cua-hang"
                        >
                          Hệ thống cửa hàng
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/giay-phep-kinh-doanh"
                        >
                          Giấy phép kinh doanh
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/tos"
                        >
                          Quy chế hoạt động
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-dat-coc"
                        >
                          Chính sách đặt cọc
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-noi-dung"
                        >
                          Chính sách nội dung
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-doi-tra"
                        >
                          Chính sách đổi trả thuốc
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-giao-hang"
                        >
                          Chính sách giao hàng
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-bao-mat"
                        >
                          Chính sách bảo mật
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-thanh-toan"
                        >
                          Chính sách thanh toán
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="https://hddt.nhathuoclongchau.com.vn/"
                        >
                          Kiểm tra hóa đơn điện tử
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
                        >
                          Chính sách thu thập và xử lý dữ liệu cá nhân
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/chinh-sach-hoan-huy-doi-tra-vaccine"
                        >
                          Chính sách hoàn hủy đổi trả Vắc xin
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="hover:cursor-pointer group" data-state="closed">
                  <div className="flex justify-between items-center">
                    <p className="text-body2 text-text-secondary font-semibold">
                      DANH MỤC
                    </p>
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="text-icon-secondary duration-0 group-data-[state=open]:scale-y-[-1]"
                    >
                      <path
                        d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="Collapse_collapse-wrapper__FiMUw invisible"
                  data-state="closed"
                >
                  <div className="Collapse_collapse-inner__56IHT">
                    <div className="flex flex-col mt-1 gap-2">
                      <ul className="gap-2 flex flex-col">
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/thuc-pham-chuc-nang"
                        >
                          Thực phẩm chức năng
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/duoc-my-pham"
                        >
                          Dược mỹ phẩm
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/cham-soc-ca-nhan"
                        >
                          Chăm sóc cá nhân
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/thuoc"
                        >
                          Thuốc
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/trang-thiet-bi-y-te"
                        >
                          Trang thiết bị y tế
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/don-thuoc"
                        >
                          Đặt thuốc online
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/trung-tam-tiem-chung"
                        >
                          Trung tâm Tiêm chủng
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="hover:cursor-pointer group" data-state="closed">
                  <div className="flex justify-between items-center">
                    <p className="text-body2 text-text-secondary font-semibold">
                      TÌM HIỂU THÊM
                    </p>
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="text-icon-secondary duration-0 group-data-[state=open]:scale-y-[-1]"
                    >
                      <path
                        d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="Collapse_collapse-wrapper__FiMUw invisible"
                  data-state="closed"
                >
                  <div className="Collapse_collapse-inner__56IHT">
                    <div className="flex flex-col mt-1 gap-2">
                      <ul className="gap-2 flex flex-col">
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/bai-viet"
                        >
                          Góc sức khoẻ
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/thuoc"
                        >
                          Tra cứu thuốc
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/duoc-chat"
                        >
                          Tra cứu dược chất
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/duoc-lieu"
                        >
                          Tra cứu dược liệu
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/benh"
                        >
                          Bệnh thường gặp
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/bai-viet/tin-tuc-suc-khoe/benh-vien"
                        >
                          Bệnh viện
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="https://www.vicongdong.nhathuoclongchau.com.vn/"
                        >
                          Hoạt động xã hội
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="https://tuyendung.frt.vn/tin-tuyen-dung/longchau"
                        >
                          Tin tức tuyển dụng
                        </a>
                        <a
                          className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                          href="/bai-viet/truyen-thong/tin-tuc-and-su-kien"
                        >
                          Tin tức sự kiện
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b py-3">
                <div className="flex flex-col mt-1 gap-2">
                  <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                    CHỨNG NHẬN BỞI
                  </p>
                  <div className="flex justify-evenly items-center md:justify-start md:gap-x-3">
                    <a
                      href="http://online.gov.vn/(X(1)S(k3yc0ysr0jtxpy32mp52zd3n))/Home/WebDetails/94973?AspxAutoDetectCookieSupport=1"
                      className="inline-block"
                    >
                      <img
                        alt="certificate-icon"
                        loading="lazy"
                        width={171}
                        height={56}
                        decoding="async"
                        data-nimg={1}
                        className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg 1x, https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <a
                      href="https://www.dmca.com/Protection/Status.aspx?ID=98d66f66-5a62-47e9-b45c-edaebfb0c9b3&refurl=https://nhathuoclongchau.com.vn/"
                      className="inline-block"
                    >
                      <img
                        alt="certificate-icon"
                        loading="lazy"
                        width={171}
                        height={56}
                        decoding="async"
                        data-nimg={1}
                        className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                        srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg 2x"
                        src="https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg"
                        style={{ color: "transparent" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex py-6 hidden grid-cols-12 w-full gap-12">
              <div className="col-span-2 max-w-[176px]">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    VỀ CHÚNG TÔI
                  </h4>
                  <ul className="gap-2 flex flex-col">
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/gioi-thieu"
                    >
                      Giới thiệu
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/he-thong-cua-hang"
                    >
                      Hệ thống cửa hàng
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/giay-phep-kinh-doanh"
                    >
                      Giấy phép kinh doanh
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/tos"
                    >
                      Quy chế hoạt động
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-dat-coc"
                    >
                      Chính sách đặt cọc
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-noi-dung"
                    >
                      Chính sách nội dung
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-doi-tra"
                    >
                      Chính sách đổi trả thuốc
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-giao-hang"
                    >
                      Chính sách giao hàng
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-bao-mat"
                    >
                      Chính sách bảo mật
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-thanh-toan"
                    >
                      Chính sách thanh toán
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="https://hddt.nhathuoclongchau.com.vn/"
                    >
                      Kiểm tra hóa đơn điện tử
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
                    >
                      Chính sách thu thập và xử lý dữ liệu cá nhân
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/chinh-sach-hoan-huy-doi-tra-vaccine"
                    >
                      Chính sách hoàn hủy đổi trả Vắc xin
                    </a>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 max-w-[176px]">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    DANH MỤC
                  </h4>
                  <ul className="gap-2 flex flex-col">
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/thuc-pham-chuc-nang"
                    >
                      Thực phẩm chức năng
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/duoc-my-pham"
                    >
                      Dược mỹ phẩm
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/cham-soc-ca-nhan"
                    >
                      Chăm sóc cá nhân
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/thuoc"
                    >
                      Thuốc
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/trang-thiet-bi-y-te"
                    >
                      Trang thiết bị y tế
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/don-thuoc"
                    >
                      Đặt thuốc online
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/trung-tam-tiem-chung"
                    >
                      Trung tâm Tiêm chủng
                    </a>
                  </ul>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    TÌM HIỂU THÊM
                  </h4>
                  <ul className="gap-2 flex flex-col">
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/bai-viet"
                    >
                      Góc sức khoẻ
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/thuoc"
                    >
                      Tra cứu thuốc
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/duoc-chat"
                    >
                      Tra cứu dược chất
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/duoc-lieu"
                    >
                      Tra cứu dược liệu
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/benh"
                    >
                      Bệnh thường gặp
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/bai-viet/tin-tuc-suc-khoe/benh-vien"
                    >
                      Bệnh viện
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="https://www.vicongdong.nhathuoclongchau.com.vn/"
                    >
                      Hoạt động xã hội
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="https://tuyendung.frt.vn/tin-tuyen-dung/longchau"
                    >
                      Tin tức tuyển dụng
                    </a>
                    <a
                      className="inline-block text-text-tertiary text-caption2 py-[2px] md:text-label2 md:text-text-link"
                      href="/bai-viet/truyen-thong/tin-tuc-and-su-kien"
                    >
                      Tin tức sự kiện
                    </a>
                  </ul>
                </div>
              </div>
              <div className="col-span-4 max-w-[259px] gap-6 flex flex-col">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    TỔNG ĐÀI
                  </h4>
                  <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                    <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                      Tư vấn mua hàng
                    </p>
                    <a className="inline-block" href="tel:18006928">
                      <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                        18006928
                        <span className="font-normal md:text-text-tertiary">
                          {" "}
                          (Nhánh 1)
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                    <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                      Trung tâm Vắc xin
                    </p>
                    <a className="inline-block" href="tel:18006928">
                      <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                        18006928
                        <span className="font-normal md:text-text-tertiary">
                          {" "}
                          (Nhánh 2)
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="flex umd:justify-between umd:items-center gap-1 md:flex-col md:mb-2 last:md:mb-0">
                    <p className="text-caption2 md:text-body2 text-text-tertiary md:text-text-secondary md:font-medium">
                      Góp ý, khiếu nại
                    </p>
                    <a className="inline-block" href="tel:18006928">
                      <span className="text-text-focus text-caption2 md:text-body2 font-semibold md:font-medium">
                        18006928
                        <span className="font-normal md:text-text-tertiary">
                          {" "}
                          (Nhánh 3)
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    CHỨNG NHẬN BỞI
                  </h4>
                  <div className="flex flex-col mt-1 gap-2">
                    <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                      CHỨNG NHẬN BỞI
                    </p>
                    <div className="flex justify-evenly items-center md:justify-start md:gap-x-3">
                      <a
                        href="http://online.gov.vn/(X(1)S(k3yc0ysr0jtxpy32mp52zd3n))/Home/WebDetails/94973?AspxAutoDetectCookieSupport=1"
                        className="inline-block"
                      >
                        <img
                          alt="certificate-icon"
                          loading="lazy"
                          width={171}
                          height={56}
                          decoding="async"
                          data-nimg={1}
                          className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg 1x, https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        href="https://www.dmca.com/Protection/Status.aspx?ID=98d66f66-5a62-47e9-b45c-edaebfb0c9b3&refurl=https://nhathuoclongchau.com.vn/"
                        className="inline-block"
                      >
                        <img
                          alt="certificate-icon"
                          loading="lazy"
                          width={171}
                          height={56}
                          decoding="async"
                          data-nimg={1}
                          className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    HỖ TRỢ THANH TOÁN
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                      HỖ TRỢ THANH TOÁN
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg 1x, https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg 1x, https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg 1x, https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg 1x, https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg 1x, https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a
                        className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                        href="/trung-tam-tiem-chung/dang-ky?utm_source=Google&utm_medium=CPC&utm_campaign=GGMAPS&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5PdyP5MCT0IoKShw8p7aj59ulvhqPvrnDYcnxdxrJMm3vuHgFcRx-8aArq7EALw_wcB#"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width={36}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex-grow-0 flex-shrink-0 basis-[176px] flex flex-col gap-6">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-text-tertiary text-caption font-bold mb-2">
                    KẾT NỐI VỚI CHÚNG TÔI
                  </h4>
                  <div className="flex omd:flex-col umd:justify-between umd:items-center mt-1 gap-2">
                    <p className="text-body2 text-text-secondary font-semibold omd:hidden">
                      KẾT NỐI VỚI CHÚNG TÔI
                    </p>
                    <div className="flex gap-[16px] umd:py-1 mb-1">
                      <a href="https://www.facebook.com/Nhathuocfptlongchau">
                        <img
                          alt="Facebook"
                          loading="lazy"
                          width={28}
                          height={28}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <a href="https://zalo.me/3822805105108870889">
                        <img
                          alt="Zalo"
                          loading="lazy"
                          width={28}
                          height={28}
                          decoding="async"
                          data-nimg={1}
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="umd:bg-layer-gray -mx-4 flex justify-between items-center p-4 gap-3 md:gap-2 md:flex-col md:items-start md:py-0">
                  <div className="flex-1">
                    <h4 className="text-body1 md:text-caption md:text-text-tertiary md:font-bold font-semibold text-text-primary">
                      TẢI ỨNG DỤNG LONG CHÂU
                    </h4>
                    <p className="text-caption mt-1 text-text-secondary md:hidden">
                      Mua thuốc trực tuyến, giao hàng tận nơi dễ dàng và nhanh
                      chóng
                    </p>
                    <div className="flex gap-x-2 md:hidden mt-3 gap-3">
                      <a href="https://dl.ntlc.com.vn/app/home">
                        <img
                          alt="icon-download"
                          loading="lazy"
                          width={131}
                          height={43}
                          decoding="async"
                          data-nimg={1}
                          className="w-[100px] md:w-[131px] umd:max-h-[43px] object-cover"
                          srcSet="https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg 1x, https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg 2x"
                          src="https://cdn1.nhathuoclongchau.com.vn/smalls/Download_131x42_4x_2a86acef28.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="umd:p-3 bg-white rounded-lg w-fit h-fit flex-shrink-0">
                    <img
                      alt="icon-download"
                      loading="lazy"
                      width={100}
                      height={100}
                      decoding="async"
                      data-nimg={1}
                      className="h-[72px] w-[72px] md:h-[100px] md:w-[100px]"
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png 2x"
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="footer_copyrights__SiWer">
              <p>
                © 2007 - 2024 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD
                0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM
              </p>
              <p>Địa chỉ: 379-381 Hai Bà Trưng, P. Võ Thị Sáu, Q.3, TP. HCM</p>
              <ul>
                <li>
                  Số điện thoại:{" "}
                  <a target="_blank" rel="nofollow" href="tel:02873023456">
                    (028)73023456&nbsp;
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="mailto:sale@nhathuoclongchau.com.vn"
                  >
                    sale@nhathuoclongchau.com.vn
                  </a>
                </li>
                <li>Người quản lý nội dung: Nguyễn Bạch Điệp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
