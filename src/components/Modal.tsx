import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  className = "",
}: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 flex flex-col ${className}`}
        style={{ zIndex: 60 }}
      >
        {title && (
          <div className="text-xl font-bold mb-4 text-[#2c0735] flex items-center justify-between">
            <span>{title}</span>
            <button
              className="ml-4 text-2xl text-gray-400 hover:text-[#4e148c] transition"
              onClick={onClose}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        )}
        <div className="flex-1 text-[#2c0735] mb-4">{children}</div>
        {actions && (
          <div className="flex flex-row-reverse gap-2 mt-2">{actions}</div>
        )}
      </div>
    </div>
  );
}
