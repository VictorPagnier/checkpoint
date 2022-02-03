import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function GameDetails() {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/games/${id}`)
      .then((response) => response.json())
      .then((result) => setGame(result))
      .catch((error) => new Error(error));
  }, []);
  return (
    <div className="text-white">
      <Link to={`/deletegame/${id}`} className="absolute z-10">
        <p className="font-bold text-4xl text-white bg-white/25 rounded-lg ml-44 m-4 p-2 pb-3 px-4">✘</p>
      </Link>
      <Link to={`/modifygame/${id}`} className="absolute z-10">
        <p className="font-bold text-4xl text-white bg-white/25 rounded-lg ml-24 m-4 p-2 pb-3 px-4">⚙</p>
      </Link>
      <Link to="/" className="absolute z-10">
        <p className="font-bold text-4xl text-white bg-white/25 rounded-lg m-4 p-2 pb-3 px-3">←</p>
      </Link>
      <img className="sm:w-full sm:h-96 h-52 w-full object-cover" src={game.image} alt={game.description} />
      <div className="top-5 p-24 px-80 h-1 w-auto absolute bg-gradient-to-t from-black sm:w-full sm:h-96" />
      <div className="p-5 flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold sm:text-4xl">{game.name}</h2>
        <p className="p-4">{game.description}</p>
        <img className="max-w-sm" src={game.screenshots} alt={game.description} />
        <div className="flex gap-2">
          <p>GENRE:</p>
          <p>{game.genre}</p>
        </div>
        <div className="flex gap-2">
          <p>YEAR OF RELEASE:</p>
          <p>{game.year}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
