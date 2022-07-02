import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  p {
    color: ${Colors.text.white};
    font-weight: 500;
    margin-bottom: 25px;
    font-size: 1.325rem;
    max-width: 50%;
    text-align: center;
  }
`
