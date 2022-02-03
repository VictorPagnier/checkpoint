import React from 'react';

function Header() {
  const date = new Date(Date.now());
  return (
    <div>
      <p className="flex flex-col justify-center text-stone-400 text-xl font-body mx-8 h-24">{date.toDateString()}</p>
      <h1 className="text-white font-body text-4xl mx-8 sm:text-7xl">Explore games</h1>
      <div className="h-40 flex flex-col justify-center mx-8">
        <form>
          <label className="relative block" htmlFor="search">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2" />
            <input className="placeholder:text-stone-400 block h-14 bg-zinc-800 w-full rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-white focus:text-white focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Header;
