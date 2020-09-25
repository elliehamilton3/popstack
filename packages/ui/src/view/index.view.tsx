import { Typography } from '@material-ui/core';
import * as React from 'react';
import { MatterStepThree } from '../component/animation/animation.component';
export const IndexView: React.FunctionComponent = () => {
  return (
    <>
    <Typography variant="h1">PopStack</Typography>
    <MatterStepThree />
    </>
  );
};

export default IndexView;
