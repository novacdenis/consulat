import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import _cs from "@/utils/condStrings";

const motionConfig = {
  initial: {
    opacity: 0,
    y: -10,
    left: -50,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    y: 0,
    left: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    left: -50,
    scale: 0.7,
  },
  transition: {
    duration: 0.2,
  },
};

export default function Errors(props) {
  const { isSubmitted, error, errorsClassName } = props;
  const className = _cs("form-control_errors", errorsClassName);

  return (
    <AnimatePresence>
      {error && isSubmitted && (
        <motion.div {...motionConfig} className={className} title={error.message}>
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Errors.propTypes = {
  isSubmitted: PropTypes.bool,
  error: PropTypes.object,
  messages: PropTypes.object,
  errorsClassName: PropTypes.arrayOf(PropTypes.string),
};

Errors.defaultProps = {
  errorsClassName: [],
};
