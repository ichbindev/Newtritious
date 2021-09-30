import styled from 'styled-components';
import theme from '../../theme';

const StyledForm = styled.form`
  width: 50%;
  margin: auto;
  margin-top: 50px;
  padding: 40px;
  background: ${theme.colors.whiteSpace};
  border-radius: 10px;
  border-width: 4px;
  border-color: ${theme.colors.primary.default};
  box-shadow: 3px 5px 10px 5px #0003, 1px 2px 10px 3px #0001 inset;
`;

const StyledTextInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border-color: #000;
  border-width: 2px;
  padding: 3px;
  margin: auto;
  margin-bottom: 30px;
  display: block;
  font-size: 1.1rem;
  box-shadow: 3px 5px 10px #0001;

  &:focus {
    border-color: #00d;
    outline: none;
  }
`;

const StyledInputMessage = styled.p`
  font-size: 0.8rem;
  color: #d00;
  position: absolute;
  left: 0;
  top: 34px;
`;

const StyledSubmit = styled.input.attrs({
  type: 'submit'
})`
  border-radius: 5px;
  padding: 15px 30px 15px 30px;
  color: ${theme.colors.whiteSpace};
  background: ${theme.colors.primary.default};
  font-size: 1.5rem;
  transition: background 400ms, color 400ms;
  border-width: 3px;
  border-color: ${theme.colors.primary.default};
  box-shadow: 3px 5px 10px #0003;

  &.centered {
    margin-left: auto;
    margin-right: auto;
  }

  &.small {
    padding: 8px 20px 8px 20px;
    font-size: 1.25rem;
    border-radius: 10px;
  }

  &.blue {
    background: #28c;
  }

  &:hover {
    background: ${theme.colors.whiteSpace};
    color: ${theme.colors.primary.default};
    cursor: pointer;
  }
  &.blue:hover {
    background: #05b;
    cursor: pointer;
  }
`;

export { StyledTextInput, StyledSubmit, StyledInputMessage, StyledForm };
