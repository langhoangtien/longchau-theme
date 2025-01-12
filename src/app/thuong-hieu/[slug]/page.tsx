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
import { convertImagePathToUrl } from "@/lib/common";
import Image from "next/image";
import Description from "@/components/brand/description";
export const revalidate = 60;
export default async function BrandPage(props: any) {
  const slug = props?.params?.slug ?? null;
  const id = slug.split("-").pop();
  const resultJson = await fetch(`${HOST_API}/brands/${id}`);
  const result = await resultJson.json();

  return (
    <div data-custom-container="true">
      <div className="pb-6 md:pb-9">
        <ol className="my-3 flex flex-wrap md:my-4">
          {" "}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary" href="/">
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary" href="/thuong-hieu">
                  Thương hiệu
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
        <div className="overflow-hidden">
          <div data-lcpr="prr-id-brand-information">
            <div className="-mx-4 md:mx-0 px-4 md:px-0 mb-4">
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
          </div>
          <ProductsPage brand={id} />
        </div>

        <div className=" pt-4 md:pt-5" />
      </div>
    </div>
  );
}
