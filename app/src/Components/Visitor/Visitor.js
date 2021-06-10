import "./Visitor.scss";
import qs from "query-string";
import avatar from "../../assets/image/avatar.png";
import { useHistory } from "react-router-dom";

const Visitor = ({ id = 1 }) => {
  const history = useHistory();

  const handleClick = () => {
    const url = qs.stringifyUrl({
      url: "/manage",
      query: {
        id,
      },
    });

    history.push(url);
  };

  return (
    <div className="visitor" onClick={handleClick}>
      <img src={avatar} alt="avatar" className="visitor__avatar" />
      <p className="visitor__description">
        Name: <span className="visitor__description--value">Modestas</span>
      </p>
      <p className="visitor__description">
        Surname:{" "}
        <span className="visitor__description--value">Baranauskas</span>
      </p>
      <p className="visitor__description">
        Age: <span className="visitor__description--value">26</span>
      </p>
      <p className="visitor__description">
        Gender: <span className="visitor__description--value">Male</span>
      </p>

      <div className="visitor__edit">edit &#9998;</div>
    </div>
  );
};

export default Visitor;
