import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumb,
} from "@/components/ui/carousel";

import { CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductDetailCarousel({
  slides,
}: {
  slides: string[];
}) {
  return (
    <div className="bg-transparent md:max-w-[475px] md:mr-8 ">
      <Carousel>
        <div className="relative h-auto shrink-0 md:max-w-[805px] md:basis-[805px]">
          <CarouselContent>
            {slides.map((image: any) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <CardContent className="flex md:w-[475px] aspect-[1/1] items-center justify-center rounded-xl p-0">
                    <Image
                      alt="Product Image"
                      width={475}
                      height={475}
                      src={image}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselThumb slides={slides} />
      </Carousel>
    </div>
  );
}
