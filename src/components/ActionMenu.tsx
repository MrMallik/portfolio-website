import { useState } from "react";
import Modal from "@/components/Modal";

const actions = [
  { label: "Contact" },
  { label: "Download Resume" },
  { label: "Settings" },
];

export default function ActionMenu() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  const handleAction = (label: string) => {
    console.log(`Action clicked: ${label}`);
    setOpen(true);
    setModalTitle(label);
    setModalOpen(true);
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="hidden md:block fixed top-6 right-8 z-50">
        <div className="relative">
          <button
            className="bg-[#4e148c] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#5939b1] transition"
            onClick={() => setOpen((v) => !v)}
          >
            Actions
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-[#2c0735] rounded-lg shadow-xl border border-gray-200">
              {actions.map((a) => (
                <button
                  key={a.label}
                  className="w-full text-left px-4 py-2 hover:bg-[#f2e6ee] transition"
                  onClick={() => handleAction(a.label)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          className="bg-[#4e148c] text-white p-4 rounded-full shadow-lg hover:bg-[#5939b1] transition"
          onClick={() => setOpen(true)}
          aria-label="Open actions"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#4e148c" />
            <path
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              d="M8 12h8M12 8v8"
            />
          </svg>
        </button>
        {/* Bottom Sheet Overlay */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            ></div>
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl p-6 pb-10 flex flex-col gap-4 animate-slideup shadow-2xl">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
              {actions.map((a) => (
                <button
                  key={a.label}
                  className="w-full text-lg text-[#2c0735] py-3 rounded-lg hover:bg-[#f2e6ee] transition"
                  onClick={() => handleAction(a.label)}
                >
                  {a.label}
                </button>
              ))}
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalTitle}
                actions={
                  <button
                    className="bg-[#4e148c] text-white px-4 py-2 rounded-lg hover:bg-[#5939b1] transition"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                }
              >
                <div className="text-center text-lg">Coming soon.</div>
              </Modal>
            </div>
          </>
        )}
      </div>
      {/* slideup animation is in global CSS */}
    </>
  );
}
