import React, { useEffect, useState } from 'react';
import Game from './Game';

function ScrollPopular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/games/note/reviews')
      .then((response) => response.json())
      .then((result) => setPopular(result))
      .catch((error) => new Error(error));
  }, []);
  return (
    <>
      <h1 className="text-stone-400 h-8 font-semibold mx-8 font-body">POPULAR</h1>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
        {popular.filter((populared) => populared.note >= 4).map((populared) => (
          <Game
            key={populared.id}
            year={populared.year}
            name={populared.name}
            image={populared.image}
            id={populared.id}
          />
        ))}
      </div>
    </>
  );
}

export default ScrollPopular;
