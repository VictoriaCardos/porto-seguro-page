import styled from 'styled-components'

export const HeaderSection = styled.header`
  width: 100%;
  height: 130px;
  background: var(--white-150);
  display: flex;
  flex-direction: column;
  padding: 0;

  img {
    top: 24px;
    left: 50px;
    width: 60px;
    height: 43px;
  }
  div {
    display: flex;
    display: flex;
    height: 130px;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;

    a {
      text-decoration: none;
      display: flex;
      font: 600 20px/27px Open Sans, SemiBold;
      color: var(--yellow-750);
      border-style: none;
      flex-direction: row;
    }
  }
`
