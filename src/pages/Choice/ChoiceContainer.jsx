import React, { useState } from "react";
import ChoicePresener from "./ChoicePresenter";

const ChoiceContainer = () => {
  const [radio, setRadio] = useState("all");
  const [checkbox, setCheckbox] = useState({ trueValue: true, falseValue: true });

  const onRadioChange = (e) => {
    setRadio(e.target.value);
  };
  const onCheckboxChange = (e) => {
    var name = e.target.name;
    if (name === "trueValue") setCheckbox({ ...checkbox, trueValue: !checkbox.trueValue });
    else setCheckbox({ ...checkbox, falseValue: !checkbox.falseValue });
  };

  return (
    <ChoicePresener
      radio={radio}
      checkbox={checkbox}
      onRadioChange={onRadioChange}
      onCheckboxChange={onCheckboxChange}
    />
  );
};

export default ChoiceContainer;
