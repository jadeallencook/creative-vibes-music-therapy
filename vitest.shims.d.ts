/// <reference types="@vitest/browser-playwright" />

declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}