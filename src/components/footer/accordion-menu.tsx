import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FOOTER_MENU, FOOTER_SWITCHBOARD_MENU } from ".";
import Link from "next/link";
import Image from "next/image";
export const PAYMENT_METHODS = [
  "/icons/svg/visa.svg",
  "/icons/svg/mtc.svg",
  "/icons/svg/jcb.svg",
  "/icons/svg/amex.svg",
  "/icons/svg/vnpay.svg",
  "/icons/svg/zalopay.svg",
  "/icons/svg/momo.svg",
];
export function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="relative">
      {FOOTER_MENU.map((menu, index) => (
        <AccordionItem
          key={menu.title}
          className="border-b py-3"
          value={menu.title}
        >
          <AccordionTrigger className="font-semibold text-gray-600/80 py-3">
            {menu.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-1 gap-2">
              <ul className="gap-2 flex flex-col">
                {menu.items.map((item) => (
                  <Link
                    key={item.link}
                    className="inline-block py-[2px] text-gray-600/80"
                    href={`/${item.link}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AccordionswitchboardMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <div className="bg-layer-gray -mx-4 flex justify-between items-center p-4 gap-3 md:gap-2 md:flex-col md:items-start md:py-0">
        <div className="flex-1">
          <h4 className="text-base text-gray-600/80 md:font-bold font-semibold ">
            ĐẶT HÀNG TẠI FANPAGE
          </h4>
          <p className="text-caption mt-1 text-text-secondary md:hidden">
            Mua hàng trực tuyến, giao hàng tận nơi dễ dàng và nhanh chóng
          </p>
          <div className="flex gap-x-2 md:hidden mt-3 gap-3">
            <a href="https://facebook.com/ludmilavietnam">
              <Image
                alt="icon-download"
                width={131}
                height={43}
                className="w-[100px] md:w-[131px] umd:max-h-[43px] object-cover"
                src="/icons/svg/Download.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg w-fit h-fit flex-shrink-0">
          <Image
            alt="icon-download"
            loading="lazy"
            width={100}
            height={100}
            className="h-[72px] w-[72px] md:h-[100px] md:w-[100px]"
            src={"/icons/png/facebook_qr.png"}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <AccordionItem className="border-b py-3" value="switchboard">
        <AccordionTrigger className="font-semibold text-gray-600/80 py-3">
          TỔNG ĐÀI
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col mt-1 gap-2">
            <ul className="gap-2 flex flex-col">
              {FOOTER_SWITCHBOARD_MENU.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center gap-1 md:flex-col md:mb-2 last:md:mb-0"
                >
                  <p className="text-gray-600/80">{item.name}</p>
                  <a className="inline-block" href="tel:18006928">
                    <span className="text-primary font-medium">
                      {item.phone}
                      <span className="font-normal"> {item.branch}</span>
                    </span>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-b py-3" value="payment">
        <div className="flex flex-col gap-2">
          <p className="text-gray-600/80 font-semibold md:hidden">
            HỖ TRỢ THANH TOÁN
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {PAYMENT_METHODS.map((src) => (
              <Link
                key={src}
                className="inline-flex h-[28px] w-[44px] items-center justify-center overflow-hidden rounded border"
                href="/chinh-sach-thanh-toan"
              >
                <Image
                  alt=""
                  loading="lazy"
                  width={36}
                  height={20}
                  src={src}
                  style={{ color: "transparent" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </AccordionItem>
      <AccordionItem className="border-b py-3" value="connect">
        <div className="flex md:flex-col justify-between items-center mt-1 gap-2">
          <p className="text-gray-600/80 font-semibold md:hidden">
            KẾT NỐI VỚI CHÚNG TÔI
          </p>
          <div className="flex gap-[16px] umd:py-1 mb-1">
            <a
              href="https://www.facebook.com/ludmilavietnam
                    "
            >
              <Image
                alt="Facebook"
                loading="lazy"
                width={28}
                height={28}
                decoding="async"
                data-nimg={1}
                src="/icons/svg/facebook.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a href="https://zalo.me/0832667711">
              <Image
                alt="Zalo"
                loading="lazy"
                width={28}
                height={28}
                decoding="async"
                data-nimg={1}
                src="/icons/svg/zalo.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
      </AccordionItem>
      {FOOTER_MENU.map((menu, index) => (
        <AccordionItem
          key={menu.title}
          className="border-b py-3"
          value={menu.title}
        >
          <AccordionTrigger className="font-semibold text-gray-600/80 py-1">
            {menu.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-1 gap-2">
              <ul className="gap-2 flex flex-col">
                {menu.items.map((item) => (
                  <Link
                    key={item.link}
                    className="inline-block py-[2px] text-gray-600/80"
                    href={`/${item.link}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
      <div className="border-b py-3">
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
                decoding="async"
                data-nimg={1}
                className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                src="/icons/svg/bo_cong_thuong.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a href="#" className="inline-block">
              <Image
                alt="certificate-icon"
                loading="lazy"
                width={171}
                height={56}
                decoding="async"
                data-nimg={1}
                className="w-[171px] h-[56px] md:w-full md:h-full object-fill"
                src="icons/svg/DMCA.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
      </div>
    </Accordion>
  );
}
