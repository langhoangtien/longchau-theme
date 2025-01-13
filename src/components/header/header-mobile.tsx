import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HOST_API } from "@/config-global";
import { useRouter } from "next/navigation";
import Logo from "../icons/logo";
import Close from "../icons/close";
import Phone from "../icons/phone";
import { CACHE_KEY } from "../menu-category";

export default function HeaderMobile({ open, setOpen, setOpenDialog }: any) {
  const router = useRouter();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      if (!sessionStorage.getItem(CACHE_KEY)) {
        const res = await fetch(`${HOST_API}/home/menu`);
        const data = await res.json();
        const dataMenu = data.menu;
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(dataMenu));
        return;
      }
      setMenu(JSON.parse(sessionStorage.getItem(CACHE_KEY) || "[]"));
    };
    getMenu();
  }, []);
  const backToHome = () => {
    router.push("/");
    setOpen(false);
  };
  const handleOpneSignInDialog = () => {
    setOpen(false);
    setOpenDialog(true);
  };

  return (
    <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
      <SheetContent className="p-0 overflow-auto">
        <SheetHeader className="hidden">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-3.5 px-4 flex justify-between items-center sticky top-0 z-10 bg-white border-b border-divider-1pt drop-shadow-md">
          <span onClick={backToHome} className="shrink-0">
            <Logo className="w-36 h-8" />
          </span>
          <SheetClose>
            <span
              className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
              tabIndex={-1}
            >
              <Close className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </span>
          </SheetClose>
        </div>

        <div className="py-3 mt-10 px-4 bg-primary">
          <div className="text-sm font-medium text-white">
            Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.
          </div>
          <div className="mt-3 py-4 flex items-center gap-2 [&>*]:shrink-0">
            <Button onClick={handleOpneSignInDialog} variant="outline">
              {" "}
              Đăng nhập
            </Button>
          </div>
        </div>
        <div className="mt-1 py-4">
          <Accordion type="single" collapsible className="w-full">
            {menu.map((item: any) => {
              if (item.link) return null;
              return (
                <AccordionItem
                  className="border-b-0"
                  key={item._id}
                  value={item._id}
                >
                  <AccordionTrigger className="text-base font-normal text-gray-900 hover:no-underline p-3  ">
                    <Link href={`/danh-muc/${item.code}-${item._id}`}>
                      {item.name}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-2 pr-1 ml-4 border-l border-gray-100 border-stroke-disable">
                      {item.children.map((category: any) => (
                        <Link
                          key={category.name}
                          className="block px-4 py-3 text-gray-900 text-sm font-normal hover:bg-gray-100   hover:text-primary transition-colors"
                          href={`/danh-muc/${category.code}-${category._id}`}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
            <AccordionItem
              className="border-b-0"
              key="thuong-hieu"
              value={"thuong-hieu"}
            >
              <p className="text-base font-normal text-gray-800 hover:no-underline p-3  border-gray-200 flex flex-1 items-center justify-between py-4  transition-all  ">
                <Link href="/thuong-hieu">Thương hiệu</Link>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-auto py-3 px-4 border-t border-divider-1pt bg-white sticky bottom-0 z-10">
          <div className="text-sm font-semibold text-gray-800/80">
            Đặt hàng trực tiếp tại Zalo, Facebook
          </div>

          <a
            href="tel:0968993683"
            className="inline-flex items-center justify-center font-medium bg-blue-50 text-primary  py-[8px] px-[8px] rounded-[25px] text-sm mt-4 w-full h-auto"
          >
            <Phone className="w-5 h-5 shrink-0" />

            <span>
              Tư vấn<span className="uxs:sr-only">: 0832.667.711</span> (Miễn
              phí)
            </span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
