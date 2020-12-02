import { AppProps } from "next/app";
import { ThemeProvider } from "../styles/theme";
import "../public/css/inter.css";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider><Component {...pageProps} /></ThemeProvider>;
}
