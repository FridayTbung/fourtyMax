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

const ComponentWrapper = styled.label`
  flex: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Checkbox = styled.input`
  appearance: none;
  height: 20px;
  width: 20px;
  background-color: var(--color-white);
  border: 1.5px solid var(--color-border);
  border-radius: 2px;

  &:checked {
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--color-border);
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;
