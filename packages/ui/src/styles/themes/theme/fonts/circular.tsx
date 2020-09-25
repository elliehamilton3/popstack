import { makeStyles } from '@material-ui/core';
import React from 'react';
import CircularFontTtf from '../../../../assets/font/circular/Circular-Book.ttf';
import CircularFontWoff from '../../../../assets/font/circular/Circular-Book.woff';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const circular: any = {
  fontFamily: 'Circular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    'local(\'Circular\')',
    'local(\'Circular-Regular\')',
    `url(${CircularFontTtf}) format('ttf')`,
    `url(${CircularFontWoff}) format('woff')`,
  ].join(','),
};

const useStyles = makeStyles({
  '@global': {
    '@font-face': circular,
  },
});

export const Circular: React.FC = () => {
  useStyles();
  return <></>;
};
