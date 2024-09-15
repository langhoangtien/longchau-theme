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
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export const revalidate = 30;
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
  const ratingsCalc =
    result.ratings?.map((rating: any) => ({
      percent: totalRating && (rating / totalRating) * 100,
      rating,
    })) ?? [];
  const product = {
    ...result,
    image,
    images: images.concat(variantsImages, image),
    totalRating,
    variants,
    minPrice,
    maxPrice,
    minSalePrice,
    maxSalePrice,
  };
  const { description, ...productData } = product;
  return (
    <div className="sm:pb-6 md:pb-10 ">
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
              <BreadcrumbLink
                className="text-primary"
                href={`
                  /danh-muc/${product.category?.code}-${product.category?._id}`}
              >
                {product.category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ol>
      <div className="md:container-lite md:space-y-8">
        <ProductDetailInfo product={productData} />

        <DetailProductContent description={description} />
        <ProductRecentlyViewed product={productData} />
        <RelatedProduct title=" Sản phẩm liên quan" />

        <ProductDetailFaq />

        <ProductDetailPreview
          // ratings={product.ratings}
          totalRating={totalRating}
          id={product._id}
          ratingAverage={product.ratingAverage}
          ratingsCalc={ratingsCalc}
        />

        <RelatedProduct products={[product]} title="Sản phẩm vừa xem" />
      </div>
    </div>
  );
}
