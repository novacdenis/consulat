import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export default function Errors(props) {
  const { error, isFormSubmitted } = props;

  return (
    <div className="form-control_errors">
      <AnimatePresence>
        {isFormSubmitted && (
          <motion.div {...variants} transition={{ ease: "easeIn" }} className="error-item">
            {error.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Errors.propTypes = {
  error: PropTypes.object,
  isFormSubmitted: PropTypes.bool,
};

Errors.defaultProps = {
  error: {},
};
