import ProductDetailComment from "./product-detail-comment";
import ProductReviewStar from "./product-review-star";
import StarIcon from "../icons/star-icon";
export const revalidate = 30;
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
              <div>
                <p className="text-text-secondary te font-semibold">
                  Trung bình
                </p>
                <p className="md:text-3xl text-2xl  flex items-center font-semibold">
                  {ratingAverage}
                  <StarIcon className="ml-2 w-6 h-6 text-orange-400" />
                </p>
              </div>
              <button className="inline-flex items-center bg-blue-600 justify-center font-medium  py-[12px] px-[24px] h-[48px] rounded-[42px] text-white text-base">
                Gửi đánh giá
              </button>
            </div>
          </div>
          <ProductReviewStar ratingsCalc={ratingsCalc} />
        </div>

        <ProductDetailComment id={id} />
      </div>
    </div>
  );
}
