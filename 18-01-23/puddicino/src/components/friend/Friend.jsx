import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, birthDate } = data;

  return (
    <div className="Friend">
      <img src={image} alt="lastName" />
      <h3>{`${firstName}`}</h3>
      <h3>{`${birthDate}`}</h3>
    </div>
  );
};

export default Friend;
