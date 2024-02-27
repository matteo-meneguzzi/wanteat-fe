import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";

interface UserDropdownProps {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
  userMenuRef: MutableRefObject<HTMLDivElement | null>;
}

export default function UserDropdown({
  isUserMenuOpen,
  setIsUserMenuOpen,
  userMenuRef,
}: UserDropdownProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    /* //
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        --> */
    isUserMenuOpen && (
      <div
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
        ref={userMenuRef}
      >
        {/* Active: "bg-gray-100", Not Active: "" -- */}
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-0"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-1"
        >
          Settings
        </a>
        <a
          href="/api/auth/logout"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    )
  );
}
