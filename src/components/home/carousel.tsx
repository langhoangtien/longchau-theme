import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronRight } from "lucide-react";

export function CarouselSilde({ products }: any) {
  return (
    <div className="bg-slate-50 pb-[21px] md:pb-0">
      <div className="relative md:py-4 ">
        <Card>
          <Carousel className="h-auto">
            <CarouselContent>
              {products.map((product: any, index: number) => (
                <CarouselItem key={product._id}>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2  gap-x-4 aspect-[16/6] rounded-xl p-8">
                    <div className="flex flex-col p-4 space-x-2 md:space-y-4 items-center md:items-start justify-center">
                      <div>
                        {" "}
                        <Badge variant="secondary" className="rounded-sm">
                          Giảm giá {product.discount}%
                        </Badge>
                      </div>

                      <p className="text-3xl line-clamp-1 text-primary font-bold">
                        {product.name}
                      </p>
                      <p className="line-clamp-2 text-gray-500  font-medium">
                        {product.introduction}
                      </p>
                      <div>
                        <Link
                          href={"/san-pham/" + product.slug + "-" + product._id}
                          className="p-1"
                        >
                          <Button className="flex items-center space-x-2">
                            Mua ngay{" "}
                            <ChevronRight
                              className=" ml-2 size-6"
                              strokeWidth={1.5}
                            ></ChevronRight>
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="py-8 px-4 w-full aspect-square rounded-xl  ">
                      {" "}
                      <Image
                        width={800}
                        height={400}
                        src={product.image}
                        alt={product.name}
                        priority={!index}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDot />
          </Carousel>
        </Card>
      </div>
    </div>
  );
}
