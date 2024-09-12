import { HOST_API } from "@/config-global";
import ProductsPage from "@/components/filter-page";

export default async function SaerchPage(props: any) {
  const search = props?.searchParams?.s;
  const filterDataJson = await fetch(`${HOST_API}/home/select-info`);
  const filterData = await filterDataJson.json();
  return <ProductsPage filterData={filterData} search={search} />;
}
