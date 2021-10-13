import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store";
import MainLayout from "../layouts/main.layout";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "../styles/global.scss";
import NotificationsProvider from "@/services/notificationsProvider";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  if (getLayout) {
    return (
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
        <NotificationsProvider />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <NotificationsProvider />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
