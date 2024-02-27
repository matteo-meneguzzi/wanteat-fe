import UserInfo from "@/components/userInfo/UserInfo";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "First App using Next.js",
};

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  //const pathname = usePathname();

  return (
    <>
      <header className="bg-gradient-to-r from-sky-500 to-indigo-500 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">ciao</div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/*           <!-- Your content -->
           */}
          {" ciaoaoa"}
          <UserInfo />
        </div>
      </main>
    </>
  );
}
