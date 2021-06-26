import PropTypes from "prop-types";

const Box = ({ name, dimension, residents, type }) => {
  return (
    <div className="box-details">
      <p className="box-text">
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>Name: </span>{" "}
        {name}
      </p>
      <p className="box-text">
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Dimension:{" "}
        </span>{" "}
        {dimension}
      </p>
      <p className="box-text">
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          No of residents:{" "}
        </span>
        {residents?.length}
      </p>
      <p className="box-text">
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>Type: </span>
        {type}
      </p>
    </div>
  );
};

Box.propTypes = {
  name: PropTypes.string,
  dimension: PropTypes.string,
  residents: PropTypes.array,
  type: PropTypes.string,
};

export default Box;
