"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HOST_API } from "@/config-global";

import Link from "next/link";

import { ListItem, ListSubItem } from "./sub-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const CACHE_KEY = "menuCategoryData";
export default function MenuCategory() {
  const [menu, setMenu] = React.useState([]);
  const [id, setId] = React.useState("");
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch(`${HOST_API}/home/menu`);
        if (!res.ok) return;
        const data = await res.json();
        const dataMapped = data.menu?.concat({
          title: "Thương hiệu",
          link: "/thuong-hieu",
          _id: "brand",
        });
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(dataMapped));

        setMenu(dataMapped);
      } catch (error) {
        console.log("Error", error);
      }
    };
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
      setMenu(JSON.parse(cachedData));
    } else {
      getMenu();
    }
  }, []);
  if (isMobile) return null;

  const handleMouseEnter = (id: string) => {
    setId(id);
  };

  return (
    <div className="bg-white w-full">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" flex-1 justify-start relative  hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item: any) => {
                if (item.link)
                  return (
                    <NavigationMenuItem key={item._id}>
                      <Link href={item.link}>
                        <div className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </div>
                      </Link>
                    </NavigationMenuItem>
                  );
                if (item.children && item.children.length)
                  return (
                    <NavigationMenuItem key={item._id}>
                      <NavigationMenuTrigger>
                        {" "}
                        <Link href={`/danh-muc/${item.code}-${item._id}`}>
                          {" "}
                          {item.name}
                        </Link>
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        {
                          <ul className="grid p-6 md:w-[700px] lg:w-[1100px] grid-cols-[.45fr_1fr] h-[520px] max-h-100">
                            <div className="flex flex-col overflow-auto">
                              {item.children.map((subItem: any) => (
                                <Link
                                  key={subItem._id}
                                  href={`/danh-muc/${subItem.code}-${subItem._id}`}
                                >
                                  <ListItem
                                    onMouseEnter={() =>
                                      handleMouseEnter(subItem._id)
                                    }
                                    className="p-2 border-b-2 border-slate-100 rounded-r-none h-12 cursor-pointer"
                                  >
                                    {subItem.name}
                                  </ListItem>
                                </Link>
                              ))}
                            </div>
                            <ListSubItem id={id} />
                          </ul>
                        }
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                return (
                  <NavigationMenuItem key={item._id}>
                    <Link href={`/danh-muc/${item.code}-${item._id}`}>
                      <div className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </div>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
