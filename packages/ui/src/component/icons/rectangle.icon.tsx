import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function RectangleIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="0 0 40 29" >
            <rect opacity="0.9" x="39.8594" y="8.46094" width="40.3028" height="9.53271" rx="4" transform="rotate(150.939 39.8594 8.46094)" fill="#62CFF1"/>
        </SvgIcon>
    );
}

export default RectangleIcon;