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
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="100%"
                  viewBox="0 0 192 192"
                  enableBackground="new 0 0 192 192"
                  xmlSpace="preserve"
                >
                  <path
                    fill="hsl(var(--primary))"
                    opacity={1.0}
                    stroke="none"
                    d=" M47.651253,86.382141   C48.721645,68.993431 49.766796,52.075153 50.844246,34.634060   C59.892365,35.514305 68.434738,36.345352 77.377785,37.215378   C76.425606,47.221924 75.271736,56.917358 74.626488,66.646523   C73.371719,85.566399 72.180763,104.496056 71.399071,123.439636   C70.941963,134.517197 73.159241,136.562759 84.360748,136.647461   C104.109520,136.796829 123.482368,134.035797 142.456909,128.532288   C143.733826,128.161911 145.011627,127.794563 146.919479,127.243813   C148.802032,135.451691 150.675537,143.620117 152.737244,152.609085   C143.714630,154.396561 135.213348,156.737717 126.561440,157.649261   C111.528290,159.233109 96.413567,160.425232 81.309601,160.778305   C74.664322,160.933640 67.772568,159.248611 61.331333,157.287186   C52.741581,154.671478 47.405186,148.087341 47.210491,139.182159   C46.829380,121.750320 47.431103,104.297005 47.651253,86.382141  z"
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
