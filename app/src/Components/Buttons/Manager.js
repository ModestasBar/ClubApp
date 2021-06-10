import "./Buttons.scss";
import { useHistory } from "react-router-dom";

const Manager = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/manage");
  };

  return (
    <button className="btn btn--manager" onClick={handleClick}>
      Add client
    </button>
  );
};

export default Manager;
