import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: data,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>There was a problem loading the data!</p>;
  if (isLoading) return <p>Loading...⏳</p>;

  return (
    <Layout>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </Layout>
  );
}
