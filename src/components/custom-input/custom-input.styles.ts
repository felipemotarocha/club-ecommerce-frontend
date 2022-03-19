import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

type CustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<CustomInputContainerProps>`
  border: none;
  width: 100%;
  background-color: ${Colors.input.background};
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: ${Colors.text.dark};
  border: ${(props) => (props.hasError ? `2px solid ${Colors.error}` : 'none')};

  &::placeholder {
    color: ${(props) =>
      props.hasError ? Colors.error : Colors.input.placeholder};
  }

  &:focus {
    outline: ${(props) =>
      props.hasError ? 'none' : `2px solid ${Colors.input.placeholder}`};
  }
`
