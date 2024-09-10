import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
export default function SheetDemo({ open, setOpen }: any) {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              viewBox="0 0 786 200"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              enable-background="new 0 0 786 200"
              height="32"
            >
              <path
                fill="#fff"
                d=" M129.948273,174.999481   C96.628548,174.999481 63.800434,175.003464 30.972317,174.997604   C17.140459,174.995132 9.016798,166.870041 9.007830,152.949768   C8.985712,118.621895 8.985285,84.294006 9.008053,49.966137   C9.017264,36.077068 17.144875,28.004286 31.035561,28.002216   C65.363441,27.997107 99.691315,27.996679 134.019196,28.002428   C147.878601,28.004751 155.982483,36.105854 155.992081,50.047409   C156.014908,83.208794 155.509247,116.380547 156.208847,149.527176   C156.552307,165.800735 148.080093,176.532761 129.948273,174.999481  M36.874695,36.383167   C36.136936,47.005287 35.153473,57.617180 34.710911,68.251587   C33.687099,92.852829 32.445923,117.460800 32.231529,142.074219   C32.096519,157.573807 39.064461,165.709778 54.330288,169.134155   C62.367809,170.937119 70.865173,172.114212 79.033829,171.610489   C95.759377,170.579102 112.428246,168.420654 129.068604,166.316299   C135.873184,165.455780 142.543320,163.531906 149.582886,162.025833   C147.392776,152.387985 145.422180,143.716187 143.379776,134.728363   C141.078003,135.308624 139.320389,135.686005 137.601715,136.194946   C116.538620,142.432312 94.932465,144.806732 73.064674,144.915802   C61.959236,144.971222 59.073483,141.932388 59.164524,130.928833   C59.234707,122.446129 59.545166,113.950333 60.159981,105.490242   C61.570221,86.084808 63.220482,66.696724 64.800095,47.303776   C65.143471,43.088169 65.599197,38.881714 66.026146,34.431664   C57.090744,33.553352 48.825375,32.833420 40.586666,31.882507   C37.570992,31.534437 36.681675,32.777748 36.874695,36.383167  z"
                opacity="1.000000"
                stroke="none"
              ></path>
              <path
                fill="#000"
                d=" M403.274780,82.910690   C412.190826,69.344719 435.778809,63.869442 447.419891,89.025764   C448.300690,87.985519 449.135132,87.112785 449.842804,86.147163   C458.167572,74.787560 469.132507,69.156845 483.188751,72.311577   C496.123108,75.214500 502.219391,85.150787 504.866272,97.139938   C506.793488,105.869446 508.224091,114.845512 508.554230,123.760612   C509.138885,139.547104 508.718140,155.370834 508.718140,171.507721   C499.219788,171.507721 490.333130,171.507721 480.896210,171.507721   C480.896210,163.880325 480.996643,156.275833 480.873199,148.674973   C480.675842,136.522644 480.432220,124.368835 479.972748,112.224564   C479.861603,109.285973 479.118744,106.284004 478.165039,103.481804   C475.812653,96.569748 469.452087,95.353706 464.954529,101.208427   C462.163300,104.841965 459.558197,109.017441 458.334473,113.362274   C456.519226,119.807388 455.338043,126.592194 455.075989,133.279007   C454.581207,145.905563 454.933075,158.565292 454.933075,171.524414   C446.061157,171.524414 437.342560,171.524414 427.998169,171.524414   C427.998169,164.319183 428.312714,157.191986 427.930328,150.102402   C427.214050,136.821472 426.203857,123.552773 425.051727,110.301964   C424.814087,107.568687 423.723969,104.787811 422.499969,102.286674   C419.725983,96.618484 413.898224,95.836136 410.126953,100.942993   C405.451538,107.274178 402.056976,114.385841 402.266632,122.533180   C402.686279,138.842865 403.328552,155.146820 403.895966,171.957672   C394.904724,171.957672 385.861389,171.957672 376.168884,171.957672   C376.168884,139.238266 376.168884,106.366570 376.168884,73.172791   C384.929779,73.172791 393.668945,73.172791 402.648804,73.172791   C402.648804,76.152321 402.648804,79.103661 402.933655,82.203369   C403.035950,82.264481 402.853455,82.177216 402.670929,82.089951   C402.872223,82.363525 403.073517,82.637108 403.274780,82.910690  z"
                opacity="1.000000"
                stroke="none"
              ></path>
              <path
                fill="#000"
                d=" M323.348938,170.566299   C297.678284,178.151489 267.980408,162.987335 266.972321,127.903542   C266.585571,114.444115 268.498138,101.538940 276.997375,90.655525   C291.014679,72.706139 309.772949,68.809013 331.112244,73.426308   C331.900024,73.596779 332.688293,73.764809 333.546722,73.949081   C334.525452,58.353584 335.491852,42.954514 336.477936,27.241852   C345.673523,27.853706 354.261627,28.425140 363.448425,29.036409   C359.209869,75.830650 358.586517,122.464348 360.829590,169.508179   C351.676880,170.247757 342.771759,170.967331 333.548004,171.712646   C333.283295,169.831787 333.039642,168.100616 332.785950,166.297958   C329.707001,167.683792 326.705536,169.034744 323.348938,170.566299  M305.080627,100.262657   C295.614258,105.395294 292.575073,113.744110 292.682739,124.006065   C292.776001,132.892609 296.209045,139.572906 304.421051,143.099274   C312.860992,146.723511 320.741913,144.479736 327.900940,139.390991   C331.118256,137.104065 332.820099,134.086227 332.594055,129.666260   C332.229309,122.533737 332.504089,115.347725 332.903229,108.206367   C333.081421,105.018066 331.761902,103.300598 329.280243,101.880898   C321.740509,97.567589 313.940521,96.822273 305.080627,100.262657  z"
                opacity="1.000000"
                stroke="none"
              ></path>
              <path
                fill="#000"
                d=" M647.911926,92.943695   C664.703491,73.995560 685.577148,70.084999 709.262573,75.355103   C709.745056,73.138565 710.153625,71.261360 710.682373,68.832100   C719.562561,70.344093 728.334595,71.837662 737.145813,73.337906   C735.897034,82.278259 734.155396,91.029823 733.571655,99.857948   C732.827209,111.117882 732.464294,122.465439 732.987854,133.726364   C733.381531,142.195389 736.625977,144.552124 745.478333,145.328690   C744.232605,154.312347 742.989563,163.276245 741.668823,172.800720   C729.997498,173.402298 720.419922,169.498337 713.167786,159.986404   C700.969910,171.891617 686.200073,174.630096 670.540039,171.509949   C649.323425,167.282700 635.293091,147.442871 636.294312,125.039925   C636.822693,113.217140 640.233948,102.520889 647.911926,92.943695  M668.728882,141.855850   C681.722778,150.900101 700.354065,146.040024 704.404785,131.179733   C706.951416,121.837265 705.730957,111.467957 706.194153,101.692711   C693.647339,97.872009 685.247009,98.346626 676.247620,102.807632   C660.275269,110.725189 658.631287,132.526215 668.728882,141.855850  z"
                opacity="1.000000"
                stroke="none"
              ></path>
              <path
                fill="#000"
                d=" M230.035080,73.199547   C236.507065,73.193436 242.484207,73.193436 248.474274,73.193436   C247.195648,86.773132 245.775940,100.252213 244.715134,113.759468   C244.142395,121.052032 243.969772,128.393600 243.997406,135.711624   C244.038712,146.651230 246.878235,148.565643 256.554932,144.867310   C256.554932,153.149521 256.624969,161.497665 256.430298,169.839630   C256.413605,170.555191 254.703094,171.713699 253.672241,171.848877   C242.806717,173.273575 232.581512,172.578934 225.677704,162.027069   C217.716553,169.397430 208.613281,173.072098 197.974472,173.029785   C176.965500,172.946228 164.847122,163.619476 162.360138,142.579193   C160.398880,125.986656 160.869125,109.093407 160.543991,92.328201   C160.434814,86.698067 161.202087,81.050941 161.607529,74.815224   C171.291641,74.198524 180.840683,73.590424 190.098038,73.000900   C189.032928,87.315224 187.598236,101.310349 187.110336,115.338394   C186.858765,122.571594 188.029312,129.900757 189.059921,137.114746   C189.685699,141.494949 191.663681,145.876266 196.568237,146.678299   C201.705948,147.518448 205.941376,144.876144 208.940750,140.707993   C214.375366,133.155685 216.117691,124.276695 216.913010,115.334129   C218.135010,101.593979 218.722794,87.797424 219.630661,73.205658   C222.636444,73.205658 226.088333,73.205658 230.035080,73.199547  z"
                opacity="1.000000"
                stroke="none"
              ></path>
              <path
                fill="#000"
                opacity="1.000000"
                stroke="none"
                d=" M568.256348,54.317467   C569.086670,46.273876 569.871643,38.690090 570.663635,31.038597   C580.444702,31.038597 589.744019,31.038597 599.266052,31.038597   C598.000244,43.717819 596.083374,56.166668 595.659973,68.666107   C594.939453,89.940063 594.988342,111.247246 595.165039,132.536728   C595.191589,135.733307 597.661987,138.909622 599.001831,142.095306   C601.891418,140.143875 604.910645,138.353775 607.619812,136.177704   C609.132507,134.962692 610.130249,133.106537 611.691833,131.116455   C616.065979,139.767029 620.330139,148.123505 624.471741,156.540253   C624.792419,157.191849 624.528015,158.457336 624.071777,159.116592   C616.588562,169.930099 600.066406,175.422241 587.485474,171.457306   C577.476257,168.302841 572.375610,160.568344 570.132996,151.227325   C567.972839,142.229843 566.199585,132.867264 566.225891,123.670723   C566.291687,100.704536 567.475647,77.741547 568.256348,54.317467  z"
              ></path>
              <path
                fill="#000"
                opacity="1.000000"
                stroke="none"
                d=" M549.385010,166.348236   C549.464111,168.079376 549.520996,169.363190 549.589783,170.915100   C540.281555,170.915100 531.355652,170.915100 521.701294,170.915100   C521.701294,138.402893 521.701294,105.889587 521.701294,73.102058   C531.220154,73.102058 540.118042,73.102058 549.362732,73.102058   C549.362732,104.087730 549.362732,134.994324 549.385010,166.348236  z"
              ></path>
              <path
                fill="#000"
                opacity="1.000000"
                stroke="none"
                d=" M532.053894,56.845768   C528.748047,56.845768 525.931580,56.845768 522.725952,56.845768   C522.725952,47.804005 522.725952,38.966743 522.725952,30.012939   C532.686279,30.012939 542.059998,30.012939 551.513916,30.012939   C550.897888,39.039654 550.313110,47.607609 549.682617,56.845768   C544.038818,56.845768 538.291077,56.845768 532.053894,56.845768  z"
              ></path>
              <path
                fill="#135CB7"
                opacity="1.000000"
                stroke="none"
                d=" M36.895142,35.924377   C36.681675,32.777748 37.570992,31.534437 40.586666,31.882507   C48.825375,32.833420 57.090744,33.553352 66.026146,34.431664   C65.599197,38.881714 65.143471,43.088169 64.800095,47.303776   C63.220482,66.696724 61.570221,86.084808 60.159981,105.490242   C59.545166,113.950333 59.234707,122.446129 59.164524,130.928833   C59.073483,141.932388 61.959236,144.971222 73.064674,144.915802   C94.932465,144.806732 116.538620,142.432312 137.601715,136.194946   C139.320389,135.686005 141.078003,135.308624 143.379776,134.728363   C145.422180,143.716187 147.392776,152.387985 149.582886,162.025833   C142.543320,163.531906 135.873184,165.455780 129.068604,166.316299   C112.428246,168.420654 95.759377,170.579102 79.033829,171.610489   C70.865173,172.114212 62.367809,170.937119 54.330288,169.134155   C39.064461,165.709778 32.096519,157.573807 32.231529,142.074219   C32.445923,117.460800 33.687099,92.852829 34.710911,68.251587   C35.153473,57.617180 36.136936,47.005287 36.895142,35.924377  z"
              ></path>
            </svg>
          </span>
          <SheetClose>
            <button
              type="button"
              className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
              tabIndex={-1}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.21263 4.3871L4.29582 4.29289C4.65631 3.93241 5.22354 3.90468 5.61583 4.2097L5.71004 4.29289L12.0029 10.585L18.2958 4.29289C18.6863 3.90237 19.3195 3.90237 19.71 4.29289C20.1006 4.68342 20.1006 5.31658 19.71 5.70711L13.4179 12L19.71 18.2929C20.0705 18.6534 20.0982 19.2206 19.7932 19.6129L19.71 19.7071C19.3496 20.0676 18.7823 20.0953 18.39 19.7903L18.2958 19.7071L12.0029 13.415L5.71004 19.7071C5.31951 20.0976 4.68635 20.0976 4.29582 19.7071C3.9053 19.3166 3.9053 18.6834 4.29582 18.2929L10.5879 12L4.29582 5.70711C3.93534 5.34662 3.90761 4.77939 4.21263 4.3871L4.29582 4.29289L4.21263 4.3871Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </SheetClose>
        </div>

        <div className="py-3 mt-10 px-4 bg-blue-500">
          <div className="text-sm font-medium text-white">
            Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.
          </div>
          <div className="mt-3 py-4 flex items-center gap-2 [&>*]:shrink-0">
            <Button variant="outline"> Đăng nhập</Button>
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
                        href="/thuc-pham-chuc-nang/vitamin-khoang-chat"
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
