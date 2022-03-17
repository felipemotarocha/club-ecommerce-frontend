import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CategoriesContent = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  grid-gap: 15px;
  padding: 30px;

  & div:nth-child(1) {
    grid-area: a;
  }

  & div:nth-child(2) {
    grid-area: b;
  }

  & div:nth-child(3) {
    grid-area: c;
  }

  & div:nth-child(4) {
    grid-area: d;
  }

  & div:nth-child(5) {
    grid-area: e;
  }
`
