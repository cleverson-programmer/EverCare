"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Notification = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 8000,
}: NotificationProps) => {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const baseStyle =
    "fixed bottom-6 left-6 z-50 w-[320px] shadow-xl rounded-lg p-4 flex items-start gap-3 text-sm font-medium animate-slide-in";

  const typeStyle =
    type === "success"
      ? "bg-green-500 text-white"
      : "bg-red-500 text-white";

  return (
    <div className={`${baseStyle} ${typeStyle}`}>
      <div className="flex-1">{message}</div>

      <button
        onClick={onClose}
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
};
