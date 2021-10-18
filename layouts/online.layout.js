import PropTypes from "prop-types";
import { OnlineHeader } from "@/components/Headers";
import { OnlineNavigation } from "@/components/Navigations";

export default function OnlineLayout({ children }) {
  return (
    <>
      <OnlineHeader navigation={<OnlineNavigation />} />
      <main className="page-container">{children}</main>
    </>
  );
}

OnlineLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
