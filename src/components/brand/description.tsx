"use client";
import { useState } from "react";

export default function Description({ description }: { description: string }) {
  const [hide, setHide] = useState(true);
  if (hide)
    return (
      <div
        className="ant-typography ant-typography-ellipsis text-gray-10 mt-[4px] !mb-0 font-[inherit] md:mt-[8px] css-10ed4xt"
        aria-label={description}
      >
        <span aria-hidden="true">{description.substring(0, 300)}</span>
        <span aria-hidden="true">...</span>
        <a className="ant-typography-expand" aria-label="Expand">
          {description.length > 300 ? (
            <span
              onClick={() => setHide(false)}
              className="text-sm text-gray-700 font-semibold cursor-pointer"
            >
              Xem thêm
            </span>
          ) : null}
        </a>
      </div>
    );
  return (
    <div
      className="ant-typography ant-typography-ellipsis text-gray-10 mt-[4px] !mb-0 font-[inherit] md:mt-[8px] css-10ed4xt"
      aria-label={description}
    >
      <span aria-hidden="true">{description}</span>
    </div>
  );
}
