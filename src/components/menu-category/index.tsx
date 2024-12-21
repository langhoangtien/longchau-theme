import * as React from "react";

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

import Link from "next/link";

import { ListItem, ListSubItem } from "./sub-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export default function MenuCategory() {
  const [menu, setMenu] = React.useState([]);
  const [id, setId] = React.useState("");
  const isMobile = useIsMobile();
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
  if (isMobile) return null;

  const handleMouseEnter = (id: string) => {
    setId(id);
  };

  return (
    <div className="bg-white flex-1 justify-start relative  hidden md:flex">
      <div className="container-lite">
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item: any) => (
              <NavigationMenuItem key={item._id}>
                <NavigationMenuTrigger>
                  {" "}
                  <Link href={`/danh-muc/${item.code}-${item._id}`}>
                    {" "}
                    {item.name}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.children && item.children.length && (
                    <ul className="grid p-6 md:w-[700px] lg:w-[1100px] grid-cols-[.45fr_1fr] h-[520px] max-h-100">
                      <li className="flex flex-col overflow-auto">
                        {item.children.map((subItem: any) => (
                          <NavigationMenuLink key={subItem._id} asChild>
                            <Link
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
                          </NavigationMenuLink>
                        ))}
                      </li>
                      <ListSubItem id={id} />
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <Link href="/thuong-hieu" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Thương hiệu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div id="overlay-menu"></div>
      </div>
    </div>
  );
}
