import { HOST_API } from "@/config-global";
import ProductsPage from "@/components/filter-page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
export default async function SearchPage(props: any) {
  const search = props?.searchParams?.s;
  const filterDataJson = await fetch(`${HOST_API}/home/select-info`);
  const filterData = await filterDataJson.json();
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
                <BreadcrumbLink>fdgf</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ol>
        <div className="overflow-hidden container-lite">
          <ProductsPage filterData={filterData} search={search} />;
        </div>
        <div className="container-lite pt-4 md:pt-5" />
      </div>
    </div>
  );
}
