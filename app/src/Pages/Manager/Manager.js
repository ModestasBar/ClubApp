// import react from "react";
import "./Manager.scss";
import Add from "../../Components/Buttons/Add";
import Remove from "../../Components/Buttons/Remove";
import Home from "../../Components/Buttons/Home";

const Manager = () => {
  return (
    <div className="client">
      <div className="client__avatar" />
      <div className="client__form">
        <div className="client__form__inputs">
          <input placeholder="Name" className="client__form__inputs__input" />
          <input
            placeholder="Surname"
            className="client__form__inputs__input"
          />
          <input placeholder="Age" className="client__form__inputs__input" />
          <div className="client__form__inputs__radios">
            <label>Gender:</label>
            <div className="client__form__inputs__radios__radio">
              <input type="radio" id="male" value="M" />
              <label for="male">Male</label>
            </div>
            <div className="client__form__inputs__radios__radio">
              <input type="radio" id="female" value="F" />
              <label for="female">Female</label>
            </div>
          </div>
        </div>
        <div className="client__form__actions">
          <Remove />
          <Add />
        </div>
      </div>
      <div className="client__actions">
        <Home />
      </div>
    </div>
  );
};

export default Manager;
