import styled from "styled-components";

const CheckboxInput = ({ name, onChange, checked, disabled }) => {
  return (
    <ComponentWrapper>
      <Checkbox
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
    </ComponentWrapper>
  );
};

export default CheckboxInput;

const ComponentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input``;
