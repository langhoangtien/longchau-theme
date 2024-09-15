import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationDemo,
};

function PaginationDemo({
  count,
  perPage = 2,
  page,
  showPages = 2,
  onChangePage,
}: {
  count: number;
  page: number;
  perPage?: number;
  showPages?: number;
  onChangePage: (page: number) => void;
}) {
  const pageCount = Math.ceil(count / perPage);
  const pages = Array.from(
    { length: showPages * 2 + 1 },
    (_, i) => i + page - showPages
  );
  const viewPages = pages.filter((item) => item > 1 && item < pageCount);
  if (pageCount == 0) return null;
  if (pageCount == 1)
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink isActive href="#">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={page > 1 ? "" : "pointer-events-none text-gray-400"}
          onClick={() => onChangePage(page - 1)}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem onClick={() => onChangePage(1)}>
          <PaginationLink isActive={page === 1} href="#">
            1
          </PaginationLink>
        </PaginationItem>
        {page - showPages - 1 > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {viewPages.map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              isActive={item === page}
              onClick={() => onChangePage(item)}
              href="#"
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page + showPages + 1 < pageCount && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem onClick={() => onChangePage(pageCount)}>
          <PaginationLink isActive={page === pageCount} href="#">
            {pageCount}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem
          className={
            page < pageCount ? "" : "pointer-events-none text-gray-400"
          }
          onClick={() => onChangePage(page + 1)}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
