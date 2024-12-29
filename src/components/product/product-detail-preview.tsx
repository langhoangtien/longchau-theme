"use client";
import { CommentItem } from "./product-detail-comment";
import ProductReviewStar from "./product-review-star";
import StarIcon from "../icons/star-icon";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Form, InputRHF, TextareaRHF } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HOST_API } from "@/config-global";
import { encodeData } from "@/lib/common";
import React, { useEffect, useState } from "react";
import Readmore from "../icons/readmore";
import { ButtonSelect } from "../ui/button-select";
import { RotateCw, Star } from "lucide-react";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
type CommentItemType = {
  _id: string;
  fullName: string;
  content: string;
  createdAt: string;
  childNumber: number;
  childrens: CommentItemType[];
  parentId: string | null;
};
type ParentCommentType = { parentId: string; fullName: string };
export default function ProductDetailPreview({
  id,
  totalRating,
  ratingAverage,
  ratingsCalc,
}: {
  id: string;
  totalRating: number;
  ratingAverage: number;
  ratingsCalc: any[];
}) {
  const [open, setOpen] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [openSucces, setOpenSucces] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [star, setStar] = useState(0);
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<CommentItemType[]>([]);
  const [parent, setParent] = useState<ParentCommentType | null>(null);

  const [lastItem, setLastItem] = useState<CommentItemType | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const filter: { rating?: number } = {};
        if (star) filter.rating = star;
        let url = `${HOST_API}/comments?productId=${id}&limit=5&skip=0&filter=${encodeData(
          filter
        )}`;
        if (lastItem)
          url += `&createdAt=${lastItem.createdAt}&ignoreId=${lastItem._id}`;
        const responseJson = await fetch(url);
        const response = await responseJson.json();
        setReviews(reviews.concat(response.items));
        setLastItem(response.items[response.items.length - 1]);
        setCount(response.count);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, page, star]);

  const handleShowComment = (comment: CommentItemType) => {
    setReviews([comment, ...reviews]);
  };
  const handleShowReply = (comment: CommentItemType) => {
    const newComments = reviews.map((item) => {
      if (item._id === comment.parentId) {
        return {
          ...item,
          childNumber: item.childNumber + 1,
          childrens: [...item.childrens, comment],
        };
      }
      return item;
    });
    setReviews(newComments);
  };
  const handleAddComment = () => {
    setParent(null);
    setOpen(true);
  };
  const handleChangStar = (value: number) => {
    setStar(value);
    setPage(1);
    setLastItem(null);
    setReviews([]);
  };
  const handleSuccess = () => {
    setOpenSucces(true);
  };
  const handleReply = (value: ParentCommentType) => {
    setParent(value);
    setOpenReply(true);
  };

  return (
    <div
      data-lcpr="prr-id-product-detail-preview"
      id="product-detail-preview"
      className="bg-white p-4 md:rounded-xl"
    >
      <div className="lc-preview">
        <div className="mb-4 border-b pb-4">
          <div className="title">
            <h2 className="mr-1 inline-block font-bold">
              Đánh giá sản phẩm{" "}
              <span className="font-normal text-gray-700/80">
                ({totalRating} đánh giá)
              </span>
            </h2>
          </div>
        </div>
        <div className="mb-4 border-b pb-4 md:flex">
          <div className="md:mr-8">
            <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
              <div className="mb-2">
                <p className="text-text-secondary  font-semibold">Trung bình</p>
                <p className="md:text-3xl text-2xl  flex items-center font-semibold">
                  {ratingAverage}
                  <StarIcon className="ml-2 w-6 h-6 text-orange-400" />
                </p>
              </div>
              <Button onClick={handleAddComment} className="h-10">
                {" "}
                Viết đánh giá
              </Button>
            </div>
          </div>
          <ProductReviewStar ratingsCalc={ratingsCalc} />
        </div>
        <div>
          <div className="my-[12px] md:my-[16px]">
            <div className="flex flex-col md:flex-row justify-between gap-[8px]  md:items-center md:gap-[16px]">
              <p className="md:text-lg font-semibold ">
                {totalRating} Bình luận
              </p>
              <div className="flex flex-wrap gap-2">
                {[0, 5, 4, 3, 2, 1].map((value) => (
                  <span
                    onClick={() => handleChangStar(value)}
                    key={value}
                    className={`inline-flex text-sm justify-center items-center pl-3 pr-3 rounded-md border border-gray-300 relative font-medium  overflow-hidden cursor-pointer bg-white h-9  transition-all duration-300 ${
                      value === star ? "border border-primary text-primary" : ""
                    } `}
                  >
                    {value ? value : "Tất cả"} <Star className="ml-1 h-3 w-3" />
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2 flex-col md:flex-row items-end md:mt-4 md:text-center">
              <div className="flex flex-col w-full md:flex-grow-1">
                <Textarea placeholder="Nhập nội dung bình luận" />
              </div>

              <Button>Gửi bình luận </Button>
            </div>
          </div>
          <div className="block border-gray-300 border-b mb-4 mt-3 h-full"></div>
          <div>
            <ul>
              {reviews.map((review: any) => (
                <CommentItem
                  childNumber={review.childNumber || 0}
                  key={review._id}
                  name={
                    review.user
                      ? review.user.firstName + " " + review.user.lastName
                      : review.fullName
                  }
                  createdAt={review.createdAt}
                  id={review._id}
                  content={review.content}
                  childrens={review.childrens}
                  handleReply={handleReply}
                  rating={review.rating}
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
            {!loading && count > 5 && (
              <div
                onClick={() => setPage(page + 1)}
                className="inline-flex cursor-pointer items-center justify-center"
              >
                <Readmore className="w-4 h-4 mr-1" />

                <span className="text-sm font-medium">
                  Xem thêm {count - 5} bình luận
                </span>
              </div>
            )}
          </div>
          {!loading && count === 0 && page == 1 && (
            <div className="py-4 text-center">
              <Image
                alt=""
                loading="lazy"
                width={203}
                height={103}
                decoding="async"
                data-nimg={1}
                className="mx-auto"
                src="/icons/png/empty-rating.png"
                style={{ color: "transparent" }}
              />
              <p className="text-sm mt-4">Chưa có bình luận nào</p>
            </div>
          )}
        </div>
        <ReviewFormDialog
          open={open}
          setOpen={setOpen}
          hanldeSuccess={handleSuccess}
          productId={id}
          handleShowComment={handleShowComment}
          parent={parent}
        />{" "}
        <ReplyFormDialog
          open={openReply}
          setOpen={setOpenReply}
          hanldeSuccess={handleSuccess}
          productId={id}
          handleShowComment={handleShowReply}
          parent={parent}
        />
        <DialogSuccess open={openSucces} setOpen={setOpenSucces} />
      </div>
    </div>
  );
}
const STAR_MESSAGES = [
  "Thất vọng",
  "Không hài lòng",
  "Bình thường",
  "Tốt",
  "Tuyệt vời",
];

const ReviewFormDialog = ({
  open,
  setOpen,
  productId,
  hanldeSuccess,
  handleShowComment,
}: any) => {
  const [rating, setRating] = useState(5);
  const formSchema = z.object({
    phoneNumer: z
      .string()
      .regex(
        /^(?:\+84|84|0)(3|5|7|8|9|1[2689])[0-9]{8}$/,
        "Số điện thoại không hợp lệ"
      ),
    fullName: z.string().min(2, {
      message: "Thông tin bắt buộc. Vui lòng nhập đầy đủ.",
    }),
    email: z.union([z.literal(""), z.string().email()]).optional(),
    content: z.string().min(5, {
      message: "Nội dung đánh giá quá ngắn",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumer: "",
      fullName: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (data: any) => {
    const cloneData = { ...data, rating, productId };
    try {
      const reponseJson = await fetch(`${HOST_API}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cloneData),
      });
      const response = await reponseJson.json();
      setOpen(false);
      form.reset();
      handleShowComment(response);
      hanldeSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog onOpenChange={(value) => setOpen(value)} open={open}>
      <DialogContent
        className="p-4 bg-white w-full  px-4 md:w-[650px] md:rounded-xl md:px-[53px] md:h-[620px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="text-center text-xl border-b h-12">
          <span>Trả lời bình luận </span>
        </DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mb-4">
              <div className="rating">
                <ul className="flex justify-center product-review-star ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li
                      className={
                        rating > index ? "text-orange-400" : "text-gray-200"
                      }
                      onClick={() => setRating(index + 1)}
                      key={index}
                    >
                      <StarIcon className="w-8 h-8 cursor-pointer" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-orange-400 text-base mt-2 text-center">
                {STAR_MESSAGES[rating - 1]}
              </div>
            </div>

            <div className="mt-5 grid gap-2 grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <InputRHF placeholder="Nhập họ tên" name="fullName" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputRHF placeholder="Nhập số điện thoại" name="phoneNumer" />
              </div>
              <div className="col-span-2">
                <InputRHF
                  placeholder="Nhập email (không bắt buộc)"
                  name="email"
                  type="text"
                />
              </div>
              <div className="col-span-2">
                <TextareaRHF
                  name="content"
                  // label="Nội dung đánh giá"
                  placeholder="Nhập nội dung đánh giá"
                  rows={4}
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-4">
              Gửi
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
const ReplyFormDialog = ({
  open,
  setOpen,
  productId,
  hanldeSuccess,
  handleShowComment,
  parent,
}: any) => {
  const formSchema = z.object({
    phoneNumer: z
      .string()
      .regex(
        /^(?:\+84|84|0)(3|5|7|8|9|1[2689])[0-9]{8}$/,
        "Số điện thoại không hợp lệ"
      ),
    fullName: z.string().min(2, {
      message: "Thông tin bắt buộc. Vui lòng nhập đầy đủ.",
    }),
    email: z.union([z.literal(""), z.string().email()]).optional(),
    content: z.string().min(5, {
      message: "Nội dung đánh giá quá ngắn",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumer: "",
      fullName: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (data: any) => {
    const cloneData = { ...data, productId, parentId: parent?.parentId };
    try {
      const reponseJson = await fetch(`${HOST_API}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cloneData),
      });
      const response = await reponseJson.json();
      setOpen(false);
      form.reset();
      handleShowComment(response);
      hanldeSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog onOpenChange={(value) => setOpen(value)} open={open}>
      <DialogContent
        className="p-4 bg-white w-full  px-4 md:w-[650px] md:rounded-xl md:px-[53px] md:h-[520px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="text-center text-xl border-b h-12">
          <span>
            Trả lời &quot;
            <span className="text-primary">{parent?.fullName}</span>&quot;
          </span>
        </DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mt-1 grid gap-2 grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <InputRHF placeholder="Nhập họ tên" name="fullName" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputRHF placeholder="Nhập số điện thoại" name="phoneNumer" />
              </div>
              <div className="col-span-2">
                <InputRHF
                  placeholder="Nhập email (không bắt buộc)"
                  name="email"
                  type="text"
                />
              </div>
              <div className="col-span-2">
                <TextareaRHF
                  name="content"
                  placeholder="Nhập nội dung đánh giá"
                  rows={4}
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-4">
              Tiếp tục
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const DialogSuccess = ({ open, setOpen }: any) => {
  return (
    <Dialog onOpenChange={(value) => setOpen(value)} open={open}>
      <DialogContent
        className="p-4 bg-white w-full h-full  px-4 md:w-[400px] md:rounded-xl  md:h-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="text-center text-xl  h-12"> </DialogTitle>
        <div className="p-4">
          <Image
            loading="lazy"
            width={270}
            height={122}
            alt=""
            className="mx-auto"
            src="/icons/png/success-preview.png"
          />
          <div className="content mt-[36px] text-center">
            <p className="text-base font-semibold">Gửi bình luận thành công</p>
            <p className="text-sm text-gray-700/80">
              Bình luận đã được ghi nhận và sẽ cập nhật trong thời gian sớm
              nhất.
            </p>
          </div>
          <Button onClick={() => setOpen(false)} className="mt-4 w-full">
            {" "}
            Tiếp tục mua hàng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
