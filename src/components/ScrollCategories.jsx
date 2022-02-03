import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ScrollCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/categories')
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((e) => new Error(e));
  }, []);
  return (
    <>
      <h1 className="text-stone-400 h-8 font-semibold mx-8 font-body">CATEGORIES</h1>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
        {categories.map((categorie) => (
          <div key={categorie.id} className="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
            <Link to={`/categories/${categorie.id}/${categorie.id}`}>
              <div className="flex justify-evenly items-center shrink-0 w-auto h-20 w-40 rounded-lg shadow-xl bg-zinc-800 sm:h-20">
                <img className="h-10 p-2 w-auto bg-white rounded-lg" src={categorie.image} alt={categorie.description} />
                <p className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-200 hover:text-yellow-400 duration-300 font-medium pb-5">{categorie.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ScrollCategories;
