import { useSelector } from "react-redux";

export default function NotificationsProvider() {
  const { notifications } = useSelector((state) => ({
    notifications: state.notifications.payload,
  }));

  console.log(notifications);

  return "DA";
}
