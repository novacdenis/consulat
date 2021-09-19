import PropTypes from "prop-types";
import _cs from "@/utils/condStrings";

export default function Icon({ children, iconClassName }) {
  const className = _cs("svg-icon", iconClassName);

  return (
    <span className={className}>{children}</span>
  );
}

Icon.propTypes = {
  children: PropTypes.element,
  w: PropTypes.oneOfType([PropTypes.string], PropTypes.number),
  h: PropTypes.oneOfType([PropTypes.string], PropTypes.number),
  iconClassName: PropTypes.array,
};

Icon.defaultProps = {
  iconClassName: [],
};
