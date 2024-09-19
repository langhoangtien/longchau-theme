export enum PAYMENT_METHOD {
  COD = "cod",
  QR = "qr",
  VNPAY_ATM = "vnpay_atm",
  CARD = "card",
  ZALOPAY = "zalopay",
  MOMO = "momo",
  VNPAY = "vnpay",
}
export const paymentMethods = [
  {
    method: PAYMENT_METHOD.COD,
    label: " Thanh toán tiền mặt khi nhận hàng",
    image: "/icons/png/cod.webp",
    disabled: false,
  },
  {
    method: PAYMENT_METHOD.QR,
    label: "Thanh toán bằng chuyển khoản (QR Code)",
    image: "/icons/png/qr.webp",
    disabled: false,
  },
  {
    method: PAYMENT_METHOD.VNPAY_ATM,
    label: "Thanh toán bằng thẻ ATM nội địa và tài khoản ngân hàng",
    image: "/icons/png/vnpay_atm.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.CARD,
    label:
      "Thanh toán bằng thẻ quốc tế Visa, Master, JCB, AMEX (GooglePay, ApplePay)",
    image: "/icons/png/card.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.ZALOPAY,
    label: "Thanh toán bằng ZaloPay",
    image: "/icons/png/zalopay.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.MOMO,
    label: "Thanh toán bằng MoMo",
    image: "/icons/png/momo.webp",
    disabled: true,
  },
  {
    method: PAYMENT_METHOD.VNPAY,
    label: "Thanh toán bằng VNPAY",
    image: "/icons/png/vnpay.webp",
    disabled: true,
  },
];

export const cities = [
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
