 const FixedPlusButton: React.FC = () => {
    return (
      <button
        className="fixed bottom-20 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Add Club"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </button>
    );
  };

  export default FixedPlusButton;