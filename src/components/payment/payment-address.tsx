"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InputRHF,
} from "../ui/form";
import { Input, Input2 } from "../ui/input";
import { Button } from "../ui/button";
import ComboboxDemo from "./combobox-input";
import { useEffect, useState } from "react";
import UserDuoton from "../icons/user-duoton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const cities = [
  { id: 23, name: "Hồ Chí Minh", cityId: "23", locationSlug: "ho-chi-minh" },
  { id: 26, name: "Hà Nội", cityId: "26", locationSlug: "ha-noi" },
  { id: 17, name: "Đà Nẵng", cityId: "17", locationSlug: "da-nang" },
  { id: 14, name: "Cần Thơ", cityId: "14", locationSlug: "can-tho" },
  { id: 28, name: "Hải Phòng", cityId: "28", locationSlug: "hai-phong" },
  { id: 1, name: "Tỉnh An Giang", cityId: "1", locationSlug: "tinh-an-giang" },
  {
    id: 9,
    name: "Tỉnh Bà Rịa - Vũng Tàu",
    cityId: "9",
    locationSlug: "tinh-ba-ria---vung-tau",
  },
  {
    id: 4,
    name: "Tỉnh Bắc Giang",
    cityId: "4",
    locationSlug: "tinh-bac-giang",
  },
  { id: 5, name: "Tỉnh Bắc Kạn", cityId: "5", locationSlug: "tinh-bac-kan" },
  { id: 6, name: "Tỉnh Bạc Liêu", cityId: "6", locationSlug: "tinh-bac-lieu" },
  { id: 7, name: "Tỉnh Bắc Ninh", cityId: "7", locationSlug: "tinh-bac-ninh" },
  { id: 10, name: "Tỉnh Bến Tre", cityId: "10", locationSlug: "tinh-ben-tre" },
  {
    id: 3,
    name: "Tỉnh Bình Định",
    cityId: "3",
    locationSlug: "tinh-binh-dinh",
  },
  {
    id: 2,
    name: "Tỉnh Bình Dương",
    cityId: "2",
    locationSlug: "tinh-binh-duong",
  },
  {
    id: 8,
    name: "Tỉnh Bình Phước",
    cityId: "8",
    locationSlug: "tinh-binh-phuoc",
  },
  {
    id: 11,
    name: "Tỉnh Bình Thuận",
    cityId: "11",
    locationSlug: "tinh-binh-thuan",
  },
  { id: 13, name: "Tỉnh Cà Mau", cityId: "13", locationSlug: "tinh-ca-mau" },
  {
    id: 12,
    name: "Tỉnh Cao Bằng",
    cityId: "12",
    locationSlug: "tinh-cao-bang",
  },
  { id: 16, name: "Tỉnh Đắk Lắk", cityId: "16", locationSlug: "tinh-dak-lak" },
  {
    id: 19,
    name: "Tỉnh Đăk Nông",
    cityId: "19",
    locationSlug: "tinh-dak-nong",
  },
  {
    id: 15,
    name: "Tỉnh Điện Biên",
    cityId: "15",
    locationSlug: "tinh-dien-bien",
  },
  {
    id: 18,
    name: "Tỉnh Đồng Nai",
    cityId: "18",
    locationSlug: "tinh-dong-nai",
  },
  {
    id: 20,
    name: "Tỉnh Đồng Tháp",
    cityId: "20",
    locationSlug: "tinh-dong-thap",
  },
  { id: 21, name: "Tỉnh Gia Lai", cityId: "21", locationSlug: "tinh-gia-lai" },
  {
    id: 25,
    name: "Tỉnh Hà Giang",
    cityId: "25",
    locationSlug: "tinh-ha-giang",
  },
  { id: 27, name: "Tỉnh Hà Nam", cityId: "27", locationSlug: "tinh-ha-nam" },
  { id: 29, name: "Tỉnh Hà Tĩnh", cityId: "29", locationSlug: "tinh-ha-tinh" },
  {
    id: 24,
    name: "Tỉnh Hải Dương",
    cityId: "24",
    locationSlug: "tinh-hai-duong",
  },
  {
    id: 32,
    name: "Tỉnh Hậu Giang",
    cityId: "32",
    locationSlug: "tinh-hau-giang",
  },
  {
    id: 22,
    name: "Tỉnh Hòa Bình",
    cityId: "22",
    locationSlug: "tinh-hoa-binh",
  },
  {
    id: 33,
    name: "Tỉnh Hưng Yên",
    cityId: "33",
    locationSlug: "tinh-hung-yen",
  },
  {
    id: 35,
    name: "Tỉnh Khánh Hòa",
    cityId: "35",
    locationSlug: "tinh-khanh-hoa",
  },
  {
    id: 34,
    name: "Tỉnh Kiên Giang",
    cityId: "34",
    locationSlug: "tinh-kien-giang",
  },
  { id: 36, name: "Tỉnh Kon Tum", cityId: "36", locationSlug: "tinh-kon-tum" },
  {
    id: 39,
    name: "Tỉnh Lai Châu",
    cityId: "39",
    locationSlug: "tinh-lai-chau",
  },
  {
    id: 40,
    name: "Tỉnh Lâm Đồng",
    cityId: "40",
    locationSlug: "tinh-lam-dong",
  },
  {
    id: 41,
    name: "Tỉnh Lạng Sơn",
    cityId: "41",
    locationSlug: "tinh-lang-son",
  },
  { id: 38, name: "Tỉnh Lào Cai", cityId: "38", locationSlug: "tinh-lao-cai" },
  { id: 37, name: "Tỉnh Long An", cityId: "37", locationSlug: "tinh-long-an" },
  {
    id: 44,
    name: "Tỉnh Nam Định",
    cityId: "44",
    locationSlug: "tinh-nam-dinh",
  },
  { id: 42, name: "Tỉnh Nghệ An", cityId: "42", locationSlug: "tinh-nghe-an" },
  {
    id: 43,
    name: "Tỉnh Ninh Bình",
    cityId: "43",
    locationSlug: "tinh-ninh-binh",
  },
  {
    id: 45,
    name: "Tỉnh Ninh Thuận",
    cityId: "45",
    locationSlug: "tinh-ninh-thuan",
  },
  { id: 46, name: "Tỉnh Phú Thọ", cityId: "46", locationSlug: "tinh-phu-tho" },
  { id: 47, name: "Tỉnh Phú Yên", cityId: "47", locationSlug: "tinh-phu-yen" },
  {
    id: 48,
    name: "Tỉnh Quảng Bình",
    cityId: "48",
    locationSlug: "tinh-quang-binh",
  },
  {
    id: 51,
    name: "Tỉnh Quảng Nam",
    cityId: "51",
    locationSlug: "tinh-quang-nam",
  },
  {
    id: 50,
    name: "Tỉnh Quảng Ngãi",
    cityId: "50",
    locationSlug: "tinh-quang-ngai",
  },
  {
    id: 49,
    name: "Tỉnh Quảng Ninh",
    cityId: "49",
    locationSlug: "tinh-quang-ninh",
  },
  {
    id: 52,
    name: "Tỉnh Quảng Trị",
    cityId: "52",
    locationSlug: "tinh-quang-tri",
  },
  {
    id: 54,
    name: "Tỉnh Sóc Trăng",
    cityId: "54",
    locationSlug: "tinh-soc-trang",
  },
  { id: 53, name: "Tỉnh Sơn La", cityId: "53", locationSlug: "tinh-son-la" },
  {
    id: 58,
    name: "Tỉnh Tây Ninh",
    cityId: "58",
    locationSlug: "tinh-tay-ninh",
  },
  {
    id: 55,
    name: "Tỉnh Thái Bình",
    cityId: "55",
    locationSlug: "tinh-thai-binh",
  },
  {
    id: 59,
    name: "Tỉnh Thái Nguyên",
    cityId: "59",
    locationSlug: "tinh-thai-nguyen",
  },
  {
    id: 57,
    name: "Tỉnh Thanh Hóa",
    cityId: "57",
    locationSlug: "tinh-thanh-hoa",
  },
  {
    id: 31,
    name: "Tỉnh Thừa Thiên Huế",
    cityId: "31",
    locationSlug: "tinh-thua-thien-hue",
  },
  {
    id: 56,
    name: "Tỉnh Tiền Giang",
    cityId: "56",
    locationSlug: "tinh-tien-giang",
  },
  {
    id: 61,
    name: "Tỉnh Trà Vinh",
    cityId: "61",
    locationSlug: "tinh-tra-vinh",
  },
  {
    id: 60,
    name: "Tỉnh Tuyên Quang",
    cityId: "60",
    locationSlug: "tinh-tuyen-quang",
  },
  {
    id: 62,
    name: "Tỉnh Vĩnh Long",
    cityId: "62",
    locationSlug: "tinh-vinh-long",
  },
  {
    id: 63,
    name: "Tỉnh Vĩnh Phúc",
    cityId: "63",
    locationSlug: "tinh-vinh-phuc",
  },
  { id: 64, name: "Tỉnh Yên Bái", cityId: "64", locationSlug: "tinh-yen-bai" },
];

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
export function PaymentAddressForm2({ buttonRef, callback }: any) {
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
      email: undefined,
    },
  });
  const { watch, setValue } = form;
  const values = watch();
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("SS");

    const city = cities.find((i) => i.cityId == values.city);
    const district = districts.find((i) => i.districtId == values.district);
    const ward = wards.find((i: WardType) => i.wardId == values.ward);
    const data = {
      phoneNumber: values.phoneNumer,
      shippingAddress: `${values.address}, ${ward?.name}, ${district?.name}, ${city?.name}`,
      receiverName: values.fullName,
    };
    callback(data);
  }
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
  }, [values.district]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 shrink-0 grow-0">
              <UserDuoton className="w-full h-full" />
            </div>
            <span className="text-caption font-medium text-text-primary md:text-body1">
              Địa chỉ nhận hàng
            </span>
          </div>
          <div className="mt-3 grid grid-col s-1 md:grid-cols-2 gap-3">
            <InputRHF
              name="fullName"
              type="text"
              placeholder="Họ và tên người nhận"
            />
            <InputRHF
              name="phoneNumber"
              placeholder="Số điện thoại"
              type="text"
            />
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
            />{" "}
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
            <div className="md:col-span-2">
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
              <InputRHF
                name="address"
                placeholder="Nhập địa chỉ cụ thể"
                type="text"
              />
            </div>
            {/* <div className="md:col-span-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem value="light">{city.name}</SelectItem>
                  ))}

                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="md:col-span-2  ">
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="">
                    <div>
                      <div className="flex-1 w-full bg-white">
                        <div className="flex group flex-col-reverse justify-end box-border rounded-lg border border-solid  hover:border-primary  py-[8px] h-[120px] bg-field-default-active disabled:!bg-field-default-disable border-stroke-default focus-within:border-stroke-focus disabled:!border-field-default-disable  ">
                          <textarea
                            {...field}
                            rows={10}
                            className="peer outline-none resize-none w-full px-4 text-base font-normal text-justify placeholder:text-base placeholder:font-normal placeholder:text-left bg-transparent  disabled:!text-gray-400 placeholder:text-placeholder disabled:placeholder:!text-gray-400 "
                            placeholder="Ví dụ: Hãy gọi cho tôi 15 phút trước khi giao"
                            name="note"
                          />
                          <label className="px-4 text-sm font-medium text-gray-400 peer-disabled:!text-gray-400">
                            Ghi chú (không bắt buộc)
                          </label>
                        </div>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-2">
              <Button ref={buttonRef} className="w-full hidden" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
