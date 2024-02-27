import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Image
        priority={true}
        src="/images/wanteat-logo-2.png"
        width={150}
        height={150}
        alt="Picture of the author"
      />
    </div>
  );
}
