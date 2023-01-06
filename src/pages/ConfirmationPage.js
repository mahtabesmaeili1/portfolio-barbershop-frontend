import { Link } from "react-router-dom";

export const ConfirmationPage = () => {
  return (
    <>
      <h1>Your Appointment is confirmed</h1>
      <p>Show time and service</p>
      <p>
        You should receive a confirmation email in the next few secnonds. If
        not, please contact us
      </p>
      <Link to={`/makeappointment`}>
        <button>Make another appointment</button>
      </Link>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </>
  );
};
