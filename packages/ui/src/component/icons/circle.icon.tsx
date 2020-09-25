import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CircleIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="0 0 35 35" >
            <ellipse opacity="0.9" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="rotate(-180 17.5 17.5)" fill="#FFD84C"/>     
        </SvgIcon>
    );
}

export default CircleIcon;