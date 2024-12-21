"use client";
import { useState } from "react";
import HeaderMobile from "./header-mobile";

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

import { MAX_WIDTH_MOBILE } from "@/constants";
import MenuIcon from "../icons/menu-icon";
import MenuCategory from "../menu-category";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const isMobile = useIsMobile();

  return (
    <header
      id="header"
      className="sticky top-0 z-[49] bg-gradient-to-r from-primary to-primary/80 transition-[height] "
    >
      {isMobile && (
        <HeaderMobile
          open={open}
          setOpen={setOpen}
          setOpenDialog={setOpenDialog}
        />
      )}

      <div className="relative">
        <div className="relative md:static">
          {/* <Info /> */}

          <div className="h-full md:relative md:h-auto">
            <div className="container-lite grid grid-cols-[40px_1fr_40px] grid-rows-[40px] content-center pt-1.5 pb-2 md:grid-cols-[200px_1fr_270px] md:grid-rows-[56px] md:pt-4 md:pb-[44px]">
              <div className="grid place-content-start content-center md:hidden">
                <button aria-label="open menu" onClick={() => setOpen(true)}>
                  <MenuIcon className="w-5 h-4 text-white" />
                </button>
              </div>

              <div className="grid place-content-center content-center transition-[opacity] duration-300 md:place-content-start text-primary">
                <Logo />
              </div>

              <div className="grid place-content-end content-center md:col-start-3 md:col-end-4 md:place-content-stretch text-black">
                <div className="flex h-full items-center justify-end space-x-2 ">
                  <div className="hidden md:flex items-center justify-center h-11 w-11 rounded-full bg-gray-700/80">
                    <div
                      onClick={() => setOpenDialog(true)}
                      className="flex items-center cursor-pointer"
                    >
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <Cart></Cart>
                </div>
              </div>

              <Search />
            </div>
          </div>
        </div>
      </div>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />

      <MenuCategory />
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
                className="border-stroke-disable hover:bg-white-2 rounded-full border bg-white p-[11px] leading-[1] cursor-pointer"
              >
                <Email className="w-6 h-6" />
              </span>
            )}
            {signIn !== "phoneNumber" && (
              <span
                onClick={() => handleChangeSignIn("phoneNumber")}
                className="border-stroke-disable hover:bg-white-2 rounded-full border bg-white p-[11px] leading-[1] cursor-pointer"
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
