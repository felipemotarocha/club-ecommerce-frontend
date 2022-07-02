import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;

  p {
    color: ${Colors.text.dark};
  }

  button {
    width: 650px;
  }
`

export const CheckoutTitle = styled.p`
  font-weight: bold;
  font-size: 1.325rem;
`

export const CheckoutProducts = styled.div`
  min-width: 650px;
  overflow-y: scroll;
  margin-top: 15px;
  margin-bottom: 15px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Colors.input.background};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Colors.text.dark};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.text.dark};
  }
`

export const CheckoutTotal = styled.p`
  width: 650px;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 15px;
`
