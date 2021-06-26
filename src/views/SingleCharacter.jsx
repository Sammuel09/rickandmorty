import { Link } from "react-router-dom";
import { VscTriangleLeft } from "react-icons/vsc";
import { useState, useEffect } from "react";
import Box from "../components/Box";
import Episodes from "../components/Episodes";
import Error from "../components/Error";
import Loader from "../components/Loader";

const SingleCharacter = ({ match }) => {
  const {
    params: { characterId },
  } = match;
  const [location, setLocation] = useState({});
  const [origin, setOrigin] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getSingleCharacter = async () => {
      setHasError(false);
      setIsLoading(true);
      try {
        const response = await apiRequest(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        const getEpisodes = async (data) => {
          const response = await apiRequest(
            `https://rickandmortyapi.com/api/episode/${data}`
          );
          return Array.isArray(response) ? response : [response];
        };
        const locationInfo = await apiRequest(response.location.url);
        const originInfo = await apiRequest(response.origin.url);

        setLocation(locationInfo);
        setOrigin(originInfo);
        const arrayOfEpisodes = getCharacterEpisodes(response);
        const episodes = await getEpisodes(arrayOfEpisodes);

        setEpisodes(episodes);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getSingleCharacter();
  }, [characterId]);

  const getCharacterEpisodes = ({ episode }) => {
    const characterEpisodes = episode?.map((urlString) => {
      let splittedStringArray = urlString.split("/");
      return splittedStringArray[5];
    });
    return characterEpisodes;
  };

  const apiRequest = async (endpoint) => {
    if (endpoint.length === 0) {
      return "";
    }
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <div>
        {hasError ? (
          <Error />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className="box-container">
            <Link to="/">
              <button className="btn">
                <VscTriangleLeft
                  style={{
                    color: "#fff",
                    marginTop: "2px",
                    marginRight: "2px",
                    verticalAlign: "text-bottom",
                  }}
                />
                Go back
              </button>
            </Link>
            <div className="inner-box-container">
              <div>
                <h2>Episodes the Character featured in </h2>
                <Episodes episodes={episodes} />
              </div>
              <div>
                <h2 className="box-container-text">Location Information</h2>
                <Box
                  name={location.name}
                  dimension={location.dimension}
                  residents={location.residents}
                  type={location.type}
                />
              </div>
              <div>
                <h2 className="box-container-text">Origin Information</h2>
                <Box
                  name={origin.name}
                  dimension={origin.dimension}
                  residents={origin.residents}
                  type={origin.type}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCharacter;
