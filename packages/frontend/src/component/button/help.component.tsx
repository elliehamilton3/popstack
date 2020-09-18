import * as React from 'react';
import { Typography, Grid } from '@material-ui/core';
import '../../styles/main.scss';

const HelpButton: React.FunctionComponent = () => (
  <Grid container direction="column" alignItems="center" alignContent="center">
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M43.2458 21.3748C43.2458 9.57004 33.565 0 21.6229 0C9.68087 0 0 9.57004 0 21.3748C0 30.9382 6.35392 39.0327 15.1161 41.7629L12.8697 48C28.195 48 43.2458 36.9588 43.2458 21.3748Z" fill="#FFBFCC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M33.4884 23.4419C33.4884 28.9901 28.9905 33.4884 23.4421 33.4884C17.8932 33.4884 13.3954 28.9901 13.3954 23.4419C13.3954 17.8931 17.8932 13.3954 23.4421 13.3954C28.9905 13.3954 33.4884 17.8931 33.4884 23.4419Z" fill="#E6AFBA" />
      <path fillRule="evenodd" clipRule="evenodd" d="M31.5899 21.5977C31.5899 26.9157 27.2287 31.2273 21.8489 31.2273C16.4686 31.2273 12.1074 26.9157 12.1074 21.5977C12.1074 16.2793 16.4686 11.9682 21.8489 11.9682C27.2287 11.9682 31.5899 16.2793 31.5899 21.5977Z" fill="#FFDFE5" stroke="#1C1A1A" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5789 22.7952C25.5789 24.8315 23.9088 26.4828 21.8488 26.4828C19.7884 26.4828 18.1183 24.8315 18.1183 22.7952" fill="#FFDFE5" />
      <path d="M25.5789 22.7952C25.5789 24.8315 23.9088 26.4828 21.8488 26.4828C19.7884 26.4828 18.1183 24.8315 18.1183 22.7952" stroke="#1C1A1A" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19.7581 18.0414C19.7581 18.8641 19.0829 19.531 18.2505 19.531C17.4182 19.531 16.7442 18.8641 16.7442 18.0414C16.7442 17.2186 17.4182 16.5517 18.2505 16.5517C19.0829 16.5517 19.7581 17.2186 19.7581 18.0414Z" fill="#1C1A1A" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26.4558 18.0417C26.4558 18.8646 25.781 19.5316 24.9485 19.5316C24.116 19.5316 23.4419 18.8646 23.4419 18.0417C23.4419 17.2187 24.116 16.5517 24.9485 16.5517C25.781 16.5517 26.4558 17.2187 26.4558 18.0417Z" fill="#1C1A1A" />
    </svg>
    <Typography variant="body1">Live help</Typography>
  </Grid>
);

export default HelpButton;
