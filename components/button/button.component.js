import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ButtonGroup from "./buttonGroup.component";
import ButtonIcon from "./buttonIcon.component";
import _cs from "@/utils/condStrings";

export default function Button(props) {
  const {
    htmlType,
    type,
    btnClassName,
    disabled,
    loading,
    children,
    onClick,
    icon,
    readOnly,
    size,
  } = props;
  const [typeClassName, setTypeClassName] = useState("");
  const className = _cs("co-btn", btnClassName);

  useEffect(() => {
    if (type === "primary") {
      setTypeClassName("co-btn-primary");
    }

    if (type === "outline") {
      setTypeClassName("co-btn-outline");
    }
  }, [btnClassName, type]);

  return (
    <button
      className={_cs(className, typeClassName, `co-btn-${size}`, readOnly && "readOnly")}
      data-loading={loading}
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && (
        <motion.span
          className="svg-icon spinner"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ delay: 0.2 }}
        >
          <svg
            viewBox="0 0 1024 1024"
            data-icon="loading"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="s-spinner"
          >
            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
          </svg>
        </motion.span>
      )}
      <span>{children}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.oneOf(["primary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "xl"]),
  btnClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onClick: PropTypes.func,
  icon: PropTypes.element,
  readOnly: PropTypes.bool,
};

Button.defaultProps = {
  htmlType: "button",
  type: "primary",
  size: "md",
  btnClassName: [],
  icon: null,
  readOnly: false,
};

Button.Group = ButtonGroup;
Button.Icon = ButtonIcon;
