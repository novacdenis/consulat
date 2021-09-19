import PropTypes from "prop-types";

export default function InputGroup({ children, gap }) {
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

InputGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

InputGroup.defaultProps = {
  gap: 10,
};
