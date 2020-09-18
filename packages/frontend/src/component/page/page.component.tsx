import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import {
  HelpOutlined,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { IReactProps } from '../../interface/reactProps.interface';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';

export interface INavbarProps extends IReactProps {
  linkOnClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export const Page: React.FunctionComponent<INavbarProps> = ({
  linkOnClick,
  children,
}: INavbarProps) => (
    // eslint-disable-next-line react/jsx-indent
    <ThemeProvider>
      <Navbar />
      <Typography variant="h1">Responsive h1</Typography>
      <Typography variant="h2">Responsive h2</Typography>
      <Typography variant="h3">Responsive h3</Typography>
      <Typography variant="h4">Responsive h4</Typography>
      <Typography variant="h5">Responsive h5</Typography>
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="active"
        onClick={linkOnClick?.bind(this)}
      >
        <Button color="secondary" variant="outlined">Index</Button>
      </NavLink>

      <NavLink
        to="/page2"
        exact
        className="nav-link"
        activeClassName="active"
        onClick={linkOnClick?.bind(this)}
      >
        <Button color="secondary" variant="contained">Page2</Button>
      </NavLink>
      <Button variant="outlined" color="primary">Reply 1</Button>
      <Button variant="contained" color="primary">Reply 2</Button>
      <HelpOutlined color="primary" />
      <Button variant="outlined" color="primary">Save for later</Button>
      {children}
    </ThemeProvider>
    // eslint-disable-next-line @typescript-eslint/indent
  );

export default Page;
