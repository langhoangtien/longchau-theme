"use client";
import { HOST_API } from "@/config-global";
import { encodeData, timeFormat } from "@/lib/common";
import React, { useEffect, useState } from "react";
import { ToolTipCustom } from "../ui/tooltip";
import Readmore from "../icons/readmore";

import { ButtonSelect } from "../ui/button-select";
import { RotateCw } from "lucide-react";
import HelpfulIcon from "../icons/helpful-icon";
function getInitials(fullName: string) {
  const words = fullName.split(" ");

  if (words.length === 0) {
    return "";
  }

  const firstInitial = words[0].charAt(0).toUpperCase();

  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}
export default function ProductDetailComment({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [star, setStar] = useState(0);
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const filter: { rating?: number } = {};
        if (star) filter.rating = star;
        const responseJson = await fetch(
          `${HOST_API}/comments?productId=${id}&limit=5&skip=${
            page * 5 - 5
          }&filter=${encodeData(filter)}`
        );
        const response = await responseJson.json();
        setReviews(reviews.concat(response.items));
        setCount(response.count);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, reload, page, star]);
  const handleChangePage = (page: number) => {
    setPage(page);
    setReviews([]);
  };
  const handleChangStar = (value: number) => {
    setStar(value);
    setPage(1);
    setReviews([]);
  };
  return (
    <div>
      <div className="my-[12px] md:my-[16px]">
        <div className="flex flex-col justify-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
          <p className="md:te text-base ">Lọc theo:</p>
          <div className="flex flex-wrap gap-2">
            {[5, 4, 3, 2, 1].map((value) => (
              <ButtonSelect
                selected={value === star}
                onClick={() => handleChangStar(value)}
                key={value}
                className="h-8"
              >
                {value} sao
              </ButtonSelect>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ul>
          {reviews.map((review: any) => (
            <CommentItem
              childNumber={review.childNumber || 0}
              key={review._id}
              name={review.fullName}
              createdAt={review.createdAt}
              id={review._id}
              content={review.content}
              childrens={review.childrens}
            />
          ))}
        </ul>
      </div>

      <div className="py-4 text-center">
        {loading && (
          <div className="inline-flex cursor-pointer items-center justify-center">
            <RotateCw className="h-4 w-4 mr-1 animate-spin" />

            <span className="text-sm font-medium">Đang tải ...</span>
          </div>
        )}
        {!loading && count > page * 5 && (
          <div
            onClick={() => setPage(page + 1)}
            className="inline-flex cursor-pointer items-center justify-center"
          >
            <Readmore className="w-4 h-4 mr-1" />

            <span className="text-sm font-medium">
              Xem thêm {count - page * 5} bình luận
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
const CommentItem = ({
  name,
  content,
  id,
  createdAt,
  childNumber,
  childrens,
}: {
  name: string;
  content: string;
  id: string;
  createdAt: string;
  childNumber: number;
  childrens: any;
}) => {
  const { raw, time } = timeFormat(createdAt);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setItems(childrens);
  }, [childrens]);
  const handleLoadMoreComment = async () => {
    setLoading(true);
    const responseJson = await fetch(
      `${HOST_API}/comments?parentId=${id}&limit=${items.length + 5}&skip=${
        items.length
      }`
    );
    const response = await responseJson.json();
    const newItems = items.concat(response.items);
    setLoading(false);
    setItems(newItems);
  };
  return (
    <li>
      <div className="lc-comment__item relative pt-5">
        <div className={childNumber ? "comment_comment-branch__b5nbp" : ""} />
        <div className="comment-block flex gap-[12px]">
          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
            <div className="bg-gray-400 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
              {getInitials(name)}
            </div>
          </div>
          <div className="content flex-1">
            <p className=" mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
              {name}
            </p>
            <div className="user-comment">
              <span
                className="md:text-base text-sm font-normal"
                style={{ wordBreak: "break-word" }}
              >
                {content}
              </span>
            </div>
            <div className="comment-utils mt-[8px]">
              <div className="flex items-center">
                <span className="text-gray-500 font-medium">
                  <ToolTipCustom time={time} raw={raw} />
                </span>
                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                <p className="flex cursor-pointer items-center">
                  <HelpfulIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 ml-1 font-medium">
                    Hữu ích
                  </span>
                </p>
                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                <span className="md:text-base text-blue-600 cursor-pointer font-medium">
                  Trả lời
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListReply childNumber={childNumber} items={items} />
      {childNumber ? (
        <ReadmoreReply
          number={childNumber - items.length}
          handleLoadMoreComment={handleLoadMoreComment}
          loading={loading}
        />
      ) : null}
    </li>
  );
};

const ListReply = ({ childNumber, items }: any) => {
  if (!childNumber) return null;

  return (
    <ul>
      {items.map((item: any, index: number) => {
        const { raw, time } = timeFormat(item.createdAt);

        return (
          <ReplyItem
            key={item._id}
            name={item.fullName}
            time={time}
            raw={raw}
            last={index === items.length - 1}
            content={item.content}
          />
        );
      })}
    </ul>
  );
};
const ReplyItem = ({
  last = false,
  name,
  content,
  time,
  raw,
}: {
  last?: boolean;
  name: string;
  content: React.ReactNode;
  time: string;
  raw: string;
}) => (
  <li>
    <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
      <div className={last ? "" : "comment_comment-branch__b5nbp"} />
      <div className="comment_reply-branch__NKquM" />
      <div className="comment-block flex gap-[12px]">
        <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
          <div className="bg-blue-600 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
            {getInitials("A D")}
          </div>
        </div>
        <div className="content flex-1">
          <p className=" mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
            {name}
            <span className="text-sm bg-blue-100 text-blue-600 md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
              Admin
            </span>
          </p>
          <div className="user-comment">
            <span
              className="md:text-label1 text-label2 font-normal"
              style={{ wordBreak: "break-word" }}
            >
              {content}
            </span>
          </div>
          <div className="comment-utils mt-[8px]">
            <div className="flex items-center">
              <span className="text-gray-500  font-medium">
                <ToolTipCustom time={time} raw={raw}></ToolTipCustom>
              </span>
              <div className="bullet-dot  mx-[8px] h-[4px] w-[4px] rounded-full" />
              <p className="flex cursor-pointer items-center">
                <HelpfulIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-500 ml-1 font-medium">
                  Hữu ích
                </span>
              </p>
              <div className="bullet-dot  mx-[8px] h-[4px] w-[4px] rounded-full" />
              <span className="text-base text-blue-600 cursor-pointer font-medium">
                Trả lời
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const ReadmoreReply = ({ loading, number, handleLoadMoreComment }: any) => {
  if (number <= 0) return null;
  return (
    <div className="ml-[30px] mt-3 py-2 px-3 pl-16 md:ml-[50px]">
      {loading && (
        <div className="inline-flex cursor-pointer items-center justify-center text-gray-600">
          <RotateCw className="h-4 w-4 mr-1 animate-spin" />
          <span className="text-sm font-medium">Đang tải ...</span>
        </div>
      )}
      {!loading && number > 0 && (
        <div
          onClick={handleLoadMoreComment}
          className="inline-flex cursor-pointer items-center justify-center text-gray-600"
        >
          <Readmore className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">
            Xem thêm {number} bình luận
          </span>
        </div>
      )}
    </div>
  );
};
