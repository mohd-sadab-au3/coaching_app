interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors md:hidden"
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}