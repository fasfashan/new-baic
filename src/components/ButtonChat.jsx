import { useState } from "react";
import { CarFront, MapPin, X, ArrowUpRight } from "lucide-react";

const ButtonChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Popup */}
      {isChatPopupOpen && (
        <div className="mb-3 bg-white text-neutral-900 rounded-3xl shadow-2xl overflow-hidden w-80">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <h3 className="text-lg font-bold">BAIC Assistant</h3>
            <button
              onClick={() => setIsChatPopupOpen(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8 text-center">
            <h4 className="text-2xl font-bold mb-2">
              Hello <span className="inline-block">👋</span>
            </h4>
            <p className="text-neutral-600 mb-8">How can I help you today?</p>

            {/* Links */}
            <div className="space-y-3">
              <a
                href="/book-a-test-drive/index.html"
                className="flex items-center justify-between px-5 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-colors group"
              >
                <span className="text-sm font-medium text-left">
                  Book a test drive
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600" />
              </a>

              <a
                href="/request-price-list/index.html"
                className="flex items-center justify-between px-5 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-colors group"
              >
                <span className="text-sm font-medium text-left">
                  Request price list
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600" />
              </a>

              <a
                href="/join-partner/index.html"
                className="flex items-center justify-between px-5 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-colors group"
              >
                <span className="text-sm font-medium text-left">
                  Join partner
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions Popup */}
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

      <button
        type="button"
        onClick={() => setIsChatPopupOpen((v) => !v)}
        className="block"
        aria-label="Chat now"
      >
        <img
          src="/chat.png"
          alt="Chat Now"
          className="w-[60px] h-[60px] object-contain"
        />
      </button>
    </div>
  );
};

export default ButtonChat;
