import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SquareIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 40 40">
      <rect y="0.0375977" width="39" height="39" rx="5" fill="#0057FF" />
    </SvgIcon>
  );
}

export default SquareIcon;
