import React from "react";
import styled from "styled-components";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox
} from "@mui/material";

const Container = styled.div`
  border: 1px solid #006888;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const CustomRadioGroup = styled(RadioGroup)`
  justify-content: center;
`;
const CustomFormGroup = styled(FormGroup)`
  && {
    justify-content: center;
    flex-direction: row;
  }
`;

const ChoicePresener = (props) => {
  const { radio, checkbox, onRadioChange, onCheckboxChange } = props;

  return (
    <>
      <Container>
        <div>Radio Button</div>
        <FormContainer>
          <div style={{ marginRight: "15px" }}>Search</div>
          <CustomRadioGroup row value={radio} onChange={onRadioChange}>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
          </CustomRadioGroup>
        </FormContainer>
      </Container>
      <Container>
        <div>Checkbox</div>
        <FormContainer>
          <div style={{ marginRight: "15px" }}>Search</div>
          <CustomFormGroup>
            <FormControlLabel
              control={ <Checkbox checked={checkbox.trueValue} onChange={onCheckboxChange} name="trueValue" /> }
              label="True"
            />
            <FormControlLabel
              control={ <Checkbox checked={checkbox.falseValue} onChange={onCheckboxChange} name="falseValue" /> }
              label="False"
            />
          </CustomFormGroup>
        </FormContainer>
      </Container>
    </>
  );
};

export default ChoicePresener;
