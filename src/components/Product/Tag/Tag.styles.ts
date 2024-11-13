import { styled } from 'styled-components';

export const TagContainer = styled.span`
  background-color: ${({ theme }) => theme.PRIMARY_700};
  color: ${({ theme }) => theme.PRIMARY_900};
  padding: 4rem 8rem;
  border-radius: 9999rem;
  text-transform: uppercase;
  font-size: 10rem;
  font-weight: 800;
  line-height: 120%;
`;
