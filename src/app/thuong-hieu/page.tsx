import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import BrandList from "@/components/brand/list-brand";
export const revalidate = 60;
export default async function BrandPage(props: any) {
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
                <BreadcrumbLink>Thương hiệu</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ol>
        <div className="overflow-hidden">
          <BrandList />
        </div>

        <div className="pt-4 md:pt-5" />
      </div>
    </div>
  );
}
