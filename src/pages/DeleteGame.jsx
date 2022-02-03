import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameDetails from '../components/GameDetails';
import GameForm from '../components/GameForm';

function DeleteGame() {
  const navigate = useNavigate();

  const onBackTohome = () => {
    navigate('/');
  };
  return (
    <div>
      <GameDetails />
      <GameForm buttonAction={onBackTohome} deleteGame />
    </div>
  );
}

export default DeleteGame;
