import Head from "next/head";
import { Provider } from "react-redux";
import "../styles/style.scss";
import { createStore } from "redux";
import { rootReducer } from "../services/redux/rootReducer";

const store = createStore(rootReducer);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Superb</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
