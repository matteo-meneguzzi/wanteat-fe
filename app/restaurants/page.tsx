import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First nested route using Next.js",
};

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <section>
      <h1>Hello, Dashboard Page!</h1>
    </section>
  );
}
