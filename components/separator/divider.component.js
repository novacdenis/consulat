import PropTypes from "prop-types";

import _cs from "@/utils/condStrings";

export default function Divider({ pos, text }) {
  return <div className={_cs("co-divider", pos)}>{text}</div>;
}

Divider.propTypes = {
  pos: PropTypes.oneOf(["left", "center", "right"]),
  text: PropTypes.string,
};

Divider.defaultProps = {
  pos: "center",
  text: null,
};
