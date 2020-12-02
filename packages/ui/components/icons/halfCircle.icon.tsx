import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function HalfCircleIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 46 42">
      <path
        opacity="0.9"
        d="M10.8545 4.34947C11.7776 2.34245 14.3224 1.9585 16.1079 3.25948C19.1165 5.45179 23.9471 8.9716 29.3932 12.94C34.8394 16.9084 39.67 20.4283 42.6786 22.6206C44.4641 23.9215 44.8783 26.4616 43.2506 27.9553C36.284 34.3482 25.4909 35.1274 17.4797 29.2899C9.46847 23.4525 6.90339 12.9397 10.8545 4.34947Z"
        fill="#FF8C4C"
      />
    </SvgIcon>
  );
}

export default HalfCircleIcon;
