import { useCallback } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Button from "../button";
import Logo from "@/images/logo.svg";
import Discussion from "@/icons/discussion.svg";
import UserIcon from "@/icons/user.svg";

export default function Navigation({ isOnline }) {
  const NavButton = useCallback(() => {
    return (
      <Link href={isOnline ? "/account" : "/auth/login"}>
        <a>
          <Button icon={<UserIcon />}>{isOnline ? "Мой профиль" : "Войти"}</Button>
        </a>
      </Link>
    );
  }, [isOnline]);

  return (
    <nav className="navigation main-navigation">
      <div className="navigation-inner">
        <Link href="/">
          <a className="co-logo">
            <Logo />
          </a>
        </Link>
        <ul className="nav-bar reset-list">
          <li className="nav-item">
            <Link href="/#about">
              <a className="nav-link">
                <span className="content">О сервисе</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#about">
              <a className="nav-link nav-link-b">
                <span className="icon">
                  <Discussion />
                </span>
                <span className="content">Поддержка</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <NavButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  isOnline: PropTypes.bool,
};

Navigation.defaultProps = {
  isOnline: false,
};
