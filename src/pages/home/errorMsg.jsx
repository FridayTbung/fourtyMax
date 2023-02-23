import styled from "styled-components";

const ErrorMsg = ({ error }) => {
  return (
    <ComponentWrapper>
      <ErrorText>{error}</ErrorText>
    </ComponentWrapper>
  );
};

export default ErrorMsg;

const ComponentWrapper = styled.div``;

const ErrorText = styled.span``;
