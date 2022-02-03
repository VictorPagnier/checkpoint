import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="flex flex-col items-center gap-5 pt-44 sm:pt-96">
      <div className="text-white items-center flex flex-col sm:flex-row">
        <h1 className="text-zinc-800 text-4xl sm:text-7xl font-bold pr-4 sm:border-r border-zinc-400">404</h1>
        <div className="flex flex-col items-center pl-4 sm:pt-10 gap-2">
          <h1 className="text-4xl sm:text-7xl font-bold">Page not found</h1>
          <p className="text-xs">Please check the URL in the address bar and try again.</p>
        </div>
      </div>
      <div className="text-white flex flex-row gap-5">
        <Link className="bg-zinc-800 p-2 rounded-md" to="/">Go back home</Link>
        <Link className="bg-zinc-200 p-2 text-zinc-800 rounded-md" to="/">Contact support</Link>
      </div>
    </div>
  );
}

export default Page404;
