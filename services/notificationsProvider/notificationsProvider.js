import { useSelector } from "react-redux";
import Notification from "@/components/notification";

export default function NotificationsProvider() {
  const { notifications } = useSelector((state) => ({
    notifications: state.notifications,
  }));

  return (
    <div id="notification-provider">
      {Object.keys(notifications).map((pos) =>
        notifications[pos].map((ntf) => <Notification key={ntf.id} {...ntf} />)
      )}
    </div>
  );
}
