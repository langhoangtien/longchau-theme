import { HOST_API } from "@/config-global";
import ProductsPage from "@/components/filter-page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { convertImagePathToUrl } from "@/lib/common";
import Image from "next/image";
import Description from "@/components/brand/description";
export const revalidate = 60;
export default async function BrandPage(props: any) {
  const slug = props?.params?.slug ?? null;
  const id = slug.split("-").pop();
  const resultJson = await fetch(`${HOST_API}/brands/${id}`);
  const filterDataJson = await fetch(`${HOST_API}/home/select-info`);
  const filterData = await filterDataJson.json();
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
            <div className="-mx-4 md:mx-0 px-4 md:px-0">
              <div className="bg-gray-100 ">
                <div className="!m-0 pt-0">
                  <div className="!flex rounded-xl bg-white p-4 md:items-center">
                    <Image
                      className="mr-[12px] inline-block h-[92px] w-[92px] shrink-0 rounded-lg md:h-[170px] md:w-[170px] md:mr-5 object-cover"
                      src={convertImagePathToUrl(result.image, 250) || ""}
                      alt={result.name}
                      width={170}
                      height={170}
                    />

                    <div className="medicine-content flex basis-[calc(100%-112px)] flex-col">
                      <h1 className="text-xl font-semibold text-gray-1000">
                        {result.name}
                      </h1>
                      <p className="css-osuj7x text-gray-600">Thương hiệu</p>
                      <Description description={result.description} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-4 bg-white md:bg-transparent md:mx-0">
              <div className="my-2 py-4 !px-4 pb-4 md:!px-0 grid grid-cols-2 md:grid-cols-5 gap-5 ">
                <div>
                  <div className="flex items-center h-[64px] cursor-pointer rounded-xl p-3 md:h-[80px] md:py-[10px] md:px-4 shadow-gray-200 shadow-[0_0_0_1px] md:bg-white">
                    <div className="w-10 h-10 md:w-12 omd:h-12">
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
          <ProductsPage filterData={filterData} />;
        </div>

        <div className="container-lite pt-4 md:pt-5" />
      </div>
    </div>
  );
}
