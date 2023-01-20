import "./index.css";

const Friend = ({ data, setModalContent, setModalEnabled }) => {
  const { id, image, firstName } = data;

  const onHandleClick = () => {
    setModalContent(id);
    setModalEnabled(true);
  };

  return (
    <div className="Friend" onClick={onHandleClick} id={id}>
      <img src={image} alt="lastName" />
      <h3>{`${firstName}`}</h3>
      <h3>Birthday</h3>
    </div>
  );
};

export default Friend;
