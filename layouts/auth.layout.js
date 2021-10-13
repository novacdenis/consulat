import Link from "next/link";
import PropTypes from "prop-types";
import Logo from "@/images/logo.svg";

export default function AuthLayout({ children }) {
  return (
    <main className="auth-container">
      <div className="auth-content">
        <Link href="/">
          <a className="auth-logo">
            <Logo />
          </a>
        </Link>
        {children}
      </div>
    </main>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
