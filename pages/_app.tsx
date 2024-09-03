import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import '../styles/main.css';
import '../styles/aboutus.css';
import "../styles/globals.css";
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MeshProvider>
  );
}

export default MyApp;
