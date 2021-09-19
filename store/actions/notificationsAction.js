import { NOTIFICATIONS_PUSH, NOTIFICATIONS_REMOVE } from "store/actionTypes";

export const deleteNotification = (notificationUID) => (dispatch) =>
  new Promise((resolve, reject) => {
    try {
      dispatch({ type: NOTIFICATIONS_REMOVE, payload: notificationUID });
      return resolve();
    } catch (error) {
      return reject(error);
    }
  });

/**
 * @param {String} config.title
 * @param {String} config.content
 * @param {String} config.type
 * @param {Number} config.duration
 *
 * @returns {Promise} Notification UID
 */
export const createNotification =
  ({ title, content, type, duration = 5000 }) =>
  (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        const id = Math.random().toString(16).slice(2);

        dispatch({
          type: NOTIFICATIONS_PUSH,
          payload: {
            id,
            title,
            content,
            type,
            duration,
          },
        });
        return resolve(id);
      } catch (error) {
        return reject(error);
      }
    });
