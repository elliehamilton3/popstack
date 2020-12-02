import * as React from "react";
import { storiesOf } from "@storybook/react";

import AppView from "./app.view";

const stories = storiesOf("View", module).addParameters({
  component: AppView,
});

stories.add("App", () => <AppView />);
