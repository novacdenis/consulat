import PropTypes from "prop-types";
import { Navigation } from "@/components/navigations";
import { Header } from "@/components/headers";

export default function MainLayout({ children }) {
  return (
    <>
      <Header navigation={<Navigation />} />
      <main className="page-container">{children}</main>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
