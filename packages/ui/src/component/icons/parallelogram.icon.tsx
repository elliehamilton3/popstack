import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ParallelogramIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="0 0 36 36" >
            <path opacity="0.9" d="M30.6241 27.3203C30.3472 29.0171 29.0171 30.3472 27.3203 30.6241L5.48692 34.1858C2.78954 34.6258 0.455059 32.2913 0.895088 29.5939L4.45681 7.76061C4.73362 6.06377 6.06376 4.73362 7.7606 4.45681L29.5939 0.895089C32.2913 0.455059 34.6258 2.78954 34.1858 5.48692L30.6241 27.3203Z" fill="#26C58C"/>
        </SvgIcon>
    );
}

export default ParallelogramIcon;