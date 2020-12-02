import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TeardropIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 31 39">
      <path
        opacity="0.9"
        d="M0.0604146 23.7787C0.0455979 17.7414 7.9241 7.54319 12.29 2.3566C13.7871 0.57806 16.4596 0.571501 17.9654 2.34267C22.3567 7.50777 30.2851 17.6671 30.2999 23.7045C30.3204 32.0549 23.5677 38.8408 15.2173 38.8613C6.86687 38.8818 0.0809081 32.1291 0.0604146 23.7787Z"
        fill="#FFB7D5"
      />
    </SvgIcon>
  );
}

export default TeardropIcon;
