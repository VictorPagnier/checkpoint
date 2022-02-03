import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function GameForm({
  myGame = {}, buttonAction, create = false, deleteGame = false,
}) {
  const [game, setGame] = useState(myGame);
  const [message, setMessage] = useState(false);
  const { id } = useParams();

  const updateGame = (value, type) => {
    const newGame = { ...game };
    newGame[type] = value;
    setGame(newGame);
  };

  const checkValidity = () => {
    const {
      name, description, genre, image, year, screenshots, id_categorie,
    } = game;
    return name && description && genre && image && year && screenshots && id_categorie;
  };

  const requestOptio = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...game }),
  };
  const deleteGameInBDD = () => {
    fetch(`http://localhost:8000/api/games/${id}`, requestOptio)
      .then(() => buttonAction(game))
      .catch((error) => new Error(error));
  };

  const requestOption = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...game }),
  };
  const updateGameInBDD = () => {
    fetch(`http://localhost:8000/api/games/${id}`, requestOption)
      .then(() => buttonAction(game))
      .catch((error) => new Error(error));
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...game }),
  };
  const createGameInBDD = () => {
    const validity = checkValidity();
    if (validity) {
      fetch('http://localhost:8000/api/games/', requestOptions)
        .then(() => buttonAction())
        .catch((error) => new Error(error));
    } else {
      setMessage(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 text-white">
      {message && <h4>You must fill all the fields</h4>}
      <label htmlFor="name">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.name || ''}
          placeholder="Name"
          onChange={(event) => updateGame(event.target.value, 'name')}
        />
      </label>
      <label htmlFor="description">
        <textarea
          className="text-black w-80 rounded-lg placeholder:pl-4"
          value={game.description || ''}
          placeholder="Description"
          onChange={(event) => updateGame(event.target.value, 'description')}
        />
      </label>
      <label htmlFor="genre">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.genre || ''}
          placeholder="Genre"
          onChange={(event) => updateGame(event.target.value, 'genre')}
        />
      </label>
      <label htmlFor="image">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.image || ''}
          placeholder="URL of the image"
          onChange={(event) => updateGame(event.target.value, 'image')}
        />
      </label>

      <label htmlFor="year">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.year || ''}
          placeholder="Year of the release"
          onChange={(event) => updateGame(event.target.value, 'year')}
        />
      </label>

      <label htmlFor="screenshots">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.screenshots || ''}
          placeholder="URL of a screenshot"
          onChange={(event) => updateGame(event.target.value, 'screenshots')}
        />
      </label>

      <label htmlFor="id_categorie">
        <input
          className="text-black w-80 rounded-lg placeholder:pl-4"
          type="text"
          value={game.id_categorie || ''}
          placeholder="ID of the genre"
          onChange={(event) => updateGame(event.target.value, 'id_categorie')}
        />
      </label>
      {create ? (
        <button className="" type="submit" onClick={() => createGameInBDD()}>Add new game</button>
      ) : (
        <button className="" type="submit" onClick={() => updateGameInBDD()}>Modify the game</button>
      )}
      {deleteGame ? (
        <button className="" type="submit" onClick={() => deleteGameInBDD()}>Delete the game</button>
      ) : (
        ''
      )}
      <button className="" type="submit" onClick={() => buttonAction()}>
        Cancel
      </button>
    </div>
  );
}

export default GameForm;
