import { useState } from "react";
import { CarFront, MapPin, X } from "lucide-react";

const ButtonChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="mb-3 bg-white text-neutral-900 border border-neutral-200 rounded-3xl px-5 py-6 shadow-lg flex flex-col items-center gap-6">
          <a
            href="/contact/index.html"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold">Find Dealer</span>
          </a>

          <a
            href="/book-a-test-drive/index.html"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
              <CarFront className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold">Test Drive</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-[60px] h-[60px] rounded-full bg-red-600 hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center"
        aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
      >
        <MapPin className="w-7 h-7 text-white" />
      </button>

      <a href="/book-a-test-drive/index.html" className="block">
        <img
          src="/chat.png"
          alt="Chat Now"
          className="w-[60px] h-[60px] object-contain"
        />
      </a>
    </div>
  );
};

export default ButtonChat;
