import "../styles/globals.css";
import { AuthContextProvider } from "./components/context/AuthContext";
import Layout from "./layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
