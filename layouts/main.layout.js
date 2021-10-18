import PropTypes from "prop-types";
import { Navigation } from "@/components/Navigations";
import { Header } from "@/components/Headers";

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
