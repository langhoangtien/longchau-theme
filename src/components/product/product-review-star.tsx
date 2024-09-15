import StarIcon from "../icons/star-icon";

export default function ProductReviewStar({
  ratingsCalc,
}: {
  ratingsCalc: any[];
}) {
  return (
    <div>
      {ratingsCalc.reverse().map((rating: any, index: number) => (
        <Stars
          key={index}
          star={5 - index}
          percent={rating.percent}
          rating={rating.rating}
        />
      ))}
    </div>
  );
}

const Stars = ({
  percent = 0,
  star,
  rating,
}: {
  percent?: number;
  star: number;
  rating: number;
}) => (
  <div className="mb-[6px] flex h-[18px] items-center gap-2">
    <div className="rating">
      <ul className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            color={star > i ? "text-orange-400" : "text-gray-200"}
            key={i}
          />
        ))}
      </ul>
    </div>
    <div className="flex-1">
      <div className="flex items-start bg-gray-300 font-normal overflow-hidden rounded-lg h-2 w-[231px]">
        <div
          className="flex justify-end items-center h-full text-white rounded-lg bg-[#F79009]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
    <span className="text-sm text-gray-700">{rating}</span>
  </div>
);

const Star = ({ color = "text-orange-400" }: { color?: string }) => (
  <li>
    <StarIcon className={`w-4 h-4 ${color}`} />
  </li>
);
