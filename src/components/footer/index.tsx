import Link from "next/link";
import Location from "../icons/location";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  AccordionMenu,
  AccordionswitchboardMenu,
  PAYMENT_METHODS,
} from "./accordion-menu";
export const FOOTER_MENU = [
  {
    title: "VỀ CHÚNG TÔI",
    items: [
      { name: "Giới thiệu", link: "gioi-thieu" },
      { name: "Hệ thống cửa hàng", link: "he-thong-cua-hang" },
      { name: "Giấy phép kinh doanh", link: "giay-phep-kinh-doanh" },
      { name: "Quy chế hoạt động", link: "quy-che-hoat-dong" },
      { name: "Chính sách đặt cọc", link: "chinh-sach-dat-coc" },
      { name: "Chính sách nội dung", link: "chinh-sach-noi-dung" },
      { name: "Chính sách đổi trả thuốc", link: "chinh-sach-doi-tra-thuoc" },
      { name: "Chính sách giao hàng", link: "chinh-sach-giao-hang" },
      { name: "Chính sách bảo mật", link: "chinh-sach-bao-mat" },
      { name: "Chính sách thanh toán", link: "chinh-sach-thanh-toan" },
      { name: "Kiểm tra hóa đơn điện tử", link: "kiem-tra-hoa-don-dien-tu" },
      {
        name: "Chính sách thu thập và xử lý dữ liệu cá nhân",
        link: "chinh-sach-thu-thap-xu-ly-du-lieu-ca-nhan",
      },
      {
        name: "Chính sách hoàn hủy đổi trả Vắc xin",
        link: "chinh-sach-hoan-huy-doi-tra-vac-xin",
      },
    ],
  },
  {
    title: "DANH MỤC",
    items: [
      { name: "Thực phẩm chức năng", link: "thuc-pham-chuc-nang" },
      { name: "Dược mỹ phẩm", link: "duoc-my-pham" },
      { name: "Chăm sóc cá nhân", link: "cham-soc-ca-nhan" },
      { name: "Thuốc", link: "thuoc" },
      { name: "Trang thiết bị y tế", link: "trang-thiet-bi-y-te" },
      { name: "Đặt thuốc online", link: "dat-thuoc-online" },
      { name: "Trung tâm Tiêm chủng", link: "trung-tam-tiem-chung" },
    ],
  },
  {
    title: "TÌM HIỂU THÊM",
    items: [
      { name: "Góc sức khoẻ", link: "goc-suc-khoe" },
      { name: "Tra cứu thuốc", link: "tra-cuu-thuoc" },
      { name: "Tra cứu dược chất", link: "tra-cuu-duoc-chat" },
      { name: "Tra cứu dược liệu", link: "tra-cuu-duoc-lieu" },
      { name: "Bệnh thường gặp", link: "benh-thuong-gap" },
      { name: "Bệnh viện", link: "benh-vien" },
      { name: "Hoạt động xã hội", link: "hoat-dong-xa-hoi" },
      { name: "Tin tức tuyển dụng", link: "tin-tuc-tuyen-dung" },
      { name: "Tin tức sự kiện", link: "tin-tuc-su-kien" },
    ],
  },
];

export const FOOTER_SWITCHBOARD_MENU = [
  { name: "Tư vấn mua hàng", phone: "0832667711", branch: "(Hotline 1)" },
  { name: "Hướng dẫn sử dụng", phone: "0365686630", branch: "(Hotline 2)" },
  { name: "Góp ý, khiếu nại", phone: "0328237796", branch: "(Hotline 3)" },
];
export default function Footer() {
  return (
    <footer>
      <div className="relative top-0 left-0 bg-[#2167dd] py-4 px-0 text-center">
        <div className="container-lite relative">
          <div className="flex justify-center md:justify-between flex-col md:flex-row items-center">
            <a
              className="mb-2 text-sm md:text-xl md:mb-0 md:font-normal flex items-center text-white"
              href="/he-thong-cua-hang"
            >
              <Location className="hidden md:inline-block mr-2 w-7 h-7" />
              Xem hệ thống cửa hàng trên toàn quốc
            </a>
            <a href="/he-thong-cua-hang">
              <Button className="text-primary h-12" variant="secondary">
                Xem danh sách cửa hàng
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom relative bg-white pb-4 mb-0">
        <div className="container-lite relative">
          <div className="relative">
            <div className="md:hidden">
              <AccordionswitchboardMenu />
            </div>
            <div className="md:flex py-6 hidden grid-cols-12 w-full gap-12">
              {FOOTER_MENU.map((menu, index) => (
                <div key={menu.title} className="col-span-2 max-w-[176px]">
                  <div id={menu.title} className="flex-grow-1 max-w-full">
                    <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                      {menu.title}
                    </h4>
                    <ul className="gap-2 flex flex-col">
                      {menu.items.map((item, index) => (
                        <Link
                          key={item.link}
                          className="inline-block py-[2px] md:text-sm md:text-primary"
                          href={`/${item.link}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="col-span-4 max-w-[259px] gap-6 flex flex-col">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                    TỔNG ĐÀI
                  </h4>
                  {FOOTER_SWITCHBOARD_MENU.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between md:justify-start items-center md:items-start gap-1 md:flex-col md:mb-2 last:md:mb-0"
                    >
                      <p className="inline-block py-[2px] md:text-sm ">
                        {item.name}
                      </p>
                      <a className="inline-block" href="tel:18006928">
                        <span className="text-primary text-sm">
                          {item.phone}
                          <span className="font-normal md:text-gray-600/80">
                            &nbsp; {item.branch}
                          </span>
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                    CHỨNG NHẬN BỞI
                  </h4>
                  <div className="flex flex-col mt-1 gap-2">
                    <p className="text-gray-600/80 font-semibold md:hidden">
                      CHỨNG NHẬN BỞI
                    </p>
                    <div className="flex justify-evenly items-center md:justify-start md:gap-x-3">
                      <a href="#" className="inline-block">
                        <Image
                          alt="certificate-icon"
                          loading="lazy"
                          width={171}
                          height={56}
                          className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                          style={{ color: "transparent" }}
                          src="/icons/svg/bo_cong_thuong.svg"
                        />
                      </a>
                      <a href="#" className="inline-block">
                        <Image
                          alt="certificate-icon"
                          width={171}
                          height={56}
                          className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                          style={{ color: "transparent" }}
                          src="/icons/svg/DMCA.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                    HỖ TRỢ THANH TOÁN
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="text-body2 text-text-secondary font-semibold md:hidden">
                      HỖ TRỢ THANH TOÁN
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {PAYMENT_METHODS.map((src: string) => (
                        <Link
                          key={src}
                          className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                          href="/chinh-sach-thanh-toan"
                        >
                          <Image
                            alt=""
                            width={36}
                            height={20}
                            style={{ color: "transparent" }}
                            src={src}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex-grow-0 flex-shrink-0 basis-[176px] flex flex-col gap-6">
                <div className="flex-grow-1 max-w-full">
                  <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                    KẾT NỐI VỚI CHÚNG TÔI
                  </h4>
                  <div className="flex md:flex-col umd:justify-between umd:items-center mt-1 gap-2">
                    <p className="font-semibold md:hidden">
                      KẾT NỐI VỚI CHÚNG TÔI
                    </p>
                    <div className="flex gap-[16px] umd:py-1 mb-1">
                      <Link href="https://www.facebook.com/ludmilavietnam">
                        <Image
                          alt="Facebook"
                          width={28}
                          height={28}
                          src="/icons/svg/facebook.svg"
                          style={{ color: "transparent" }}
                        />
                      </Link>
                      <Link href="https://zalo.me/0832667711">
                        <Image
                          alt="Zalo"
                          width={28}
                          height={28}
                          data-nimg={1}
                          src="/icons/svg/zalo.svg"
                          style={{ color: "transparent" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="umd:bg-layer-gray -mx-4 flex justify-between items-center p-4 gap-3 md:gap-2 md:flex-col md:items-start md:py-0">
                  <div className="flex-1">
                    <h4 className="text-gray-600/80 text-sm font-bold mb-2">
                      XEM BẢN ĐỒ
                    </h4>
                    <p className="text-caption mt-1 text-text-secondary md:hidden">
                      Mua thuốc trực tuyến, giao hàng tận nơi dễ dàng và nhanh
                      chóng
                    </p>
                    <div className="flex gap-x-2 md:hidden mt-3 gap-3">
                      <a href="https://facebook.com/ludmilavietnam">
                        <Image
                          alt="icon-download"
                          loading="lazy"
                          width={131}
                          height={43}
                          className="w-[100px] md:w-[131px] max-h-[43px] object-cover"
                          src="/icons/svg/Download.svg"
                          style={{ color: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="umd:p-3 bg-white rounded-lg w-fit h-fit flex-shrink-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.7757049950344!2d106.0118888582485!3d21.030156357757754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a711cb3f00c9%3A0xf60ca4cae737560a!2zS2h1IMSQw7QgVGjhu4sgS2hhaSBTxqFuIC0gVGh14bqtbiBUaMOgbmg!5e0!3m2!1svi!2s!4v1726190611572!5m2!1svi!2s"
                      width={100}
                      height={100}
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="footer_copyrights__SiWer text-gray-700/80 text-sm border-t pt-2">
              <p className="text-center">
                © 2018 - 2024 Công ty Cổ Phần TNHH Ludmila Hàng Nga chính hãng
                Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư
                TPHN
              </p>
              <p className="inline-block mr-4">
                Địa chỉ: T10, Tòa Benka, Lệ chi, Gia Lâm, Hà Nội
              </p>
              <ul className="list-disc inline-block">
                <li className="md:inline-block ml-4 py-1 md:mr-2 ">
                  <span className="h-1 w-1 bg-gray-700/80 hidden md:inline-block rounded-full align-middle  mr-2"></span>
                  Số điện thoại:{" "}
                  <a
                    className="text-primary"
                    target="_blank"
                    rel="nofollow"
                    href="tel:0832667711"
                  >
                    (0832)667711&nbsp;
                  </a>
                </li>
                <li className="md:inline-block ml-4  py-1  md:mr-2">
                  <span className="h-1 w-1 bg-gray-700/80 hidden md:inline-block rounded-full align-middle mr-2 "></span>
                  Email:{" "}
                  <a
                    className="text-primary"
                    target="_blank"
                    rel="nofollow"
                    href="mailto:support@ludmila.vn"
                  >
                    support@ludmila.vn
                  </a>
                </li>
                <li className="md:inline-block ml-4   py-1 md:mr-2">
                  <span className="h-1 w-1 bg-gray-700/80 hidden md:inline-block rounded-full align-middle  mr-2"></span>
                  Người quản lý nội dung: Nguyễn Thanh Phương
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
