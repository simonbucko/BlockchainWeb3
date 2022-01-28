import "../styles/globals.css";
import { ThirwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [4];
const connectiors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
