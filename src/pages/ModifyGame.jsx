import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameDetails from '../components/GameDetails';
import GameForm from '../components/GameForm';

function ModifyGame() {
  const navigate = useNavigate();

  const onBackTohome = () => {
    navigate('/');
  };
  return (
    <div>
      <GameDetails />
      <GameForm buttonAction={onBackTohome} />
    </div>
  );
}

export default ModifyGame;
