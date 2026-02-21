import { useState } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState({
    message: "",
    type: "success" as "success" | "error",
    isVisible: false,
  });

  const showNotification = (
    message: string,
    type: "success" | "error"
  ) => {
    setNotification({
      message,
      type,
      isVisible: true,
    });
  };

  const hideNotification = () => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
