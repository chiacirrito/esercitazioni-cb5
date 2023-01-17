import "./index.css";

const Friend = ({ data }) => {
  const { image /*  firstName, lastName */ } = data;

  return (
    <div className="Friend">
      <img src={image} alt="lastName" />
      {/* <h3>{`${firstName} ${lastName}`}</h3> */}
    </div>
  );
};

export default Friend;
