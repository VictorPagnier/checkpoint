import React from 'react';
import { Link } from 'react-router-dom';

function Game(props) {
  return (
    <div key={props.id} className="snap-x snap-mandatory first:pl-8">
      <Link to={`/games/${props.id}`}><img className="opacity-75 snap-always snap-center object-cover shrink-0 max-w-none w-56 h-40 rounded-[20px] sm:h-60 sm:w-96 hover:blur-sm" src={props.image} alt={props.description} /></Link>
      <p className="z-10 bottom-16 pl-4 absolute text-white text-xs truncate sm:pl-10 sm:bottom-1/4 sm:text-xl">{props.name}</p>
      <p className="z-10 top-4 ml-4 py-2 px-1 rounded-[5px] font-bold absolute text-black bg-white drop-shadow-lg sm:top-4 sm:ml-80">{props.year}</p>
    </div>
  );
}

export default Game;
