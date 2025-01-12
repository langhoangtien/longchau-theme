"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index);
      },
      [api]
    );
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          scrollTo,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full text-white bg-gray-500 border-0 hover:bg-gray-400 z-[9]",
        canScrollPrev ? "" : "!hidden",
        orientation === "horizontal"
          ? "left-12 top-1/2 -translate-y-1/2"
          : "top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg
        viewBox="0 0 25 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path
          d="M16.668 4.29289C17.0586 4.68342 17.0586 5.31658 16.668 5.70711L10.3752 12L16.668 18.2929C17.0586 18.6834 17.0586 19.3166 16.668 19.7071C16.2775 20.0976 15.6444 20.0976 15.2538 19.7071L8.25383 12.7071C7.86331 12.3166 7.86331 11.6834 8.25383 11.2929L15.2538 4.29289C15.6444 3.90237 16.2775 3.90237 16.668 4.29289Z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full text-white bg-gray-500 border-0 hover:bg-gray-400 z-[9]",
        canScrollNext ? "" : "!hidden",
        orientation === "horizontal"
          ? "right-12 top-1/2 -translate-y-1/2"
          : "bottom-12 left-1/2 -translate-x-1/2 ",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg
        viewBox="0 0 25 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-180"
      >
        <path
          d="M16.668 4.29289C17.0586 4.68342 17.0586 5.31658 16.668 5.70711L10.3752 12L16.668 18.2929C17.0586 18.6834 17.0586 19.3166 16.668 19.7071C16.2775 20.0976 15.6444 20.0976 15.2538 19.7071L8.25383 12.7071C7.86331 12.3166 7.86331 11.6834 8.25383 11.2929L15.2538 4.29289C15.6444 3.90237 16.2775 3.90237 16.668 4.29289Z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CaroselIndex = () => {
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps } = useDotButton(api);
  if (!scrollSnaps.length) return null;
  return (
    <span className="border border-gray-300 rounded-full text-xs text-gray-700 py-1 px-3 bg-white absolute bottom-5 left-5 z-[30] ">
      {selectedIndex + 1}/{scrollSnaps.length}
    </span>
  );
};
const CarouselDot = () => {
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div className="absolute justify-center text-center w-100 left-0 !bottom-[23px] w-full  md:flex ">
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={"size-1 rounded-[50%]  cursor-pointer p-1 mx-1".concat(
            index === selectedIndex ? " bg-gray-600" : " bg-gray-400"
          )}
        />
      ))}
    </div>
  );
};

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = React.ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return <button {...restProps}> {children}</button>;
};

const CarouselThumb = ({ slides }: { slides: string[] }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const { api } = useCarousel();
  const onThumbClick = React.useCallback(
    (thumbIndex: number) => {
      if (!api || !emblaThumbsApi) return;
      api.scrollTo(thumbIndex);
    },
    [api, emblaThumbsApi]
  );
  const onSelect = React.useCallback(() => {
    if (!api || !emblaThumbsApi) return;
    setSelectedIndex(api.selectedScrollSnap());
    emblaThumbsApi.scrollTo(api.selectedScrollSnap());
  }, [api, emblaThumbsApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!api) return;
    onSelect();

    api.on("select", onSelect).on("reInit", onSelect);
  }, [api, onSelect]);
  return (
    <div className="p-2 mt-6 hidden md:block">
      <div className="w-full overflow-hidden" ref={emblaThumbsRef}>
        <div className="gap-4 flex">
          {slides.map((image: string, thumbIndex) => (
            <Thumb
              key={image}
              image={image}
              onClick={() => onThumbClick(thumbIndex)}
              selected={thumbIndex === selectedIndex}
              index={thumbIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: string;
};

export const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, index, onClick, image } = props;

  return (
    <div
      className={" cursor-pointer p-1 flex-[0_0_22%] border rounded-sm".concat(
        selected ? " border-primary" : ""
      )}
    >
      <Image
        alt="thumb"
        width={100}
        height={100}
        className="object-cover 1 aspect-square"
        src={image}
        onClick={onClick}
      />
    </div>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDot,
  CarouselThumb,
  CaroselIndex,
};
