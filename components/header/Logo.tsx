import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <a
        href="/"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-0"
      >
        <Image
          priority={true}
          src="/images/wanteat-logo-2.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />{" "}
      </a>
    </div>
  );
}
