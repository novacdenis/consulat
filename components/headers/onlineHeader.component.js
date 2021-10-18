import PropTypes from "prop-types";
import _cs from "@/utils/condStrings";

export default function OnlineHeader(props) {
  const { className, navigation } = props;

  return <header className={_cs("online-header", className)}>{navigation}</header>;
}

OnlineHeader.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  navigation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

OnlineHeader.defaultProps = {
  className: [],
};
