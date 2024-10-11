import { HOST_API } from "@/config-global";
import ProductsPage from "@/components/filter-page/product-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import Image from "next/image";

export const revalidate = 60;
export default async function CategoryPage(props: any) {
  const slug = props?.params?.slug ?? null;
  const id = slug.split("-").pop();
  const resultJson = await fetch(`${HOST_API}/categories/${id}`);
  const result = await resultJson.json();

  return (
    <div data-custom-container="true">
      <div className="pb-6 md:pb-9">
        <ol className="my-3 flex flex-wrap md:my-4 container-lite">
          {" "}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>{result.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ol>
        <div className="overflow-hidden container-lite">
          <div data-lcpr="prr-id-brand-information">
            <div className="-mx-4 bg-white md:bg-transparent md:mx-0">
              <div className="my-2 py-4 !px-4 pb-4 md:!px-0 grid grid-cols-2 md:grid-cols-5 gap-5 ">
                <div>
                  <div className="flex items-center h-[64px] cursor-pointer rounded-xl p-3 md:h-[80px] md:py-[10px] md:px-4 shadow-gray-200 shadow-[0_0_0_1px] md:bg-white">
                    <div className="w-10 h-10 md:w-12 md:h-12">
                      <Image
                        alt="Thực phẩm chức năng"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-full h-full object-cover"
                        src="/icons/png/tpcn_vitamin_khoang_chat_level_2.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="ml-3 flex flex-1 flex-col justify-center">
                      <h3 className="price mb-0 text-sm font-medium line-clamp-2">
                        Thực phẩm chức năng
                      </h3>
                      <p className="text-sm text-gray-700 font-normal">
                        16 sản phẩm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsPage category={result?._id} />;
        </div>

        <div className="container-lite pt-4 md:pt-5" />
      </div>
    </div>
  );
}
