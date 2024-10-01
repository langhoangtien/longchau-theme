import Image from "next/image";
import { Button } from "../ui/button";

export default function FilterEmpty() {
  return (
    <div className=" mx-auto flex flex-col items-center pb-7 md:pt-[90px]">
      <Image
        src="/icons/svg/illustration-not-found.svg"
        alt=""
        width={300}
        height={200}
      />
      <div className="mt-3 text-center">
        <p className="md:text-lg text-base font-semibold ">
          Ôi! Không tìm thấy sản phẩm nào phù hợp
        </p>
        <div className="text-sm md:text-base font-normal  m-1 md:px-0">
          <p>Hãy thử lại bằng cách thay đổi điều kiện lọc</p>
          <p>hoặc</p>
        </div>
        <Button> Xóa tất cả bộ lọc</Button>
      </div>
    </div>
  );
}
