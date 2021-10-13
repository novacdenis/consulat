import PropTypes from "prop-types";
import _cs from "@/utils/condStrings";

export default function Container(props) {
  const { size, className, children } = props;

  return <div className={_cs(className, `container-${size}`)}>{children}</div>;
}

Container.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "xl"]),
  className: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Container.defaultProps = {
  size: "md",
  className: [],
};
