import styled from "styled-components";

const CheckboxInput = ({ name, onChange, checked, disabled }) => {
  console.log(checked);
  return (
    <CheckboxInputArea>
      <Checkbox
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label></label>
    </CheckboxInputArea>
  );
};

export default CheckboxInput;

const CheckboxInputArea = styled.div`
  flex: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.checked ? "#000000" : "#FFFFFF")};

  &:checked {
    backgroud-color: red;
  }
`;
