import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropsTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import TimesIcon from "../../assets/icons/times.svg";
import CheckIcon from "../../assets/icons/check-circle.svg";
import TimesCIcon from "../../assets/icons/times-circle.svg";
import _cs from "@/utils/condStrings";
import { notify } from "@/utils/consts";
import { removeNotification } from "@/actions/notificationsAction";

const variants = {
  hidden: ({ pos }) => ({
    [pos]: -100,
    opacity: 0,
  }),
  visible: ({ pos }) => ({
    [pos]: 20,
    opacity: 1,
  }),
  exit: ({ pos }) => ({
    opacity: 0,
    [pos]: -500,
  }),
};

export default function Notification({ id, content, pos, type }) {
  const [notificationIcon, setNotificationIcon] = useState();
  const [notificationStatus, setNotificationStatus] = useState(true);
  const dispatch = useDispatch();

  const getIcon = useCallback(() => {
    switch (type) {
      case notify.ERROR:
        return <TimesCIcon />;
      default:
        return <CheckIcon />;
    }
  }, [type]);

  useEffect(() => setNotificationIcon(getIcon()), [getIcon]);

  const removeNotificationHandler = () => {
    setNotificationStatus(false);
    setTimeout(() => removeNotification(id, pos)(dispatch), 1000);
  };

  return (
    <AnimatePresence>
      {notificationStatus && (
        <motion.div
          className={_cs("notification-item", pos, type)}
          custom={{ pos: pos.toLowerCase().indexOf("left") === -1 ? "right" : "left" }}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="notification-icon">{notificationIcon}</div>
          <div className="notification-content">
            <p className="notification-body">{content}</p>
          </div>
          <Button.Icon
            onClick={removeNotificationHandler}
            btnClassName={["notification-action"]}
            icon={<TimesIcon />}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Notification.propTypes = {
  id: PropsTypes.string,
  title: PropsTypes.string,
  content: PropsTypes.string,
  pos: PropsTypes.string,
  timeout: PropsTypes.number,
  type: PropsTypes.string,
};
