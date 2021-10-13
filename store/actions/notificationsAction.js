import { NOTIFICATIONS_PUSH, NOTIFICATIONS_REMOVE } from "store/actionTypes";

/**
 * @param {String} config.title
 * @param {String} config.content
 * @param {String} [config.pos=rightLeft]
 * @param {String} config.type
 * @param {Number} [config.timeout=5000]
 *
 * @returns {Promise} Notification UID
 */
export const createNotification =
  ({ title, content, type, pos = "rightLeft", timeout = 5000 }) =>
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
            pos,
            timeout,
          },
        });
        return resolve(id);
      } catch (error) {
        return reject(error);
      }
    });

export const removeNotification = (id, pos) => (dispatch) =>
  new Promise((resolve, reject) => {
    try {
      dispatch({ type: NOTIFICATIONS_REMOVE, payload: { id, pos } });
      return resolve();
    } catch (error) {
      return reject(error);
    }
  });
