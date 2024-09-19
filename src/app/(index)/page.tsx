import { mappedProduct } from "@/lib/common";
import { CarouselDemo } from "@/components/home/carousel";
import { SuggestionSection, ToopDiscountSection } from "@/components/home";
import CategorySection from "@/components/home/category-section";
import { HOST_API } from "@/config-global";

export const revalidate = 60;
export default async function Home() {
  const homeData = await fetch(`${HOST_API}/home`);
  const homeJson = await homeData.json();
  const sort = { orderBy: "discount", order: -1 };
  const productsJson = await fetch(
    `${HOST_API}/products?limit=10&skip=0&sort=${encodeURIComponent(
      JSON.stringify(sort)
    )}`
  );
  const productsData = await productsJson.json();
  const products = productsData.items;
  // const topNewProduct = homeJson.topNewestProducts
  //   .slice(0, 5)
  //   .map((product: any, index: number) => ({
  //     ...product,
  //     image: images[index],
  //   }));
  const newsestProducts = homeJson.topNewestProducts.map(mappedProduct);
  const topNewProduct = newsestProducts.slice(0, 5);

  const productMapped = products.map(mappedProduct);

  return (
    <div>
      <CarouselDemo products={topNewProduct}></CarouselDemo>
      <CategorySection />
      <ToopDiscountSection
        products={newsestProducts}
        background="bg-gradient-to-b from-orange-50 to-blue-50"
      />
      <SuggestionSection products={productMapped} />
    </div>
  );
}
