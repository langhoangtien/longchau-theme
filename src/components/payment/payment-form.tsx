"use client";
import { Button } from "../ui/button";
import { Form, FormField, InputRHF, TextareaRHF } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React, { useEffect, useState } from "react";
import ComboboxDemo from "./combobox-input";

import UserDuoton from "../icons/user-duoton";
import { cities } from "@/constants";
type DistrictType = {
  id: number;
  name: string;
  districtId: string;
  locationSlug: string;
};
type WardType = {
  id: number;
  name: string;
  wardId: string;
  locationSlug: string;
};
export default function PaymentForm({ buttonRef, callback }: any) {
  const [districts, setDistricts] = useState<DistrictType[]>([]);
  const [wards, setWards] = useState<WardType[]>([]);

  const formSchema = z.object({
    fullName: z.string().min(2, {
      message: "Thông tin bắt buộc. Vui lòng nhập đầy đủ.",
    }),
    address: z.string().min(2, {
      message: "Thông tin bắt buộc. Vui lòng nhập đầy đủ.",
    }),
    city: z.string().min(1, {
      message: "Vui lòng chọn Tỉnh/Thành phố.",
    }),
    district: z.string().min(1, {
      message: "Vui lòng chọn Quận/huyện.",
    }),
    ward: z.string().min(1, {
      message: "Vui lòng chọn Phường/xã.",
    }),

    phoneNumer: z
      .string()
      .regex(
        /^(?:\+84|84|0)(3|5|7|8|9|1[2689])[0-9]{8}$/,
        "Số điện thoại không hợp lệ"
      ),
    email: z.union([z.literal(""), z.string().email()]).optional(),
    note: z
      .string()
      .max(500, { message: "Ghi chú không quá 500 ký tự" })
      .optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumer: "",
      note: "",
      city: "",
      district: "",
      ward: "",
      address: "",
      email: undefined,
    },
  });
  const { watch, setValue } = form;
  const values = watch();
  const onSubmit = async () => {
    const city = cities.find((i) => i.cityId == values.city);
    const district = districts.find((i) => i.districtId == values.district);
    const ward = wards.find((i: WardType) => i.wardId == values.ward);
    const dataMapped = {
      phoneNumber: values.phoneNumer,
      shippingAddress: `${values.address}, ${ward?.name}, ${district?.name}, ${city?.name}`,
      receiverName: values.fullName,
    };
    callback(dataMapped);
  };
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Token: "Bearer 2d2e1a7d-4a7f-11ec-8d3d-0e7b8f5a2d0b",
          },
        });
        const data = await res.json();
        setValue("district", "");
        setValue("ward", "");
        setDistricts(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    if (values.city)
      getData(
        `https://api.nhathuoclongchau.com.vn/lccus/ecom-prod/customer-api/v2/region/districts?type=1&cityId=${values.city}`
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.city]);
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Token: "Bearer 2d2e1a7d-4a7f-11ec-8d3d-0e7b8f5a2d0b",
          },
        });
        const data = await res.json();
        setWards(data);
        setValue("ward", "");
      } catch (error) {
        console.log("Error", error);
      }
    };
    if (values.district)
      getData(
        `https://api.nhathuoclongchau.com.vn/lccus/ecom-prod/customer-api/v2/region/wards?type=1&districtId=${values.district}`
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.district]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 shrink-0 grow-0">
              <UserDuoton className="w-full h-full" />
            </div>
            <span className="text-sm font-medium md:text-base">
              Địa chỉ nhận hàng
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="col-span-2 md:col-span-1">
              {" "}
              <InputRHF placeholder="Nhập họ tên" name="fullName" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <InputRHF placeholder="Nhập số điện thoại" name="phoneNumer" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <FormField
                name="city"
                render={({ field }) => (
                  <ComboboxDemo
                    setValue={form.setValue}
                    field={field}
                    options={cities}
                    idName="cityId"
                    label="Chọn tỉnh/thành phố"
                  />
                )}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <FormField
                name="district"
                render={({ field }) => (
                  <ComboboxDemo
                    setValue={form.setValue}
                    field={field}
                    options={districts}
                    disabled={!values.city}
                    idName="districtId"
                    label="Chọn quận/huyện"
                  />
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                name="ward"
                render={({ field }) => (
                  <ComboboxDemo
                    setValue={form.setValue}
                    field={field}
                    options={wards}
                    disabled={!values.district}
                    idName="wardId"
                    label="Chọn phường/xã"
                  />
                )}
              />
            </div>
            <div className="md:col-span-2">
              <InputRHF placeholder="Nhập địa chỉ cụ thể" name="address" />
            </div>
            <div className="col-span-2">
              <TextareaRHF
                name="note"
                placeholder="Ghi chú đơn hàng (không bắt buộc)"
                rows={4}
              />
            </div>
          </div>

          <button ref={buttonRef} type="submit" className="hidden">
            Tiếp tục
          </button>
        </div>
      </form>
    </Form>
  );
}
