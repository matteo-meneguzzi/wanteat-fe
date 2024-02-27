import { Dispatch, MutableRefObject, SetStateAction } from "react";
import SignIn from "./SignIn";
import UserDropdown from "./UserDropdown";

interface UserMenuProps {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
  userMenuRef: MutableRefObject<HTMLDivElement | null>;
}

export default function UserMenu({
  isUserMenuOpen,
  setIsUserMenuOpen,
  userMenuRef,
}: UserMenuProps) {
  return (
    <div className="relative ml-3">
      <SignIn
        isUserMenuOpen={isUserMenuOpen}
        setIsUserMenuOpen={setIsUserMenuOpen}
      />
      <UserDropdown
        isUserMenuOpen={isUserMenuOpen}
        setIsUserMenuOpen={setIsUserMenuOpen}
        userMenuRef={userMenuRef}
      />
    </div>
  );
}
