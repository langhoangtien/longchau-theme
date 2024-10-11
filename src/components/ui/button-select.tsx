import { cn } from "@/lib/utils";

const ButtonSelect = ({ selected, children, className, ...props }: any) => {
  if (selected)
    return (
      <div
        {...props}
        className={cn(
          "inline-flex text-sm justify-center items-center rounded-md text-primary relative font-medium  overflow-hidden cursor-pointer h-9  transition-all duration-300 border-blue-600 border border-solid bg-white pl-4 pr-6",
          className
        )}
      >
        {children}
        <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-blue-600 -mt-[6px] -mr-[12px] absolute">
          <span className="absolute -top-[22px] right-[3px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={10}
              className="text-white"
            >
              <path
                d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    );
  return (
    <div
      {...props}
      className={cn(
        "inline-flex text-sm justify-center items-center pl-3 pr-3 rounded-md border border-gray-300 relative font-medium  overflow-hidden cursor-pointer bg-white h-9  transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export { ButtonSelect };
