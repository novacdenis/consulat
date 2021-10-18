import PropTypes from "prop-types";
import { justifyContent } from "@/utils/consts";
import _cs from "@/utils/condStrings";

export default function InputGroup(props) {
  const { gap, justify, children } = props;

  return (
    <div
      className={_cs("d-flex", justifyContent[justify])}
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justify: PropTypes.oneOf(["between", "center", "start"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

InputGroup.defaultProps = {
  gap: 10,
  justify: "center",
};
