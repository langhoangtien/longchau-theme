"use client";
import { HOST_API } from "@/config-global";
import { encodeData, timeFormat } from "@/lib/common";
import React, { useEffect, useState } from "react";
import { ToolTipCustom } from "../ui/tooltip";
import Readmore from "../icons/readmore";
import { RotateCw } from "lucide-react";
import HelpfulIcon from "../icons/helpful-icon";
import StarIcon from "../icons/star-icon";
function getInitials(fullName: string) {
  const words = fullName.split(" ");

  if (words.length === 0) {
    return "";
  }

  const firstInitial = words[0].charAt(0).toUpperCase();

  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}

export const CommentItem = ({
  name,
  content,
  id,
  createdAt,
  childNumber,
  childrens,
  handleReply,
  rating,
}: {
  name: string;
  content: string;
  id: string;
  createdAt: string;
  childNumber: number;
  childrens: any;
  handleReply: ({
    fullName,
    parentId,
  }: {
    fullName: string;
    parentId: string;
  }) => void;
  rating: number;
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
      `${HOST_API}/comments?parentId=${id}&limit=${
        items.length + 5
      }&skip=0&sort=${encodeData({ orderBy: "createdAt", order: "1" })}`
    );
    const response = await responseJson.json();
    setLoading(false);
    console.log(response);

    setItems(response.items);
  };

  const handleReplyComment = () => {
    handleReply({ fullName: name, parentId: id });
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
            <p className=" mb-[8px] flex flex-col text-gray-800/80 items-baseline font-bold capitalize md:inline-block">
              {name}
            </p>
            {!!rating && (
              <div className="score mt-[2px] flex items-center">
                <span className="text-body2 md:text-body1 text-text-secondary mr-[6px] font-normal">
                  {rating}
                </span>
                <StarIcon className="h-6 w-4 text-orange-400" />
              </div>
            )}

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
                <span
                  onClick={handleReplyComment}
                  className="md:text-base text-blue-600 cursor-pointer font-medium"
                >
                  Trả lời
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListReply
        handleReply={handleReply}
        parentId={id}
        childNumber={childNumber}
        items={items}
      />
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

const ListReply = ({ childNumber, items, handleReply, parentId }: any) => {
  if (!childNumber) return null;

  return (
    <ul>
      {items.map((item: any, index: number) => {
        const { raw, time } = timeFormat(item.createdAt);

        return (
          <ReplyItem
            handleReply={handleReply}
            key={item._id}
            name={item.fullName}
            time={time}
            raw={raw}
            last={index === items.length - 1}
            content={item.content}
            parentId={parentId}
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
  handleReply,
  parentId,
}: {
  last?: boolean;
  name: string;
  content: React.ReactNode;
  time: string;
  raw: string;
  handleReply: any;
  parentId: string;
}) => {
  const handleReplyComment = () => {
    handleReply({ fullName: name, parentId });
  };
  return (
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
                <span
                  onClick={handleReplyComment}
                  className="text-base text-blue-600 cursor-pointer font-medium"
                >
                  Trả lời
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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
