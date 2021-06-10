import Manager from "../../Components/Buttons/Manager";
import Visitor from "../../Components/Visitor";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__visitors">
        <Visitor />
        <Visitor />
        <Visitor />
      </div>

      <div className="main__actions">
        <Manager />
      </div>
    </div>
  );
};

export default Main;
