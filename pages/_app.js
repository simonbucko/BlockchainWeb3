import "../styles/globals.css";
import { ThirwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirwebWeb3Provider>
  );
}

export default MyApp;
