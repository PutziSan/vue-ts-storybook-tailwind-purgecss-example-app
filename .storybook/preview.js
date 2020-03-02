import { addParameters } from "@storybook/vue";
import "../src/tailwind.css";

addParameters({
  viewport: {
    defaultViewport: "customViewport",
    viewports: {
      customViewport: {
        name: "custom viewport",
        styles: {
          width: "1280px",
          height: "800px"
        },
        type: "tablet"
      }
    }
  }
});
