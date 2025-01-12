import {
  CaroselIndex,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumb,
} from "@/components/ui/carousel";

import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
export default function ProductDetailCarousel({
  slides,
}: {
  slides: string[];
}) {
  return (
    <div className="bg-transparent md:max-w-[475px] md:mr-8 ">
      <Carousel>
        <div className="relative h-auto shrink-0 md:max-w-[805px] md:basis-[805px]">
          <CaroselIndex />
          <CarouselContent>
            {slides.map((image: any, index) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <CardContent className="flex md:w-[475px] aspect-[1/1] items-center justify-center rounded-xl p-0">
                    <Image
                      alt="Product Image"
                      width={475}
                      height={475}
                      src={image}
                      priority={!index}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            style={{
              boxShadow:
                " rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
            }}
            className="hidden md:flex  -translate-x-[50%] -translate-y-[50%] bg-white hover:bg-white text-primary hover:text-primary md:border md:hover:border-text-primary h-10 w-10"
          />
          <CarouselNext
            style={{
              boxShadow:
                "rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
            }}
            className="hidden md:flex translate-x-[50%] -translate-y-[50%] bg-white hover:bg-white text-primary hover:text-primary md:border md:hover:border-text-primary h-10 w-10"
          />
        </div>

        <CarouselThumb slides={slides} />
      </Carousel>
    </div>
  );
}
