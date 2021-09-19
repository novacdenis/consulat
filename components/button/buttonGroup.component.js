import PropTypes from "prop-types";

export default function ButtonGroup({ children, gap }) {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ButtonGroup.defaultProps = {
  gap: 10,
};
