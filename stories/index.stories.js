import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { SearchInput } from "../components/atoms";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add("with text", () => (
    <SearchInput
      value={text("value", "")}
      placeholder={text("placeholder", "Search User")}
    />
  ));
