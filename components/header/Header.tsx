"use client";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import MenuIcon from "./icons/MenuIcon";
import NotificationIcon from "./icons/NotificationIcon";
import LgNavBar from "./navbar/LgNavBar";
import SmNavBar from "./navbar/SmNavBar";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [userMenuRef]);

  return (
    <nav className="bg-rose-red">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MenuIcon
            isMainMenuOpen={isMainMenuOpen}
            setIsMainMenuOpen={setIsMainMenuOpen}
          />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <LgNavBar />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationIcon />
            <UserMenu
              isUserMenuOpen={isUserMenuOpen}
              setIsUserMenuOpen={setIsUserMenuOpen}
              userMenuRef={userMenuRef}
            />
          </div>
        </div>
      </div>
      {/* // Mobile menu, show/hide based on menu state. --> */}
      {isMainMenuOpen && <SmNavBar isMainMenuOpen={isMainMenuOpen} />}{" "}
    </nav>
  );
}
