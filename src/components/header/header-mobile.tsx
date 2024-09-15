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
import { set } from "react-hook-form";
import Logo from "../icons/logo";
import Close from "../icons/close";

export default function HeaderMobile({ open, setOpen, setOpenDialog }: any) {
  const router = useRouter();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
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

        <div className="py-3 mt-10 px-4 bg-blue-500">
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
          <Accordion type="single" collapsible className="w-full p-4">
            {menu.map((item: any) => (
              <AccordionItem
                className="border-b-0"
                key={item._id}
                value={item._id}
              >
                <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-2 rounded-lg bg-blue-50 divide-y border-stroke-disable">
                    {item.children.map((category: any) => (
                      <Link
                        key={category.name}
                        className="block px-4 py-3 text-gray-1000 text-sm font-medium border-b border-gray-200 hover:text-primary transition-colors"
                        href={`/danh-muc/${category.code}-${category._id}`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-auto py-3 px-4 border-t border-divider-1pt bg-white sticky bottom-0 z-10">
          <div className="text-caption font-semibold">
            Đặt hàng trực tiếp hoặc Zalo, Facebook
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="inline-block">Zalo</div>
          </div>
          <a
            href="tel:0832667711"
            className="inline-flex items-center justify-center font-medium bg-blue-50 text-primary  py-[8px] px-[12px] rounded-[50px] text-sm mt-4 w-full h-auto"
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              className="shrink-0"
            >
              <path
                d="M22.0946 6.8943C21.3154 5.33601 19.6859 4.0754 17.6833 4.29774C15.892 4.49664 13.2323 5.16288 11.4203 7.34634C9.55886 9.58932 8.86485 13.0882 10.2943 18.3285C11.8196 23.9201 14.0861 29.4313 16.9028 33.8791C19.6988 38.2941 23.143 41.8273 27.094 43.1824C30.5884 44.3808 33.2596 43.8808 35.2093 42.5645C37.0881 41.2961 38.1215 39.3872 38.6554 38.0646C39.2533 36.5839 38.8592 35.0433 38.0787 33.9082L35.2017 29.7238C33.8969 27.8261 31.5078 27.0003 29.3096 27.6872L25.3345 28.9294C25.047 29.0193 24.769 28.9283 24.6108 28.7429C22.8418 26.6702 20.8583 23.7785 20.3188 20.8526C20.3009 20.7555 20.3204 20.6759 20.3522 20.6224C20.9367 19.6397 21.9435 18.5257 22.9446 17.551C24.642 15.8984 25.2844 13.273 24.1652 11.035L22.0946 6.8943Z"
                fill="currentColor"
              />
            </svg>
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
