import "./Buttons.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <button className="btn btn--home" onClick={handleClick}>
      Client Lobby
    </button>
  );
};

export default Home;
