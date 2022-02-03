import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameForm from '../components/GameForm';

function AddGame() {
  const navigate = useNavigate();

  const onBackTohome = () => {
    navigate('/');
  };
  return (
    <div className="flex pt-72 justify-center sm:pt-80">
      <GameForm buttonAction={onBackTohome} create />
    </div>
  );
}

export default AddGame;
