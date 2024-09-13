"use client";
import { useEffect, useRef, useState } from "react";
import HeaderMobile from "./header-mobile";
import Info from "./info";
import Cart from "./cart";
import Link from "next/link";
import Image from "next/image";
import Search from "./search";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

import { Form, InputRHF } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Email from "../icons/mail";
import Phone from "../icons/phone";
import User from "../icons/user";
import Eye from "../icons/eye";
import EyeSlash from "../icons/eye-slash";
import { useCartContext } from "../cart";

export default function Header() {
  const logoRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { headerRef }: any = useCartContext();
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      if (moving >= 130 && logoRef.current && searchRef.current) {
        logoRef.current.style.opacity = "0";
        searchRef.current.classList.add("header-mobile-custom");
        headerRef.current.classList.toggle("hidden", true);
      }
      if (moving < 90 && logoRef.current && searchRef.current) {
        logoRef.current.style.opacity = "1";
        searchRef.current.classList.remove("header-mobile-custom");
        headerRef.current.classList.toggle("hidden", false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      id="header"
      className="sticky top-0 z-[49] bg-[#317dff] transition-[height] md:relative"
    >
      <div className="relative">
        <div className="relative md:static">
          <Info />

          <div className="h-full md:relative md:h-auto">
            <div className="container-lite grid grid-cols-[40px_1fr_40px] grid-rows-[40px] content-center pt-1.5 pb-2 md:grid-cols-[200px_1fr_270px] md:grid-rows-[56px] md:pt-4 md:pb-[44px]">
              <div className="grid place-content-start content-center md:hidden">
                <button onClick={() => setOpen(true)}>
                  <svg
                    width={24}
                    height={24}
                    className="text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17H21C21.5523 17 22 17.4477 22 18C22 18.5128 21.614 18.9355 21.1166 18.9933L21 19H3C2.44772 19 2 18.5523 2 18C2 17.4872 2.38604 17.0645 2.88338 17.0067L3 17H21H3ZM2.99988 11L20.9999 10.9978C21.5522 10.9978 22 11.4454 22 11.9977C22 12.5105 21.6141 12.9333 21.1167 12.9911L21.0001 12.9978L3.00012 13C2.44784 13.0001 2 12.5524 2 12.0001C2 11.4873 2.38594 11.0646 2.88326 11.0067L2.99988 11L20.9999 10.9978L2.99988 11ZM3 5H21C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5H21H3Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <HeaderMobile
                open={open}
                setOpen={setOpen}
                setOpenDialog={setOpenDialog}
              />
              <div
                ref={logoRef}
                className="grid place-content-center content-center transition-[opacity] duration-300 md:place-content-start"
              >
                <Link href="/">
                  <Image
                    src="/logo/logo-5.svg"
                    alt="Ludmila"
                    width={100}
                    height={28}
                    className="h-[28px] w-[100px] !bg-transparent !bg-none object-contain md:h-[56px] md:w-[183px]"
                  />
                </Link>
              </div>
              <div className="grid place-content-end content-center md:col-start-3 md:col-end-4 md:place-content-stretch">
                <div className="flex h-full items-center justify-between">
                  <div className="hidden md:flex items-center">
                    <div className="flex items-center cursor-pointer">
                      <User className="w-6 h-6 text-white" />
                      <div
                        onClick={() => setOpenDialog(true)}
                        className="ml-2 text-base font-medium text-white"
                      >
                        Đăng nhập
                      </div>
                    </div>
                  </div>

                  <Cart></Cart>
                </div>
              </div>
              <div
                ref={searchRef}
                className="search-section col-span-full mt-1.5 grid h-[36px] content-center transition-[margin] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mx-auto md:mt-0 md:h-auto md:w-[680px]"
              >
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </header>
  );
}

const LoginDialog = ({ openDialog, setOpenDialog }: any) => {
  const [signIn, setSignIn] = useState("phoneNumber");
  const [showPassword, setShowPassword] = useState(false);
  const formSchema = z.object({
    phoneNumer: z
      .string()
      .regex(
        /^(?:\+84|84|0)(3|5|7|8|9|1[2689])[0-9]{8}$/,
        "Số điện thoại không hợp lệ"
      ),
    password: z
      .string({ required_error: "Mật khẩu không được để trống" })
      .min(1, { message: "Mật khẩu không được để trống" }),
  });
  const formSchemaEmail = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z
      .string({ required_error: "Mật khẩu không được để trống" })
      .min(1, { message: "Mật khẩu không được để trống" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumer: "",
      password: "",
    },
  });
  const formEmail = useForm<z.infer<typeof formSchemaEmail>>({
    resolver: zodResolver(formSchemaEmail),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmitEmail = (data: any) => {
    console.log(data);
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleChangeSignIn = (value: string) => {
    setSignIn(value);
  };
  return (
    <Dialog onOpenChange={(value) => setOpenDialog(value)} open={openDialog}>
      <DialogContent
        className="p-4 bg-white h-full w-full  px-4 md:w-[450px] md:rounded-xl md:px-[53px] md:h-[520px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle></DialogTitle>
        <div className="relative  py-4  ">
          {/* <DialogHeader className="border-b border-divider-1pt p-1">
          <DialogTitle>Chọn số lượng, thuộc tính</DialogTitle>
        </DialogHeader> */}

          <div className="text-lg md:text-xl font-bold  text-center  ">
            Đăng nhập hoặc Đăng ký
          </div>
          <div className="text-sm md:text-base font-normal text-gray-800/90 mt-2 text-center">
            Vui lòng đăng nhập để hưởng những đặc quyền dành cho thành viên.
          </div>
          {signIn === "phoneNumber" && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="mt-5">
                  <div className="group relative z-0 flex-1 w-full">
                    <InputRHF
                      placeholder="Nhập số điện thoại"
                      name="phoneNumer"
                    />
                  </div>
                  <div className="group relative z-0 flex-1 w-full mt-4">
                    <InputRHF
                      placeholder="Mật khẩu"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      icon={
                        showPassword ? (
                          <span
                            className="absolute top-1/2 right-2.5 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setShowPassword(false)}
                          >
                            <EyeSlash className="h-6 w-6 text-gray-400" />
                          </span>
                        ) : (
                          <span
                            className="absolute top-1/2 right-2.5 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setShowPassword(true)}
                          >
                            <Eye className="h-6 w-6 text-gray-400" />
                          </span>
                        )
                      }
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4">
                  Tiếp tục
                </Button>
              </form>
            </Form>
          )}
          {signIn === "email" && (
            <Form {...formEmail}>
              <form
                onSubmit={formEmail.handleSubmit(onSubmitEmail)}
                className="space-y-8"
              >
                <div data-lc-component="input" className="mt-5">
                  <div className="group relative z-0 flex-1 w-full">
                    <InputRHF placeholder="Nhập email" name="email" />
                  </div>
                  <div className="group relative z-0 flex-1 w-full mt-4">
                    <InputRHF
                      placeholder="Mật khẩu"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      icon={
                        showPassword ? (
                          <span
                            className="absolute top-1/2 right-2.5 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setShowPassword(false)}
                          >
                            <EyeSlash className="h-6 w-6 text-gray-400" />
                          </span>
                        ) : (
                          <span
                            className="absolute top-1/2 right-2.5 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setShowPassword(true)}
                          >
                            <Eye className="h-6 w-6 text-gray-400" />
                          </span>
                        )
                      }
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Tiếp tục
                </Button>
              </form>
            </Form>
          )}
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative text-center">
              <span className="text-sm font-normal text-gray-700/80 bg-white px-2">
                hoặc đăng nhập bằng
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-4">
            {signIn !== "email" && (
              <span
                onClick={() => handleChangeSignIn("email")}
                className="border-stroke-disable hover:bg-white-2 rounded-full border bg-white p-[11px] leading-[1]"
              >
                <Email className="w-6 h-6" />
              </span>
            )}
            {signIn !== "phoneNumber" && (
              <span
                onClick={() => handleChangeSignIn("phoneNumber")}
                className="border-stroke-disable hover:bg-white-2 rounded-full border bg-white p-[11px] leading-[1]"
              >
                <Phone className="w-6 h-6" />
              </span>
            )}
          </div>
          <div className="mt-5 hidden h-[84px] md:block" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
