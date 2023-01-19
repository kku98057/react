import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { MovideContextProvider } from "../context/SearchContext";

export default function App({ Component, pageProps }) {
  const client = new QueryClient();

  return (
    <ThemeProvider attribute="class">
      <MovideContextProvider>
        <QueryClientProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </MovideContextProvider>
    </ThemeProvider>
  );
}
