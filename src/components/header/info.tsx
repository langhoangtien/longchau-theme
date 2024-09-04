import { useCartContext } from "../cart";

export default function Info() {
  const { headerRef }: any = useCartContext();
  return (
    <div ref={headerRef} className="!bg-blue-600 md:block md:bg-transparent">
      <div className="py-2 px-4 md:px-0 md:container-lite mx-auto">
        <div className="flex items-center justify-end gap-4">
          <div className="flex w-full justify-between gap-4">
            <div className="flex flex-1 items-center items-start">
              <span className="mr-2 flex h-4 w-4 shrink-0 text-white md:h-5 md:w-5">
                <img
                  alt=""
                  loading="lazy"
                  width={20}
                  height={20}
                  decoding="async"
                  data-nimg={1}
                  className="h-4 w-4 md:h-5 md:w-5"
                  srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/megaphone_b8025908d5.webp 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/megaphone_b8025908d5.webp 2x"
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/megaphone_b8025908d5.webp"
                  style={{ color: "transparent" }}
                />
              </span>
              <a
                href="/trung-tam-tiem-chung"
                className="md:text-sm text-xs inline-block font-semibold text-white"
              >
                Trung tâm tiêm chủng Long Châu
                <span className="ml-1 underline">Xem chi tiết</span>
              </a>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <div className="inline-flex cursor-pointer items-center">
                <svg
                  className="[&>*]:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M6.5 2A1.5 1.5 0 005 3.5v13A1.5 1.5 0 006.5 18h7a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0013.5 2h-7zM9 14h2a.5.5 0 010 1H9a.5.5 0 010-1z"
                  />
                </svg>
                <div className="ml-1 text-sm font-medium text-white">
                  Tải ứng dụng
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="text-white"
                >
                  <path
                    d="M22.0946 6.8943C21.3154 5.33601 19.6859 4.0754 17.6833 4.29774C15.892 4.49664 13.2323 5.16288 11.4203 7.34634C9.55886 9.58932 8.86485 13.0882 10.2943 18.3285C11.8196 23.9201 14.0861 29.4313 16.9028 33.8791C19.6988 38.2941 23.143 41.8273 27.094 43.1824C30.5884 44.3808 33.2596 43.8808 35.2093 42.5645C37.0881 41.2961 38.1215 39.3872 38.6554 38.0646C39.2533 36.5839 38.8592 35.0433 38.0787 33.9082L35.2017 29.7238C33.8969 27.8261 31.5078 27.0003 29.3096 27.6872L25.3345 28.9294C25.047 29.0193 24.769 28.9283 24.6108 28.7429C22.8418 26.6702 20.8583 23.7785 20.3188 20.8526C20.3009 20.7555 20.3204 20.6759 20.3522 20.6224C20.9367 19.6397 21.9435 18.5257 22.9446 17.551C24.642 15.8984 25.2844 13.273 24.1652 11.035L22.0946 6.8943Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="ml-1 text-sm font-medium text-white">
                  Tư vấn ngay: <a href="tel:0832667711">0832 667 711</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
