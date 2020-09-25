import { makeStyles } from '@material-ui/core';
import React from 'react';
import CircularBoldFontTtf from '../../../../assets/font/circular/Circular-Bold.ttf';
import CircularBoldFontWoff from '../../../../assets/font/circular/Circular-Bold.woff';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const circularBold: any = {
  fontFamily: 'Circular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: [
    'local(\'Circular-Bold\')',
    `url(${CircularBoldFontTtf}) format('ttf')`,
    `url(${CircularBoldFontWoff}) format('woff')`,
  ].join(','),
};

const useStyles = makeStyles({
  '@global': {
    '@font-face': circularBold,
  },
});

export const CircularBold: React.FC = () => {
  useStyles();
  return <></>;
};
