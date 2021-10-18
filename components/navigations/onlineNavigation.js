import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import LogoWhite from "@/images/logo-white.svg";
import Avatar from "@/images/avatar.png";
import OrdersIcon from "@/icons/orders.svg";
import SettingsIcon from "@/icons/settings.svg";
import CoinsIcon from "@/icons/coins.svg";
import SupportIcon from "@/icons/support.svg";
import MoneyIcon from "@/icons/money-bag.svg";

export default function OnlineNavigation() {
  return (
    <nav className="navigation online-navigation">
      <div className="navigation-inner">
        <Link href="/">
          <a className="co-logo">
            <LogoWhite />
          </a>
        </Link>
        <ul className="nav-bar reset-list">
          <li className="nav-item">
            <div className="account-quick-actions">
              <div className="account-info">
                <span className="bag">
                  <MoneyIcon />
                </span>
                <span className="text">Баланс:</span>
                <Button type="primary" size="sm" readOnly>
                  123 MDL
                </Button>
              </div>
              <div className="accout-actions">
                <Link href="/account/deposit" passHref>
                  <a className="nested-link">
                    <Button type="outline" size="sm" btnClassName="nav" icon={<CoinsIcon />}>
                      Пополнить
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/support">
              <a className="nav-link">
                <span className="icon">
                  <SupportIcon />
                </span>
                <span className="content">Поддержка</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/orders">
              <a className="nav-link">
                <span className="icon">
                  <OrdersIcon />
                </span>
                <span className="content">Мои Заказы</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/settings">
              <a className="nav-link">
                <span className="icon">
                  <SettingsIcon />
                </span>
                <span className="content">Настройки</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="navigation-actions_container">
          <div className="navigation-actions">
            <Link href="/orders/new" passHref>
              <a className="nested-link">
                <Button type="primary">Разместить Заказ</Button>
              </a>
            </Link>
            <Link href="/account" passHref>
              <a className="nested-link">
                <button className="co-btn co-btn-outline navigation-avatar" type="button">
                  <Image src={Avatar} width="58" height="58" alt="Avatar" />
                </button>
              </a>
            </Link>
            <Link href="/auth/logout" passHref>
              <a className="nested-link">
                <Button type="outline" btnClassName="nav">
                  Выйти
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

OnlineNavigation.propTypes = {};

OnlineNavigation.defaultProps = {};
