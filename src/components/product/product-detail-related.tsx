"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Product from "../home/product";
import { useEffect, useState } from "react";

export default function RelatedProduct({ title }: any) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsLocal = localStorage.getItem("recentlyViewed");
    if (productsLocal) {
      setProducts(JSON.parse(productsLocal));
    }
  }, []);
  return (
    <div className="px-4">
      <div className="bg-transparent">
        <div className="mb-4 flex items-center">
          <h2 className="flex w-full items-center text-heading3 font-semibold">
            {title}
          </h2>
        </div>

        <Carousel opts={{ slidesToScroll: "auto" }}>
          <CarouselContent className="pl-3 md:pl-0 ">
            {products.map((product: any, index: number) => (
              <CarouselItem
                key={product._id}
                className=" basis-1/2 md:basis-1/4 xl:basis-1/5"
              >
                <div className="h-full">
                  <Product product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            style={{
              boxShadow:
                " rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
            }}
            className="hidden md:flex top-[50%] left-0 -translate-x-[50%] -translate-y-[50%] bg-white hover:bg-white text-primary hover:text-primary md:border md:hover:border-text-primary h-10 w-10"
          />
          <CarouselNext
            style={{
              boxShadow:
                "rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
            }}
            className="hidden md:flex top-[50%] right-0 translate-x-[50%] -translate-y-[50%] bg-white hover:bg-white text-primary hover:text-primary md:border md:hover:border-text-primary h-10 w-10"
          />
        </Carousel>
      </div>
    </div>
  );
}
