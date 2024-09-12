"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function OrderComplete(props: any) {
  const slug = props?.params?.slug ?? null;
  const orders = localStorage.getItem("orders");

  const orderJson = orders ? JSON.parse(orders) : [];
  const order = orderJson.find((item: any) => item._id === slug);
  if (!order) {
    return notFound();
  }
  const date = new Date(order.createdAt);
  date.setDate(date.getDate() + 2);

  return (
    <div className="container md:container css-1zrptk">
      <div className="mt-5 mb-4 flex justify-center">
        <div className="w-full max-w-[448px]">
          <div className="flex justify-center">
            <picture>
              <img
                className="w-full"
                src="/icons/png/dat-hang-thanh-cong.svg"
                width={327}
                alt=""
              />
            </picture>
          </div>
          <div className="-mt-4 w-full rounded-xl bg-white p-4">
            <span className="text-blue-5 text-heading3 md:text-heading2 mb-2 block text-center font-semibold">
              Đặt hàng thành công
            </span>
            <span className="text-gray-10 text-body2 md:text-body1 m-auto block w-[80%] text-center font-normal">
              Đơn hàng đang được xử lý tại Ludmila.
            </span>
            <div
              className="ant-divider css-10ed4xt ant-divider-horizontal ant-divider-dashed my-3"
              role="separator"
            />
            <div className="flex justify-between">
              <span className="text-sm text-start font-medium">
                Thời gian nhận hàng dự kiến
              </span>
              <span className="text-sm text-text-primary text-end font-normal">
                Từ 13:00 - 14:00 ngày{" "}
                {Intl.DateTimeFormat("vi-VN").format(date)}
              </span>
            </div>
            <div
              className="ant-divider css-10ed4xt ant-divider-horizontal ant-divider-dashed my-3"
              role="separator"
            />
            <div className="flex items-center justify-between md:mb-3">
              <div className="text-sm font-medium">Phương thức thanh toán</div>
            </div>
            <div className="my-3 flex items-center">
              <div className="h-[40px] w-[40px]">
                <Image
                  alt="payment-method"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  src="/icons/png/cod.webp"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="text-label2 text-text-primary ml-3 flex-1 text-left font-normal">
                Thanh toán tiền mặt khi nhận hàng
              </div>
            </div>
            <div className="flex gap-4 pt-1">
              <Button className="font-semibold w-[50%] py-[12px] h-[48px] rounded-[42px]  px-[12px]">
                Chi tiết đơn hàng
              </Button>
              <Button className="font-semibold bg-gray-200 hover:bg-gray-200/90 w-[50%] py-[12px] h-[48px] rounded-[42px] text-primary px-[12px]">
                Về trang chủ
              </Button>
            </div>
          </div>
          {/* <div className="p-4 relative rounded-xl overflow-hidden mt-4">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="omd:hidden pointer-events-none select-none object-cover"
              sizes="90vw"
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png 2560w"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Variant3_26ceae829e_79b78f594c_449bf0e1cf.png"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="umd:hidden pointer-events-none select-none object-cover"
              sizes="520px"
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png 2560w"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Popup_06071f732d_804a82e54f_e966ac084e.png"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
            <img
              alt=""
              loading="lazy"
              width={168}
              height={70}
              decoding="async"
              data-nimg={1}
              className="w-[168px] h-[70px] object-contain absolute bottom-0 right-0 omd:hidden"
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Group_e5ab3767c1_acbd6b51f3_aa080c5412.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Group_e5ab3767c1_acbd6b51f3_aa080c5412.png 2x"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Group_e5ab3767c1_acbd6b51f3_aa080c5412.png"
              style={{ color: "transparent" }}
            />
            <img
              alt=""
              loading="lazy"
              width={125}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-[125px] h-[100px] object-contain absolute bottom-0 right-0 umd:hidden"
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Layer_1_40cee7af9a_c0a00fb44a_477cf74ff2.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Layer_1_40cee7af9a_c0a00fb44a_477cf74ff2.png 2x"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Layer_1_40cee7af9a_c0a00fb44a_477cf74ff2.png"
              style={{ color: "transparent" }}
            />
            <div className="isolate omd:space-y-2">
              <div className="text-heading3 font-semibold text-text-focus">
                Đồng hành cùng chiến binh nhí
              </div>
              <div className="umd:mt-2 omd:w-[305px] text-label2 font-normal text-text-focus">
                để những vòng dây tuổi thơ của các bệnh nhi là trò chơi chứ
                không còn là dây truyền thuốc
              </div>
              <a
                className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 umd:mt-6"
                href="/vi-cong-dong/chien-binh-nhi"
              >
                Tham gia ngay
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
