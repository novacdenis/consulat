import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _cs from "@/utils/condStrings";

export default function ButtonIcon(props) {
  const { htmlType, type, btnClassName, disabled, loading, icon, onClick } = props;
  const [typeClassName, setTypeClassName] = useState("");
  const className = _cs("co-btn-icon", btnClassName);

  useEffect(() => {
    if (type === "primary") {
      setTypeClassName("co-btn-icon-primary");
    }

    if (type === "transparent") {
      setTypeClassName("co-btn-icon-transparent");
    }
  }, [btnClassName, type]);

  return (
    <button
      type={htmlType}
      className={_cs(className, typeClassName)}
      disabled={disabled}
      data-loading={loading}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

ButtonIcon.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.oneOf(["primary", "transparent"]),
  btnClassName: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  htmlType: "button",
  type: "transparent",
  btnClassName: [],
};
