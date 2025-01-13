import * as Portal from "@radix-ui/react-portal";

// ----------------------------------------------------------------------

export default function SplashScreen() {
  return (
    <Portal.Root>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[9999999] bg-background flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div>
          <div className="relative">
            <div className="uko-loading-screen absolute left-[-2px] top-[-2px] h-[104px] w-[104px] rounded-full opacity-65 blur-[30px]"></div>
            <div className="uko-loading-screen absolute left-[-2px] top-[-2px] h-[104px] w-[104px] rounded-full"></div>
            <div className="relative z-10 box-border grid h-[100px] w-[100px] place-content-center overflow-hidden rounded-full bg-background p-8">
              <div className="inline-flex align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="100%"
                  viewBox="0 0 213 203"
                  enable-background="new 0 0 213 203"
                >
                  <path
                    fill="hsl(var(--primary))"
                    opacity="1.000000"
                    stroke="none"
                    d=" M173.681046,50.477730   C169.564209,55.232754 164.274567,55.906250 158.881638,55.972141   C147.553223,56.110538 136.222687,56.074333 124.893082,56.123283   C124.764694,56.123837 124.637085,56.304596 124.003410,56.783138   C124.003410,58.173222 124.003403,59.953865 124.003403,61.734509   C124.003395,98.394783 124.022392,135.055084 123.965858,171.715271   C123.961533,174.522308 123.661278,177.377991 123.089050,180.125778   C121.424423,188.119019 115.314148,192.907043 107.414452,192.664124   C99.405762,192.417862 93.437386,187.451477 92.064209,179.572479   C91.524361,176.474976 91.353134,173.279099 91.348953,170.127563   C91.301407,134.300552 91.318756,98.473434 91.318748,62.646343   C91.318748,60.653145 91.318748,58.659946 91.318748,56.003410   C84.170639,56.003410 77.226707,56.107002 70.287308,55.973999   C63.476730,55.843464 56.606598,55.958679 49.880684,55.071175   C43.053432,54.170303 39.437912,49.289410 39.325100,42.597862   C39.211266,35.845890 42.612228,31.370548 49.383057,29.607037   C51.131020,29.151766 52.988972,28.923958 54.796757,28.921970   C90.123894,28.883129 125.451218,28.837099 160.778183,28.922476   C173.884003,28.954151 179.830673,38.739841 173.681046,50.477730  z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal.Root>
  );
}
