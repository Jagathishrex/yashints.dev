import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 2rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		margin-top: 0;
		background: #212121;
	`};
`

export const FullContainer = styled.div`
  width: 100%;
  padding: 2rem 0 1rem 0;
  color: #fff;
  background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #000;
		background-image: linear-gradient(10deg, #404040 0%, #303030 100%);		
	`};
`

export const List = styled.ul`
  list-style: none;
  align-self: center;

  a {
    color: #fff;
  }
`

export const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
`

export const StyledLogo = styled.div`
  transition: 0.5s;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
  margin-bottom: 0;

  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`

export const Social = styled.a`
  margin-right: 1rem;

  ${({ last }) =>
    last &&
    `
		margin-right: unset;
	`};
`

export const Grow = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`
