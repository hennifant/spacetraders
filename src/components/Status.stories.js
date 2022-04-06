import Status from "./Status.js";
import GlobalStyles from "./GlobalStylejs";

export default {
  title: "Components/Status",
  component: Status,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyles />
      </div>
    ),
  ],
};

export const stateGreen = () => <Status isGreen />;
export const stateRed = () => <Status />;
