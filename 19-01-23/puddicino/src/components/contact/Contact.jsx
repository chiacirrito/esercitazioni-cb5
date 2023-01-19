import "./index.css";

const Contact = ({ data }) => {
  const { firstName, image, email, phone } = data;

  return (
    <div className="contact">
      <img src={image} alt="lastName" />
      <h3>@{`${firstName}`}</h3>
      <h3>{`${email}`}</h3>
      <h3>{`${phone}`}</h3>
    </div>
  );
};

export default Contact;
