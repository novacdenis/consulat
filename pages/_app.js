import PropTypes from "prop-types";
import MainLayout from "../layouts/main.layout";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  if (getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
