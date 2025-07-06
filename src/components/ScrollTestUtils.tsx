import { scrollToTop } from '../hooks/useScrollToTop';

/**
 * Development utility component for testing scroll functionality
 * Only visible in development mode
 */
const ScrollTestUtils = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const testScrollToTop = () => {
    scrollToTop(true);
  };

  const testScrollToMiddle = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const testScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <div className="bg-black/80 text-white p-2 rounded text-xs">
        <p className="mb-2 font-bold">Scroll Test Utils</p>
        <div className="space-y-1">
          <button
            onClick={testScrollToTop}
            className="block w-full text-left px-2 py-1 hover:bg-white/20 rounded text-xs"
          >
            📄 Top
          </button>
          <button
            onClick={testScrollToMiddle}
            className="block w-full text-left px-2 py-1 hover:bg-white/20 rounded text-xs"
          >
            ↕️ Middle
          </button>
          <button
            onClick={testScrollToBottom}
            className="block w-full text-left px-2 py-1 hover:bg-white/20 rounded text-xs"
          >
            📄 Bottom
          </button>
        </div>
        <p className="text-xs mt-2 opacity-60">
          Test scroll → navigate → check position
        </p>
      </div>
    </div>
  );
};

export default ScrollTestUtils;
