import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

function CategorieDetails() {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/${id}/${id}`)
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((error) => new Error(error));
  }, []);

  return (
    <>
      <Link to="/addgame/" className="absolute z-10">
        <p className="font-bold text-4xl text-white bg-white/25 rounded-lg ml-24 m-4 p-2 pb-3 px-6">+</p>
      </Link>
      <Link to="/" className="absolute z-10">
        <p className="font-bold text-4xl text-white bg-white/25 rounded-lg m-4 p-2 pb-3 px-3">←</p>
      </Link>
      <div className="text-white flex flex-col items-center gap-24 pt-24 sm:flex-row sm:pl-24 sm:pt-44">
        {categories.map((categorie) => (
          <div key={categorie.id}>
            <Link to={`/games/${categorie.id}`}>
              <Tilt
                className="tilt"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.2}
                gyroscope
              >
                <h2>{categorie.name}</h2>
                <img className="w-44 h-44 object-cover" src={categorie.screenshots} alt={categorie.description} />
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategorieDetails;
