import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 8rem 1rem 7rem 1rem;
  clip-path: polygon(
    0% 14%,
    100% 0,
    100% 84%,
    0 100%
  );
  background: #f9f9f9;
  text-align: center;

  @media (max-width: 680px) {
    padding: 14rem 1rem 18rem 1rem;
    margin-bottom: 0;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
    background: #2b2a2a;
    
    a {
      color: #adad2e;
    }
	`}
`
