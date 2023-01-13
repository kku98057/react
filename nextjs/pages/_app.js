import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
