import Router from "../src/assets/router/Router";
import "./App.css";
import Layout from "../src/assets/layout/Layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}

export default App;
