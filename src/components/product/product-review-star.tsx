export default function ProductReviewStar() {
  return (
    <div>
      <Stars star={5} percent={40} />
      <Stars star={4} percent={10} />
      <Stars star={3} percent={20} />
      <Stars star={2} percent={10} />
      <Stars star={1} percent={20} />
    </div>
  );
}

const Stars = ({ percent = 0, star }: { percent?: number; star: number }) => (
  <div className="mb-[6px] flex h-[18px] items-center gap-2">
    <div className="rating">
      <ul className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star color={star > i ? "#F79009" : "#d1d5db"} key={i} />
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
    <span className="text-caption2 text-text-primary">35</span>
  </div>
);

const Star = ({ color = "#d1d5db" }: { color?: string }) => (
  <li>
    <span className="text-inherit transition-colors svg-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width={16}
        height={16}
        className="h-[1em] w-[1em]"
      >
        <path
          fill={color}
          d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
        />
      </svg>
    </span>
  </li>
);
