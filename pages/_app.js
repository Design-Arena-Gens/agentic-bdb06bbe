import Head from "next/head";
import { useMemo } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: "light",
            primary: {
              main: "#6e3055"
            },
            secondary: {
              main: "#1e314f"
            },
            background: {
              default: "#f5f6f8",
              paper: "#ffffff"
            },
            text: {
              primary: "#1e314f",
              secondary: "#3d4153"
            }
          },
          shape: {
            borderRadius: 18
          },
          typography: {
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            h5: {
              fontWeight: 600
            }
          },
          components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  textTransform: "none",
                  borderRadius: 14,
                  fontWeight: 600
                }
              }
            },
            MuiCard: {
              styleOverrides: {
                root: {
                  boxShadow: "0 16px 32px rgba(30, 49, 79, 0.15)"
                }
              }
            }
          }
        })
      ),
    []
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
