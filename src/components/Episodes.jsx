import React from "react";
import PropTypes from "prop-types";

const Episodes = ({ episodes }) => {
  return (
    <div className="episodes-container">
      {episodes.map((episode) => (
        <div key={episode.id} className="episodes">
          {episode.name ? episode.name : ""}
        </div>
      ))}
    </div>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.array,
};

export default Episodes;
