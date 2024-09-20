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

const COL_NUMBER = 5;
export default function MenuCategory() {
  const [menu, setMenu] = React.useState([]);
  const { width } = useWindowSize();
  React.useEffect(() => {
    const getMenu = async () => {
      if (!localStorage.getItem("menu")) {
        const res = await fetch(`${HOST_API}/home/menu`);
        const data = await res.json();
        setMenu(data);
        localStorage.setItem("menu", JSON.stringify(data));
        return;
      }
      setMenu(JSON.parse(localStorage.getItem("menu") || "[]"));
    };
    getMenu();
  }, []);
  if (!menu.length || !width || width <= MAX_WIDTH_MOBILE) return null;

  return (
    <div className="bg-white flex-1 justify-center relative hidden md:flex">
      <NavigationMenu className="bg-white w-full ">
        <NavigationMenuList>
          {menu.map((item: any) => {
            const cols = Math.ceil(item.children.length / COL_NUMBER);

            return (
              <NavigationMenuItem key={item._id} className="nav-item relative">
                <NavigationMenuTrigger className="hover:text-blue-500 text-gray-1000 text-base">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="top-[60px] z-50 ">
                  <ul
                    style={{
                      width: 280 * cols,
                      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                    }}
                    className={`rounded-md bg-white grid p-6 pt-4 gap-x-6`}
                  >
                    {item.children.map((child: any, index: number) => {
                      const border = index < cols ? true : false;
                      return (
                        <li
                          key={child._id}
                          className={` px-2 mr-2 p-2.5 border-gray-200 text-gray-700 rounded-md leading-none no-underline outline-none transition-colors hover:bg-gray-200 hover:text-gray-1000 focus:bg-accent focus:text-accent-foreground ${
                            border ? "border-t-0" : "border-t"
                          }`}
                        >
                          <Link
                            className="category-panel-left-anchor items-center flex select-none space-y-1"
                            href={`/danh-muc/${child.code}-${child._id}`}
                          >
                            {!!child.icon && (
                              <Image
                                alt="Dụng cụ y tế"
                                className="h-6 w-6"
                                height={24}
                                width={24}
                                src={`/icons/png/${child.icon}`}
                              />
                            )}

                            <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 mb-0 text-base">
                              {child.name}
                            </p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div id="overlay-menu"></div>
    </div>
  );
}

const ListItem = (
  { className, title, border, children, ...props }: any,
  ref: any
) => {
  const { ...restProps } = props;

  return (
    <li
      className={` px-1 mr-2 border-gray-300 ${
        border ? "border-t-0" : "border-t-2"
      }`}
    >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...restProps}
        >
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
