import PropTypes from "prop-types";
import Container from "@/components/container";
import HeaderP1 from "@/images/main/header1.svg";
import HeaderP2 from "@/images/main/header2.svg";
import HeaderP3 from "@/images/main/header3.svg";
import classNames from "@/utils/classNames";

export default function Header(props) {
  const { className, navigation } = props;

  return (
    <header className={classNames("main-header", className)}>
      <div className="header-decoration p1">
        <HeaderP1 />
      </div>
      <div className="header-decoration p2">
        <HeaderP2 />
      </div>
      <div className="header-decoration p3">
        <HeaderP3 />
      </div>
      <Container>{navigation}</Container>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  navigation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Header.defaultProps = {
  className: [],
};
