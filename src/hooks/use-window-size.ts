import { useState } from "react";

type WindowSize<T extends number | undefined = number | undefined> = {
  /** The width of the window. */
  width: T;
  /** The height of the window. */
  height: T;
};
/**
 * Hook options.
 * @template InitializeWithValue - If `true` (default), the hook will initialize reading the window size. In SSR, you should set it to `false`, returning `undefined` initially.
 */
type UseWindowSizeOptions<InitializeWithValue extends boolean | undefined> = {
  /**
   * If `true` (default), the hook will initialize reading the window size. In SSR, you should set it to `false`, returning `undefined` initially.
   * @default true
   */
  initializeWithValue: InitializeWithValue;
  /**
   * The delay in milliseconds before the state is updated (disabled by default for retro-compatibility).
   * @default undefined
   */
  debounceDelay?: number;
};
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize<InitializeWithValue extends boolean | undefined = true>(
  options: UseWindowSizeOptions<InitializeWithValue> = {
    initializeWithValue: true as InitializeWithValue,
  }
) {
  let { initializeWithValue = true } = options;
  if (IS_SERVER7) {
    initializeWithValue = false;
  }
  const [windowSize, setWindowSize] = useState(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: void 0,
      height: void 0,
    };
  });
  return windowSize;
}

export default useWindowSize;
