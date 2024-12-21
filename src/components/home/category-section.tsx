import { HOST_API } from "@/config-global";
import { convertImagePathToUrl } from "@/lib/common";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 60;
export default async function CategorySection() {
  const resultJson = await fetch(`${HOST_API}/categories/?limit=12`);
  const categoriesData = await resultJson.json();
  const categories = categoriesData.items;
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
            {categories.map((category: any) => (
              <Category category={category} key={category.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type CategoryProps = {
  name: string;
  icon: string;
  _id: string;
  code: string;
  image: string;
};
const Category = ({ category }: { category: CategoryProps }) => (
  <div>
    <Link href={`/danh-muc/${category.code}-${category._id}`}>
      <div className="md:py-[22px] md:px-3.5 h-[118px] py-3 px-0.5 rounded-xl border border-gray-300 flex flex-col items-center justify-center hover:opacity-70 bg-white">
        <div>
          <Image
            alt={category.name}
            width={24}
            height={24}
            decoding="async"
            className="basis-6 shrink-0"
            style={{ color: "transparent" }}
            src={convertImagePathToUrl(category.image, 80)}
          />
        </div>
        <div>
          <h3 className="mt-2 mb-1 text-sm font-semibold text-center text-gray-1000">
            {category.name}
          </h3>
          <div className="text-sm text-gray-600 font-medium text-center">
            {20}
            {/* */} sản phẩm
          </div>
        </div>
      </div>
    </Link>
  </div>
);
