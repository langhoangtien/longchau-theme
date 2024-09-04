import { count } from "console";
import Image from "next/image";

export const categories = [
  {
    name: "Thần kinh não",
    count: 103,
    image: "/icons/png/than_kinh_nao_level_2.webp",
  },
  {
    name: "Vitamin & Khoáng chất",
    count: 103,
    image: "/icons/png/tpcn_vitamin_khoang_chat_level_2.png",
  },
  {
    name: "Sức khỏe tim mạch",
    count: 54,
    image: "/icons/png/suc_khoe_tim_mach_level_2.png",
  },
  {
    name: "Tăng sức đề kháng, miễn dịch",
    count: 54,
    image: "/icons/png/tang_suc_de_khang_mien_dich_level_3.png",
  },
  {
    name: "Hỗ trợ tiêu hóa",
    count: 323,
    image: "/icons/png/ho_tro_tieu_hoa_level_2.png",
  },
  {
    name: "Sinh lý - Nôi tiết tố",
    count: 103,
    image: "/icons/png/sinh_li_noi_tiet_to_level_2.png",
  },
  { name: "Dinh dưỡng", count: 33, image: "/icons/png/dinh_duong_level_2.png" },
  {
    name: "Hỗ trợ điều trị",
    count: 33,
    image: "/icons/png/ho_tro_dieu_tri_level_2.png",
  },
  {
    name: "Giải pháp làn da",
    count: 33,
    image: "/icons/png/giai_phap_lan_da_level_2.png",
  },
  {
    name: "Chăm sóc da mặt",
    count: 33,
    image: "/icons/png/cham_soc_da_mat_level_2.png",
  },
  {
    name: "Hỗ trợ làm đẹp",
    count: 33,
    image: "/icons/png/ho_tro_lam_dep_level_2.png",
  },
  {
    name: "Hỗ trợ tình dục",
    count: 33,
    image: "/icons/png/ho_tro_tinh_duc_level_2.png",
  },
];
export default function CategorySection({ products }: any) {
  return (
    <div>
      <div className="relative py-4 mb-5">
        <div className="container-lite relative z-10">
          <div className="mb-2 flex">
            <Image
              alt="Danh mục nổi bật"
              width={28}
              height={28}
              style={{ color: "transparent" }}
              src="/icons/png/danh_muc_noi_bat.png"
            />
            <h2 className="ml-2 w-full flex items-center text-lg font-semibold">
              Danh mục nổi bật
            </h2>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-3 gap-2">
            {categories.map((category) => (
              <Category category={category} key={category.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type CategoryProps = { name: string; count: number; image: string };
const Category = ({ category }: { category: CategoryProps }) => (
  <div>
    <a href="thuc-pham-chuc-nang/than-kinh-nao">
      <div className="md:py-[22px] md:px-3.5 h-[118px] py-3 px-0.5 rounded-xl border border-gray-300 flex flex-col items-center justify-center hover:opacity-70 bg-white">
        <div>
          <Image
            alt={category.name}
            width={24}
            height={24}
            decoding="async"
            className="basis-6 shrink-0"
            style={{ color: "transparent" }}
            src={category.image}
          />
        </div>
        <div>
          <h3 className="mt-2 mb-1 text-sm font-semibold text-center text-gray-1000">
            {category.name}
          </h3>
          <div className="text-sm text-gray-600 font-medium text-center">
            {category.count}
            {/* */} sản phẩm
          </div>
        </div>
      </div>
    </a>
  </div>
);
