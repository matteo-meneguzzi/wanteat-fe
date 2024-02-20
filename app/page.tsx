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
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl max-h-36 px-4  sm:px-6 lg:px-8">
          <Image
            priority={true}
            src="/images/purple_fruit.jpg"
            width={1000}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/*           <!-- Your content -->
           */}{" "}
        </div>
      </main>
    </>
  );
}
