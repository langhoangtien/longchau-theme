import { mappedProduct } from "@/lib/common";
import { CarouselDemo } from "@/components/home/carousel";
import { SuggestionSection, ToopDiscountSection } from "@/components/home";
import CategorySection from "@/components/home/category-section";

export const images = [
  "https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Banner_Web_PC_1610x492_copy_6e3d2e1e98.png",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Banner_Web_PC_1610x492_c3d64ac3db.png",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/20240718_Giao_hang_tan_noi_1610x492_bd84ee655b.jpg",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Vacxin_Goinhiva6trong1_homepageweb_PC_9ea8f21c06.jpg",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_web_PC_7a9dadf0c9.png",
];
export const revalidate = 60;
export default async function Home() {
  const homeData = await fetch("https://api.ludmila.vn/api/v1/home");
  const homeJson = await homeData.json();
  const sort = { orderBy: "discount", order: -1 };
  const productsJson = await fetch(
    `https://api.ludmila.vn/api/v1/products?limit=10&skip=0&sort=${encodeURIComponent(
      JSON.stringify(sort)
    )}`
  );
  const productsData = await productsJson.json();
  const products = productsData.items;
  const topNewProduct = homeJson.topNewestProducts
    .slice(0, 5)
    .map((product: any, index: number) => ({
      ...product,
      image: images[index],
    }));
  const newsestProducts = homeJson.topNewestProducts.map(mappedProduct);
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
