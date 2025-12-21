const ButtonChat = () => {
  return (
    <div className="fixed bottom-4 right-10 z-50 flex flex-col items-end gap-3">
      <a href="/contact/index.html" className="block">
        <img
          src="/find-dealer.png"
          alt="Find Dealer"
          className="w-[60px] h-[60px] object-contain"
        />
      </a>

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
