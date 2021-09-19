import Button from "../button";

export default function Notification({ id, title, content, timeout }) {
  return (
    <div className="notification-item" key={id}>
      <div className="notification-icon">
        <svg />
      </div>
      <div className="notification-content">
        <h3 className="notification-title">{title}</h3>
        <p className="notification-body">{content}</p>
      </div>
      <Button type="icon" />
    </div>
  );
}
