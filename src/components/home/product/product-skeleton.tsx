import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="h-full relative flex rounded-xl border border-solid border-white bg-white flex-col">
      <div className="px-3 block pt-3">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md aspect-square">
          <Skeleton className="h-full w-full object-cover object-center lg:h-full lg:w-full " />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between pb-1">
        <div className="block px-3">
          <div className="mb-1 pb-2 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
          <Skeleton className="h-8"></Skeleton>
        </div>
      </div>
    </div>
  );
}
