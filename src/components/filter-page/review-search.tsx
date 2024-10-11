import Image from "next/image";
import { Button } from "../ui/button";

export default function ReviewSearch() {
  return (
    <div className="mt-2 md:mt-3 grid grid-cols-2 gap-2 px-4 md:grid-cols-5 md:gap-5 md:px-0">
      <div className="flex w-full gap-2 rounded-xl bg-white px-3 py-2 md:gap-3 omd:px-4 md:py-4 col-span-2 col-start-1 md:col-start-2">
        <div className="h-9 w-9 shrink-0 md:h-11 md:w-11">
          <Image
            alt="search-feedback-icon"
            loading="lazy"
            width={36}
            height={36}
            className="h-full w-full"
            src="/icons/svg/feedback.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex-auto">
          <p className="md:text-base text-sm y mb-1.5 font-medium md:mb-2">
            Bạn có hài lòng với kết quả tìm kiếm này không?
          </p>
          <div className="flex gap-2 md:gap-4">
            <Button
              className="bg-blue-50 text-primary w-full"
              variant="secondary"
            >
              {" "}
              Có
            </Button>
            <Button
              className="bg-blue-50 text-primary w-full"
              variant="secondary"
            >
              {" "}
              Không
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
