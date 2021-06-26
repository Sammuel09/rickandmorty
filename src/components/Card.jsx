import PropTypes from "prop-types";
import {
  FaCircle,
  FaDna,
  FaGlobe,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({
  id,
  imageUrl,
  name,
  status,
  gender,
  species,
  location,
  origin,
  type,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Rick and Morty Character" className="img" />
      <div className="card-details">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-title-text">
          <h3>
            <FaCircle
              style={{
                color:
                  status === "Alive"
                    ? "#a4e82e"
                    : status === "Dead"
                    ? "#f53325"
                    : "",
                verticalAlign: "middle",
                marginRight: "8px",
                marginBottom: "3px",
              }}
            />
            {status}
          </h3>
          <h3
            className="card-pill"
            style={{
              backgroundColor:
                gender === "Male"
                  ? "#4287f5"
                  : gender === "Female"
                  ? "#FF69B4"
                  : "#778899",
              color: "white",
            }}
          >
            {gender}
          </h3>
        </div>
        <div className="card-info">
          <FaDna
            style={{
              marginTop: "6px",
              marginRight: "8px",
            }}
          />
          <h3>{species}</h3>
        </div>
        <div className="card-info">
          <FaMapMarkerAlt
            style={{
              marginTop: "6px",
              marginRight: "8px",
            }}
          />
          <h3>{location.name}</h3>
        </div>
        <div className="card-info">
          <FaGlobe
            style={{
              marginTop: "6px",
              marginRight: "8px",
            }}
          />
          <h3>{origin.name}</h3>
        </div>
        <div className="card-info">
          <FaUser
            style={{
              marginTop: "6px",
              marginRight: "8px",
            }}
          />
          <h3>{type ? type : "Not Available"}</h3>
        </div>
        <div className="card-footer">
          <Link to={`/character/${id}`}>
            <button className="btn">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  origin: PropTypes.object,
  location: PropTypes.object,
};

export default Card;
