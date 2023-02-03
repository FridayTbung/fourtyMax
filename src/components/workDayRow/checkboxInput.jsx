import styled from "styled-components";

const CheckboxInput = ({ name, onChange, checked }) => {
  return (
    <CheckboxInputArea>
      <Checkbox
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </CheckboxInputArea>
  );
};

export default CheckboxInput;

const CheckboxInputArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input``;
