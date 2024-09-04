import DetailProductContent from "@/components/product/detail-product-content";
import ProductDetailCarousel from "@/components/product/product-detail-carousel";
import ProductDetailFaq from "@/components/product/product-detail-faq";
import ProductDetailPreview from "@/components/product/product-detail-preview";
import ProductRecentlyViewed from "@/components/product/product-recently-viewed";
import RelatedProduct from "@/components/product/product-detail-related";

import { HOST_API } from "@/config-global";
import { convertImagePathToUrl } from "@/lib/common";
import { notFound } from "next/navigation";
import ProductDetailInfo from "@/components/product/product-detail-info";
import { ProductVariantType } from "@/types";

export default async function Product(props: any) {
  const slug = props?.params?.slug ?? null;
  const id = slug.split("-").pop();
  const resultJson = await fetch(`${HOST_API}/products/${id}`);
  const result = await resultJson.json();
  if (!result) return notFound();
  const images = result.images.map((img: string) =>
    convertImagePathToUrl(img, 800)
  );
  const variants = result.variants.map((item: ProductVariantType) => ({
    ...item,
    image: item.image ? convertImagePathToUrl(item.image, 800) : undefined,
  }));
  const variantsImages = variants
    .filter((item: any) => item.image)
    .map((variant: any) => variant.image);
  const firstVariant = variants[0];
  let minPrice = firstVariant.price;
  let maxPrice = firstVariant.price;
  let minSalePrice = firstVariant.salePrice;
  let maxSalePrice = firstVariant.salePrice;

  result.variants.forEach((item: any) => {
    minPrice = Math.min(minPrice, item.price);
    maxPrice = Math.max(maxPrice, item.price);
    minSalePrice = Math.min(minSalePrice, item.salePrice);
    maxSalePrice = Math.max(maxSalePrice, item.salePrice);
  });
  const image = convertImagePathToUrl(result.image, 800);
  const totalRating =
    result.ratings?.reduce((acc: any, cur: any) => acc + cur, 0) ?? 0;
  const product = {
    ...result,
    image,
    images: images.concat(variantsImages, image),
    totalReviews: totalRating,
    variants,
    minPrice,
    maxPrice,
    minSalePrice,
    maxSalePrice,
  };
  console.log("product", product.variants[0].attributes);

  return (
    <div className="sm:pb-6 md:pb-10 ">
      <ol
        data-lcpr="prr-id-product-detail-breadcrumb"
        className="my-3 flex flex-wrap md:my-4 container-lite"
      >
        <li>
          <span className="text-md text-link md:text-base">
            <a className="text-blue-500" href="/">
              <span className="hidden md:inline-block">Trang chủ</span>
              <svg
                width={16}
                height={16}
                className="inline-block md:hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5492 2.53318C11.3872 1.82618 12.6128 1.82618 13.4508 2.53318L20.2008 8.22772C20.7076 8.65523 21 9.28447 21 9.94747V19.7504C21 20.7169 20.2165 21.5004 19.25 21.5004H16.25C15.2835 21.5004 14.5 20.7169 14.5 19.7504V14.7504C14.5 14.3362 14.1642 14.0004 13.75 14.0004H10.25C9.83579 14.0004 9.5 14.3362 9.5 14.7504V19.7504C9.5 20.7169 8.7165 21.5004 7.75 21.5004H4.75C3.7835 21.5004 3 20.7169 3 19.7504V9.94747C3 9.28447 3.29241 8.65523 3.79916 8.22772L10.5492 2.53318Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 text-text-link md:text-base">
            <a className="text-blue-500" href="/duoc-my-pham">
              Dược mỹ phẩm
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 text-text-link md:text-base">
            <a className="text-blue-500" href="/duoc-my-pham/giai-phap-lan-da">
              Giải pháp làn da
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 md:text-base text-text-primary pointer-events-none">
            <a href="/duoc-my-pham/tri-seo-mo-tham">Trị sẹo, mờ vết thâm</a>
          </span>
        </li>
      </ol>
      <div className="md:container-lite md:space-y-4 md:space-y-8">
        <ProductDetailInfo product={product} />

        <DetailProductContent description={product.description} />
        <ProductRecentlyViewed product={product} />
        <RelatedProduct title=" Sản phẩm liên quan" />

        <ProductDetailFaq />

        <ProductDetailPreview />

        <RelatedProduct products={[product]} title="Sản phẩm vừa xem" />
      </div>
    </div>
  );
}
