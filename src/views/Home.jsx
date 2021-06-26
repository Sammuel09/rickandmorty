import React from "react";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Home = ({ isLoading, characters }) => {
  return (
    <div className="body-container">
      {isLoading ? (
        <Loader
          text-align="center"
          type="Oval"
          color="#00BFFF"
          height={150}
          width={150}
        />
      ) : (
        characters?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            imageUrl={character.image}
            name={character.name}
            status={character.status}
            gender={character.gender}
            species={character.species}
            location={character.location}
            origin={character.origin}
            type={character.type}
            episodes={character.episode}
          />
        ))
      )}
    </div>
  );
};

export default Home;
