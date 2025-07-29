import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}
