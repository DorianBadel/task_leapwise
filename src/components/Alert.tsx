import ReactDOM from "react-dom";
import "./../styles/css/components/Alert.css";

function Alert({
  icon,
  message,
  onClose,
}: {
  icon: React.ReactNode;
  message: string;
  onClose: () => void;
}) {
  return ReactDOM.createPortal(
    <div className="alert" onClick={onClose}>
      {icon} {message}
    </div>,
    document.body
  );
}

export default Alert;
