import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
});

addDecorator(withKnobs);

addDecorator((story) => {
  return story();
});
