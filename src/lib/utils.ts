import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RenderSize = { width: number; height: number };

export type RenderMetrics = {
  screen: RenderSize;
  viewport: RenderSize;
  dpr: number;
  actual: RenderSize;
  design: RenderSize;
  actualScale: number;
  cssScale: number;
};

export const DESIGN_ACTUAL_RESOLUTION: RenderSize = {
  width: 1279,
  height: 800,
};

const clampScale = (value: number) => Math.max(0.5, Math.min(value, 2));

export const getScreenResolution = (): RenderSize => ({
  width: window.screen.width,
  height: window.screen.height,
});
export const getViewportSize = (): RenderSize => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
export const getDevicePixelRatio = (): number => window.devicePixelRatio || 1;
export const getActualRenderResolution = (): RenderSize => {
  const dpr = getDevicePixelRatio();
  const viewport = getViewportSize();

  return {
    width: Math.ceil(viewport.width * dpr),
    height: Math.ceil(viewport.height * dpr),
  };
};

export const calculateRenderMetrics = ({
  screen,
  viewport,
  dpr,
  design = DESIGN_ACTUAL_RESOLUTION,
}: {
  screen: RenderSize;
  viewport: RenderSize;
  dpr: number;
  design?: RenderSize;
}): RenderMetrics => {
  const safeDpr = dpr > 0 ? dpr : 1;
  const safeViewport = {
    width: viewport.width > 0 ? viewport.width : 1,
    height: viewport.height > 0 ? viewport.height : 1,
  };
  const actual = {
    width: Math.ceil(safeViewport.width * safeDpr),
    height: Math.ceil(safeViewport.height * safeDpr),
  };
  const actualScale = Math.min(
    actual.width / design.width,
    actual.height / design.height,
  );
  const cssScale = clampScale(actualScale);

  return {
    screen,
    viewport: safeViewport,
    dpr: safeDpr,
    actual,
    design,
    actualScale,
    cssScale,
  };
};

export const getRenderMetrics = (
  design: RenderSize = DESIGN_ACTUAL_RESOLUTION,
): RenderMetrics =>
  calculateRenderMetrics({
    screen: getScreenResolution(),
    viewport: getViewportSize(),
    dpr: getDevicePixelRatio(),
    design,
  });

export const getRenderCssVariables = (metrics: RenderMetrics) => ({
  "--render-screen-width": `${metrics.screen.width}`,
  "--render-screen-height": `${metrics.screen.height}`,
  "--render-viewport-width": `${metrics.viewport.width}`,
  "--render-viewport-height": `${metrics.viewport.height}`,
  "--render-actual-width": `${metrics.actual.width}`,
  "--render-actual-height": `${metrics.actual.height}`,
  "--render-design-width": `${metrics.design.width}`,
  "--render-design-height": `${metrics.design.height}`,
  "--render-dpr": `${metrics.dpr}`,
  "--render-actual-scale": `${metrics.actualScale}`,
  "--ui-scale": `${metrics.cssScale}`,
});
