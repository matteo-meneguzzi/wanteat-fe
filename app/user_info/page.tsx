"use client";

import { Metadata } from "next";
import { useUser } from "@auth0/nextjs-auth0/client";

const metadata: Metadata = {
  title: "User Info",
};

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const { user, error, isLoading } = useUser();

  return (
    <section>
      <div className="hero min-h-screen bg-base-200 items-start py-6">
        <div className="text-center">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold mb-6">Your profile</h1>
            <div className="bg-white text-left px-8 py-6 rounded-md">
              {/*  <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Applicant Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Personal details and application.
                </p>
              </div> */}
              <div className="avatar">
                <div className="w-24 rounded">
                  <img
                    src={
                      user?.picture ??
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <div>
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {user?.name ?? "Missing info"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {user?.email ?? "Missing info"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      About
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {user?.nickname ?? "Missing info"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
