import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase">
              Hi, my name is
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Byron Pantoja.
            </p>
            <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>I'm an aspiring Fullstack developer.</p>
            </div>
          </div>
          {/*<div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">*/}
          {/*  {user ? (*/}
          {/*    <Link*/}
          {/*      to="/notes"*/}
          {/*      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"*/}
          {/*    >*/}
          {/*      View Notes for {user.email}*/}
          {/*    </Link>*/}
          {/*  ) : (*/}
          {/*    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">*/}
          {/*      <Link*/}
          {/*        to="/join"*/}
          {/*        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"*/}
          {/*      >*/}
          {/*        Sign up*/}
          {/*      </Link>*/}
          {/*      <Link*/}
          {/*        to="/login"*/}
          {/*        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600  "*/}
          {/*      >*/}
          {/*        Log In*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
    </main>
  );
}
