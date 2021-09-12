import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <main>{children}</main>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
