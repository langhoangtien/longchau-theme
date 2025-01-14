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
import ListCategory from "@/components/category/list";

export const revalidate = 60;
export default async function CategoryPage(props: any) {
  const slug = props?.params?.slug ?? null;
  const id = slug.split("-").pop();
  const res = await fetch(`${HOST_API}/categories/${id}`);
  if (!res.ok) {
    return "There was an error.";
  }

  const result = await res.json();

  const childs = result?.childrens?.map((item: any) => ({
    ...item,
    image: item.image ? convertImagePathToUrl(item.image, 80) : "",
  }));

  return (
    <div data-custom-container="true">
      <div className="pb-6 md:pb-9">
        <ol className="my-3 flex flex-wrap md:my-4">
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
        <div>
          <div data-lcpr="prr-id-brand-information">
            <div className="-mx-4 bg-white md:bg-transparent md:mx-0">
              <ListCategory childs={childs} />
            </div>
          </div>
          <ProductsPage category={result?._id} />
        </div>
      </div>
    </div>
  );
}
