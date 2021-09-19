import Link from "next/link";
import PropTypes from "prop-types";
import Logo from "@/images/logo.svg";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <Link href="/">
          <a className="auth-logo">
            <Logo />
          </a>
        </Link>
        <main>{children}</main>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
