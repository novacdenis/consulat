import PropTypes from "prop-types";
import OnlineLayout from "@/layouts/online.layout";

export default function Orders(props) {
  return "orders";
}

Orders.propTypes = {};

Orders.defaultProps = {};

Orders.getLayout = function getLayout(page) {
  return <OnlineLayout>{page}</OnlineLayout>;
};
