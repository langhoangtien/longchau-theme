"use client";

import { FormField, InputRHF, TextareaRHF } from "../ui/form";

import { useFormContext } from "react-hook-form";

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
export default function PaymentForm({ buttonRef }: any) {
  const [districts, setDistricts] = useState<DistrictType[]>([]);
  const [wards, setWards] = useState<WardType[]>([]);
  const { watch, setValue } = useFormContext();
  const values = watch();

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
        const dataMapped = data.map((item: any) => ({
          ...item,
          idName: `${item.id}-${item.name}`,
        }));
        setDistricts(dataMapped);
      } catch (error) {
        console.log("Error", error);
      }
    };
    if (values.city)
      getData(
        `https://api.nhathuoclongchau.com.vn/lccus/ecom-prod/customer-api/v2/region/districts?type=1&cityId=${
          values.city.split("-")[0]
        }`
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
        const dataMapped = data.map((item: any) => ({
          ...item,
          idName: `${item.id}-${item.name}`,
        }));
        setWards(dataMapped);

        setValue("ward", "");
      } catch (error) {
        console.log("Error", error);
      }
    };
    if (values.district)
      getData(
        `https://api.nhathuoclongchau.com.vn/lccus/ecom-prod/customer-api/v2/region/wards?type=1&districtId=${
          values.district.split("-")[0]
        }`
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.district]);

  return (
    <div>
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-6 h-6 shrink-0 grow-0">
          <UserDuoton className="w-full h-full" />
        </div>
        <span className="text-sm font-medium md:text-base">
          Địa chỉ nhận hàng
        </span>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          {" "}
          <InputRHF required placeholder="Nhập họ tên" name="fullName" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <InputRHF
            required
            placeholder="Nhập số điện thoại"
            name="phoneNumer"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <FormField
            name="city"
            render={({ field }) => (
              <ComboboxDemo
                setValue={setValue}
                field={field}
                options={cities}
                idName="idName"
                label="Chọn tỉnh/thành phố"
                required
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <FormField
            name="district"
            render={({ field }) => (
              <ComboboxDemo
                setValue={setValue}
                field={field}
                options={districts}
                disabled={!values.city}
                idName="idName"
                label="Chọn quận/huyện"
                required
              />
            )}
          />
        </div>
        <div className="col-span-2">
          <FormField
            name="ward"
            render={({ field }) => (
              <ComboboxDemo
                setValue={setValue}
                field={field}
                options={wards}
                disabled={!values.district}
                idName="idName"
                label="Chọn phường/xã"
                required
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
    </div>
  );
}
