import { ReactElement } from "react";
import { RenderOptions, RenderResult, render } from "@testing-library/react";

import AppWrapper from "AppWrapper";

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: AppWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
