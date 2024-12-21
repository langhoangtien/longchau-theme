"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HOST_API } from "@/config-global";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@/hooks/use-window-size";
import { MAX_WIDTH_MOBILE } from "@/constants";
import { convertImagePathToUrl, encodeData } from "@/lib/common";
import { ChevronRight } from "lucide-react";
export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export const ListSubItem = ({ id }: { id: string }) => {
  const [subMenu, setSubMenu] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response1 = fetch(
          `${HOST_API}/products?limit=5&filterRaw=${encodeData({
            category: [id],
          })}`
        );
        const response2 = fetch(`${HOST_API}/categories/${id}`);

        const [result1, result2] = await Promise.all([response1, response2]);

        const data1 = await result1.json();
        const data2 = await result2.json();
        const productData = data1.items.map((item: any) => ({
          ...item,
          image: convertImagePathToUrl(item.image, 80),
        }));

        setProducts(productData);
        setSubMenu(data2.childrens.slice(0, 6));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <li className="bg-accent rounded-r-md p-4">
      <div className="grid gap-3 p-4  md:grid-cols-3">
        {subMenu.map((subMenuItem: any, index) => {
          if (index === 5)
            return (
              <li key={subMenuItem._id}>
                <NavigationMenuLink key={subMenuItem._id} asChild>
                  <Link
                    href={`/danh-muc/${id}`}
                    className="h-full flex items-center bg-white space-x-2 cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  "
                  >
                    <div className="text-sm font-medium leading-none text-gray-700/80  ml-2">
                      Xem thêm ...
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          return (
            <li key={subMenuItem._id}>
              <NavigationMenuLink asChild>
                <Link
                  href={`/danh-muc/${subMenuItem._id}`}
                  className="flex items-center bg-white space-x-2 cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  "
                >
                  <Image
                    className="m-1"
                    src={convertImagePathToUrl(subMenuItem.image, 80)}
                    width={40}
                    alt="Sinh tố"
                    height={40}
                  />
                  <div className="text-sm font-medium leading-none ml-2">
                    {subMenuItem.name}
                  </div>
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </div>
      <div className="border-b border-nlue-700 mx-4"></div>
      <div className="mb-[16px] flex items-center space-x-4 mt-2">
        <span className="text-base  font-semibold">Bán chạy nhất</span>
        <Link
          href={`/danh-muc/${id}`}
          className="flex items-center text-sm text-primary space-x-1 font-semibold cursor-pointer"
        >
          Xem tất cả <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-5 p-4 gap-[15.25px]">
        {products.map((product: any) => (
          <div key={product._id}>
            <div className="relative">
              <Link href={`/san-pham/${product.slug}-${product._id}`}>
                <div className="bg-white rounded-sm p-1 aspect-h-1 aspect-w-1 aspect-square ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={104}
                    height={104}
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
              </Link>
            </div>
            <div className="p-1 mt-1">
              <Link href={`/san-pham/${product.slug}-${product._id}`}>
                <div className="text-sm font-medium line-clamp-2">
                  {product.name}
                </div>
              </Link>
              <div className="price">
                <span className="text-primary text-sm font-semibold">
                  {product.salePrice}
                </span>
              </div>
              <div className="" />
            </div>
          </div>
        ))}
      </div>
    </li>
  );
};
